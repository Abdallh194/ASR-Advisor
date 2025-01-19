import { Rating } from "@mui/material";
import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { BsFillGeoAltFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";

type Props = {
  places: TPlace[];
};
const PlacesDetails: React.FC<Props> = ({ places }) => {
  console.log("fire");

  return (
    <Row>
      {places.map((e, index) => (
        <Col md={12} lg={6} key={index} className="place-details">
          <img
            src={
              e.photo
                ? e.photo.images.large.url
                : "https://media-cdn.tripadvisor.com/media/photo-p/0c/3c/f3/10/stereo.jpg"
            }
            className="img-fluid"
          />
          <div className="place-head">{e.name || "No Name"}</div>

          <div className="d-flex justify-content-between">
            <div className="info">
              <Rating value={Number(e.rating) || 1} precision={0.5} readOnly />
            </div>
            <div className="info">
              {e.num_reviews} review{Number(e.num_reviews) > 1 && "s"}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="info">Ranking</div>
            <div className="info">{e.ranking || "Not in the best Ranking"}</div>
          </div>
          <div className="d-flex flex-wrap justify-content-between">
            <div className="info">
              <BsFillGeoAltFill />
            </div>
            <div className="info" title={e.address}>
              {e.address || "No Address"}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="info">
              <FaPhone />
            </div>
            <div className="info">{e.phone || "No Phone"}</div>
          </div>

          <div className="d-flex  flex-wrap mt-2">
            {e.cuisine?.map((cuisine, idx) => (
              <div key={idx} className="cuisine">
                {cuisine.name}
              </div>
            ))}
          </div>
          <div className="d-flex mt-2">
            <a href={e.web_url} target="_blank" className="info mx-2">
              Trip Advisor
            </a>
            <a href={e.website} target="_blank" className="info ">
              Website
            </a>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default memo(PlacesDetails);
