import { Container, Row } from "react-bootstrap";
import List from "./List/List";
import Map from "./Map/Map";
import { useEffect, useState } from "react";
import { GetPlacesData } from "src/api";
type Coordinates = {
  lat: number;
  lng: number;
};

type Bounds = {
  sw: Coordinates;
  ne: Coordinates;
};

const SearchBar = () => {
  const [Place, setPlaces] = useState([]);
  const [childclicked, setchildclicked] = useState("");
  const [bounds, setBounds] = useState<Bounds>({
    sw: { lat: 0, lng: 0 },
    ne: { lat: 0, lng: 0 },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setcoordinates({ lat: e.coords.latitude, lng: e.coords.longitude });
    });
  }, []);

  const [coordinates, setcoordinates] = useState<Coordinates>({
    lat: 0,
    lng: 0,
  });
  useEffect(() => {
    GetPlacesData(bounds.sw, bounds.ne).then((data) => setPlaces(data));
  }, [bounds, coordinates]);
  console.log(Place);
  console.log({ childclicked });

  return (
    <Container id="search-bar" className="search-bar" fluid>
      <Row>
        <List places={Place} />
        <Map
          setcoordinates={setcoordinates}
          setbounds={setBounds}
          coordinates={coordinates}
          Place={Place}
          setchildclicked={setchildclicked}
        />
      </Row>
    </Container>
  );
};

export default SearchBar;
