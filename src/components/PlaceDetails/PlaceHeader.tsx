import { MdCheckCircle } from "react-icons/md";
import { TbClockHour4 } from "react-icons/tb";

type Props = {
  name: string;
  isClosed: boolean;
};

const PlaceHeader: React.FC<Props> = ({ name, isClosed }) => {
  return (
    <div className="place-name">
      {name}{" "}
      {isClosed ? (
        <span className="status open">
          <MdCheckCircle /> Open Now
        </span>
      ) : (
        <span className="status closed">
          <TbClockHour4 /> Closed Now
        </span>
      )}
    </div>
  );
};

export default PlaceHeader;
