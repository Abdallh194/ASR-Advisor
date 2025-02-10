import { useEffect, useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { GetWeatherThunk } from "@redux/Weather/WeatherSlice";
import { GetAllPlacesThunk } from "@redux/Places/PlacesSlice";
const useSearchBar = () => {
  //states
  // get place number when clicked on map
  const [childclicked, setchildclicked] = useState("");

  //fillter data state
  const [FilterdRating, setFilterdRating] = useState<TPlace[]>([]);

  //coordinates state
  const [coordinates, setcoordinates] = useState<Coordinates>({
    lat: 0,
    lng: 0,
  });

  //bounds state
  const [bounds, setBounds] = useState<Bounds>({
    sw: { lat: 0, lng: 0 },
    ne: { lat: 0, lng: 0 },
  });

  //place type state
  const [type, settype] = useState("restaurants");

  //place rate state
  const [rate, setrate] = useState(0);

  /////////////////////////////////////////////////////<></>
  //dispatch
  const dispatch = useAppDispatch();

  // get needed data from redux
  const { PlacesData, error, loading } = useAppSelector((s) => s.resturants);
  const { WeatherData } = useAppSelector((s) => s.weather);

  // get current geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setcoordinates({ lat: e.coords.latitude, lng: e.coords.longitude });
    });
  }, []);

  // fire get places thunk
  useEffect(() => {
    if (bounds && bounds.sw && bounds.ne) {
      dispatch(GetAllPlacesThunk({ sw: bounds.sw, ne: bounds.ne, type }));
      setFilterdRating([]);
    }
  }, [bounds, dispatch, type]);

  // fire Weather thunk
  const stableCoordinates = useMemo(
    () => ({
      lat: coordinates.lat,
      lng: coordinates.lng,
    }),
    [coordinates.lat, coordinates.lng]
  );

  useEffect(() => {
    dispatch(
      GetWeatherThunk({
        lat: stableCoordinates.lat,
        lng: stableCoordinates.lng,
      })
    );
  }, [dispatch, stableCoordinates]);

  //filter data based on rate
  useEffect(() => {
    const FilteredPlacesByRating = PlacesData.filter(
      (places) => +places.rating > rate
    );
    setFilterdRating(FilteredPlacesByRating);
  }, [rate, PlacesData]);

  return {
    childclicked,
    setchildclicked,
    setBounds,
    PlacesData,
    coordinates,
    type,
    setcoordinates,
    settype,
    rate,
    setrate,
    error,
    loading,
    FilterdRating,
    WeatherData,
  };
};

export default useSearchBar;
