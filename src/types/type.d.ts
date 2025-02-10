type Coordinates = { lat: number; lng: number };
type Bounds = {
  ne: { lat: number; lng: number };
  sw: { lat: number; lng: number };
  type?: string;
};

declare type TMapsProps = {
  setcoordinates: Dispatch<SetStateAction<Coordinates>>;
  setbounds: Dispatch<SetStateAction<Bounds>>;
  coordinates: Coordinates;
  Place: TPlace[];
  setchildclicked: (...args: string[]) => void;
  WeatherData: WeatherResponse;
  childclicked: string;
};
type ListProps = {
  places: TPlace[];
  type: string;
  rate: number;
  settype: (...args: string[]) => void;
  setrate: (...args: number[]) => void;
  error: TError;
  loading: TLoading;
};
type TPlace = {
  name: string;
  latitude: string;
  price_level: string;
  ranking: string;
  longitude: string;
  web_url: string;
  website: string;
  num_reviews: string;
  photo: {
    images: {
      small: { width: string; url: string; height: string };
      thumbnail: { width: string; url: string; height: string };
      original: { width: string; url: string; height: string };
      large: { width: string; url: string; height: string };
      medium: { width: string; url: string; height: string };
    };
    is_blessed: boolean;
    uploaded_date: string;
    caption: string;
    id: string;
    helpful_votes: string;
    published_date: string;
    user: {
      user_id: string | null;
      member_id: string;
      type: string;
    };
  };
  rating: string;
  category: {
    key: string;
    name: string;
  };
  phone: string;
  address: string;
  cuisine: {
    name: string;
  }[];
};

declare type TLoading = "pending" | "succeeded" | "failed";
declare type TError = string | null;
declare interface IResturantsState {
  Places: TPlace[];
  loading: TLoading;
  error: TError;
}
type WeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    icon: string;
  }[];
};
type MarkerProps = {
  lat: number;
  lng: number;
  name: string;
  photo: string | null;
  rating: number;
};
type WeatherMarkerProps = {
  WeatherData: WeatherResponse;
  lat: number;
  lng: number;
};
