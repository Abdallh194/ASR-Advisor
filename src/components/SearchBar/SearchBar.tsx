import List from "./List/List";
import Map from "./Map/Map";
import useSearchBar from "./useSearchBar";
import { Container, Row } from "react-bootstrap";
const SearchBar = () => {
  const {
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
    childclicked,
  } = useSearchBar();

  return (
    <Container id="search-bar" className="search-bar" fluid>
      <Row className="reverse-coloum">
        <List
          places={FilterdRating.length ? FilterdRating : PlacesData}
          settype={settype}
          type={type}
          setrate={setrate}
          rate={rate}
          loading={loading}
          error={error}
        />
        <Map
          setcoordinates={setcoordinates}
          setbounds={setBounds}
          coordinates={coordinates}
          Place={FilterdRating.length ? FilterdRating : PlacesData}
          setchildclicked={setchildclicked}
          WeatherData={WeatherData}
          childclicked={childclicked}
        />
      </Row>
    </Container>
  );
};

export default SearchBar;
