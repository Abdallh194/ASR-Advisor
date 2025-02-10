import { Paper, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Marker: React.FC<MarkerProps> = ({ name, photo, rating }) => {
  return (
    <Link to={`/placeDetails/${name}`}>
      <Paper
        className="paper"
        elevation={3}
        style={{
          padding: "10px",
          textAlign: "center",
          maxWidth: "150px",
        }}
      >
        <Typography variant="subtitle2" gutterBottom>
          {name || "No Name"}
        </Typography>
        <img
          src={
            photo
              ? photo
              : "https://media-cdn.tripadvisor.com/media/photo-p/0c/3c/f3/10/stereo.jpg"
          }
          alt={name}
          style={{
            width: "100%",
            height: "100px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
        <Rating name="read-only" size="small" value={rating || 1} readOnly />
      </Paper>
    </Link>
  );
};

export default Marker;
