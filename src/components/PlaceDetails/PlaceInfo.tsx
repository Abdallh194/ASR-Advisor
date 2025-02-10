import { Rating } from "@mui/material";

type Props = {
  rating: number;
  numReviews: number;
  ranking: string;
  cuisines: { name: string }[];
  priceLevel: string;
};

const PlaceInfo: React.FC<Props> = ({
  rating,
  numReviews,
  ranking,
  cuisines,
  priceLevel,
}) => {
  return (
    <div className="place-info mt-2 d-flex">
      <div className="rating d-flex cus-mr">
        <Rating
          value={rating || 1}
          precision={0.5}
          readOnly
          style={{ marginRight: "5px" }}
        />
        <span>{numReviews} reviews</span>
      </div>
      <div className="Ranking cus-mr">{ranking}</div>
      <div className="place-cuisine d-flex cus-mr">
        {cuisines?.map((cu, idx) => (
          <div key={idx} style={{ marginRight: "5px" }}>
            {cu.name},
          </div>
        ))}
        <div className="price-level">{priceLevel}</div>
      </div>
    </div>
  );
};

export default PlaceInfo;
