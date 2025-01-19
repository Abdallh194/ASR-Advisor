import axios from "axios";

type Coordinates = {
  lat: number;
  lng: number;
};

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const GetPlacesData = async (
  sw: Coordinates,
  ne: Coordinates
): Promise<[]> => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-key": "9b7928c1d2msha124e05e4b043abp1ede7bjsnbf13cd325843",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
