import { Col } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import { Paper, Rating, Typography } from "@mui/material";
import { memo } from "react";

const Map = ({
  setbounds,
  setcoordinates,
  coordinates,
  Place,
  setchildclicked,
}: TMapsProps) => {
  return (
    <Col md={12} lg={8} className="Map">
      <div className="map-google">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDpa-abwTMd4jw5ET2dmDQoUUailpJKHtE",
          }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          onChange={(e) => {
            setcoordinates({ lat: e.center.lat, lng: e.center.lng });
            setbounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={(child) => setchildclicked(child)}
        >
          {Place.map((item, idx) => (
            <div
              key={idx}
              data-lat={Number(item.latitude)}
              data-lng={Number(item.longitude)}
            >
              <Paper className="paper">
                <Typography variant="subtitle2" gutterBottom>
                  {item.name || "No Name"}
                </Typography>
                <img
                  src={
                    item.photo
                      ? item.photo.images.large.url
                      : "https://media-cdn.tripadvisor.com/media/photo-p/0c/3c/f3/10/stereo.jpg"
                  }
                  className="img-fluid"
                />
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(item.rating) || 1}
                  readOnly
                />
              </Paper>
            </div>
          ))}
        </GoogleMapReact>
      </div>
    </Col>
  );
};

export default memo(Map);
