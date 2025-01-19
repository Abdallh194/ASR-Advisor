import { useState } from "react";
import { Col, Form } from "react-bootstrap";
import PlacesDetails from "./PlacesDetails";
type Props = {
  places: TPlace[];
};
const List: React.FC<Props> = ({ places }) => {
  const [type, settype] = useState("restaurants");
  const [rate, setrate] = useState(0);
  // const [EleRef, setEleRef] = useState([]);

  // useEffect(() => {
  //   if (places.length > 0) {
  //     return;
  //   }
  //   const refs = Array(places.length)
  //     .fill(null)
  //     .map((_, i) => EleRef[i] || createRef());
  //   setEleRef(refs);
  // }, [places, EleRef]);

  return (
    <Col md={12} lg={4} className="List">
      <div className="head">
        Restaurants , Hotels and Attractions around you{" "}
      </div>
      <Form.Label>Type</Form.Label>
      <Form.Select
        aria-label="Default select example"
        value={type}
        onChange={(e) => settype(e.target.value)}
      >
        <option value="restaurants">Restaurants</option>
        <option value="hotels">Hotels</option>
        <option value="attractions">Attractions</option>
      </Form.Select>

      <Form.Label>Rating</Form.Label>
      <Form.Select
        aria-label="Default select example"
        value={rate}
        onChange={(e) => setrate(parseInt(e.target.value))}
      >
        <option value={0}>All</option>
        <option value={1}>Above 3.0</option>
        <option value={2}>Above 4.0</option>
        <option value={3}>Above 4.5</option>
      </Form.Select>
      {/* <TestList /> */}
      <PlacesDetails places={places} />
    </Col>
  );
};

export default List;
