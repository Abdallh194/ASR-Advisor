import { BsFillGeoAltFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";

type Props = {
  address: string;
  phone: string;
  webUrl: string;
};

const PlaceDetailsSection: React.FC<Props> = ({ address, phone, webUrl }) => {
  return (
    <div className="about-place">
      <div className="head">At a glance</div>
      <div className="desc">
        <BsFillGeoAltFill /> {address}
      </div>
      <div className="desc">
        <FaPhone /> {phone}
      </div>
      {webUrl && (
        <div className="desc">
          <SiTripadvisor />
          <a href={webUrl} target="_blank" rel="noopener noreferrer">
            Trip Advisor
          </a>
        </div>
      )}
    </div>
  );
};

export default PlaceDetailsSection;
