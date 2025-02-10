type Props = {
  imageUrl: string;
};

const PlaceImage: React.FC<Props> = ({ imageUrl }) => {
  const defaultImage =
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/95/a0/19/b612-20190726-203138.jpg?w=900&h=500&s=1";

  return (
    <img
      src={imageUrl || defaultImage}
      className="img-fluid w-100"
      alt="Place"
    />
  );
};

export default PlaceImage;
