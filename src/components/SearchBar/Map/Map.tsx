import { memo } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import WeatherMarker from "./WeatherMarker";
import { Col } from "react-bootstrap";
import mapStyles from "../../../mapstyle";

const Map = ({
  setbounds,
  setcoordinates,
  coordinates,
  Place,
  setchildclicked,
  WeatherData,
}: TMapsProps) => {
  return (
    <Col md={12} lg={8} className="Map">
      <div className="map-google">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAFceIHgtOnJy7HiTwN4A_3DAX-fVJkAyU",
          }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            styles: mapStyles,
          }}
          onChange={(e) => {
            setcoordinates({ lat: e.center.lat, lng: e.center.lng });
            setbounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={(child) => setchildclicked(child)}
        >
          {Place.map((item, idx) => (
            <Marker
              key={idx}
              lat={Number(item.latitude)}
              lng={Number(item.longitude)}
              name={item.name || "No Name"}
              photo={item.photo ? item.photo.images.large.url : null}
              rating={Number(item.rating) || 1}
            />
          ))}
          <WeatherMarker
            lat={WeatherData.coord.lat}
            lng={WeatherData.coord.lon}
            WeatherData={WeatherData}
          />
        </GoogleMapReact>
      </div>
    </Col>
  );
};

export default memo(Map);
