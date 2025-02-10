import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GetWeatherThunk = createAsyncThunk<WeatherResponse, Coordinates>(
  "waether/getweather",
  async ({ lat, lng }, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
      const req = await axios.get(
        `https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lng}`,
        {
          headers: {
            "x-rapidapi-key":
              "9b7928c1d2msha124e05e4b043abp1ede7bjsnbf13cd325843",
            "x-rapidapi-host": "open-weather13.p.rapidapi.com",
          },
        }
      );
      console.log(req.data);

      return req.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Unexpected error");
      }
    }
  }
);

export default GetWeatherThunk;
