import { memo } from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
import { Rating } from "@mui/material";
import { FaPhone } from "react-icons/fa";

type Props = {
  places: TPlace;
};

const PlacesDetails: React.FC<Props> = ({ places }) => {
  const defaultImage =
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/95/a0/19/b612-20190726-203138.jpg?w=900&h=500&s=1";

  return (
    <>
      <img
        src={places.photo?.images?.large?.url ?? defaultImage}
        className="img-fluid"
        alt={places.name ? `Image of ${places.name}` : "Place"}
      />
      <div className="place-head">{places.name ?? "No Name"}</div>

      <div className="d-flex justify-content-between">
        <div className="info">
          <Rating value={Number(places.rating) || 1} precision={0.5} readOnly />
        </div>
        <div className="info">
          {places.num_reviews} review{Number(places.num_reviews) > 1 && "s"}
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="info">Ranking</div>
        <div className="info">
          {places.ranking ?? "Not in the best Ranking"}
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-between">
        <div className="info">
          <BsFillGeoAltFill />
        </div>
        <div className="info" title={places.address}>
          {places.address ?? "No Address"}
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="info">
          <FaPhone />
        </div>
        <div className="info">{places.phone ?? "No Phone"}</div>
      </div>

      {Array.isArray(places.cuisine) && places.cuisine.length > 0 && (
        <div className="d-flex flex-wrap mt-2">
          {places.cuisine.map((cuisine, idx) => (
            <div key={idx} className="cuisine">
              {cuisine.name}
            </div>
          ))}
        </div>
      )}

      <div className="d-flex mt-2">
        {places.web_url && (
          <a
            href={places.web_url}
            target="_blank"
            rel="noopener noreferrer"
            className="info mx-2"
          >
            Trip Advisor
          </a>
        )}
        {places.website && (
          <a
            href={places.website}
            target="_blank"
            rel="noopener noreferrer"
            className="info"
          >
            Website
          </a>
        )}
      </div>
    </>
  );
};

export default memo(PlacesDetails);
