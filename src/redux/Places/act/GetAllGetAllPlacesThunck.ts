import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GetAllPlacesThunck = createAsyncThunk<TPlace[], Bounds>(
  "places/getPlaces",
  async ({ sw, ne, type }, thunkapi) => {
    const { rejectWithValue } = thunkapi;

    try {
      const req = await axios.get(
        `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            "x-rapidapi-key":
              "9b7928c1d2msha124e05e4b043abp1ede7bjsnbf13cd325843",
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          },
        }
      );

      return req.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Unexpected error");
      }
    }
  }
);

export default GetAllPlacesThunck;
