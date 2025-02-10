import { BsFillGeoAltFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  address: string;
};

const PlaceLocation: React.FC<Props> = ({ address }) => {
  return (
    <div className="d-flex align-items-center location-info">
      <img src="/map.png" className="img-fluid location-img" alt="Map" />
      <div className="address-desc">
        <BsFillGeoAltFill /> {address} <IoIosArrowForward />
      </div>
    </div>
  );
};

export default PlaceLocation;
