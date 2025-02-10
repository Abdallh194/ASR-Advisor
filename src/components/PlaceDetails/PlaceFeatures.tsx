import {
  MdOutlineDeliveryDining,
  MdOutlineAirlineSeatReclineNormal,
} from "react-icons/md";
import { TbHotelService } from "react-icons/tb";

type Props = {
  cuisines: { name: string }[];
};

const PlaceFeatures: React.FC<Props> = ({ cuisines }) => {
  return (
    <>
      <div className="head">Features</div>
      <div className="features d-flex">
        <div className="feat-1">
          <div className="hd">CUISINES</div>
          <div className="desc">
            {cuisines?.map((cuisine, idx) => (
              <span key={idx} style={{ marginRight: "7px" }}>
                {cuisine.name},
              </span>
            ))}
          </div>
        </div>
        <div className="feat-1">
          <div className="hd">Meal Types</div>
          <div className="desc">Lunch, Dinner, Brunch</div>
        </div>
        <div className="feat-1">
          <div className="hd">Special Diets</div>
          <div className="desc">Vegetarian friendly</div>
        </div>
        <div className="feat-1">
          <div className="hd">FEATURES</div>
          <div className="desc">
            Delivery <MdOutlineDeliveryDining />
          </div>
        </div>
        <div className="feat-1">
          <div className="hd">
            Seating <MdOutlineAirlineSeatReclineNormal />
          </div>
        </div>
        <div className="feat-1">
          <div className="hd">
            Table Service <TbHotelService />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceFeatures;
