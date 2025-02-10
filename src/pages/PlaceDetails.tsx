import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { GetFillteredPlaces } from "@redux/Places/PlacesSlice";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PlaceHeader from "@components/PlaceDetails/PlaceHeader";
import PlaceInfo from "@components/PlaceDetails/PlaceInfo";
import PlaceImage from "@components/PlaceDetails/PlaceImage";
import PlaceDetailsSection from "@components/PlaceDetails/PlaceDetailsSection";
import PlaceLocation from "@components/PlaceDetails/PlaceLocation";
import PlaceFeatures from "@components/PlaceDetails/PlaceFeatures";

const PlaceDetails = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetFillteredPlaces(decodeURIComponent(prefix as string)));
  }, [prefix, dispatch]);

  const { FillteredPlaces } = useAppSelector((s) => s.resturants);

  return (
    <HelmetProvider>
      <Container className="FillteredPlaces" style={{ maxWidth: "1150px" }}>
        {FillteredPlaces.map((place, idx) => (
          <div className="Place-Details" key={idx}>
            <Helmet>
              <title>
                {place.name} in {place.address}
              </title>
              <meta name="keywords" content={place.name} />
              <meta
                name="description"
                content={place.cuisine?.map((e) => e.name).join(" ")}
              />
            </Helmet>

            <PlaceHeader name={place.name} isClosed={place.is_closed} />
            <PlaceInfo
              rating={+place.rating}
              numReviews={+place.num_reviews}
              ranking={place.ranking}
              cuisines={place.cuisine}
              priceLevel={place.price_level}
            />
            <PlaceImage imageUrl={place.photo?.images?.large?.url} />
            <PlaceDetailsSection
              address={place.address}
              phone={place.phone}
              webUrl={place.web_url}
            />
            <PlaceFeatures cuisines={place.cuisine} />
            <PlaceLocation address={place.address} />
          </div>
        ))}
      </Container>
    </HelmetProvider>
  );
};

export default PlaceDetails;
