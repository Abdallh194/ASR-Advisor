import { memo, useCallback } from "react";
import Loading from "@components/feedback/Loading";
import PlacesDetails from "./PlacesDetails";
import { Col, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const List: React.FC<ListProps> = ({
  places,
  settype,
  type,
  rate,
  setrate,
  error,
  loading,
}) => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (placeName: string) => {
      navigate(`/PlaceDetails/${encodeURIComponent(placeName)}`);
    },
    [navigate]
  );

  return (
    <Col md={12} lg={4} className="List">
      <div className="head">
        Restaurants, Hotels, and Attractions Around You
      </div>

      <div className="filters">
        <Form.Label>Type</Form.Label>
        <Form.Select value={type} onChange={(e) => settype(e.target.value)}>
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </Form.Select>

        <Form.Label className="mt-2">Rating</Form.Label>
        <Form.Select
          value={rate}
          onChange={(e) => setrate(parseInt(e.target.value))}
        >
          <option value={0}>All</option>
          <option value={1}>Above 3.0</option>
          <option value={2}>Above 4.0</option>
          <option value={3}>Above 4.5</option>
        </Form.Select>
      </div>

      <Loading error={error} status={loading}>
        <Row>
          {places.map((place, index) => (
            <Col
              md={12}
              lg={6}
              key={index}
              className="place-details"
              onClick={() => handleNavigate(place.name)}
            >
              <PlacesDetails places={place} />
            </Col>
          ))}
        </Row>
      </Loading>
    </Col>
  );
};

export default memo(List);
