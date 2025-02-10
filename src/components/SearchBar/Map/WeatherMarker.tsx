const WeatherMarker: React.FC<WeatherMarkerProps> = ({ WeatherData }) => {
  return (
    <img
      src={`http://openweathermap.org/img/w/${WeatherData.weather[0].icon}.png`}
      alt="Weather Icon"
      height="70px"
    />
  );
};
export default WeatherMarker;
