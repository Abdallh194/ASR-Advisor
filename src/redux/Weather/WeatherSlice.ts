import { createSlice } from "@reduxjs/toolkit";
import GetWeatherThunk from "./act/GetAllGetAllPlacesThunck";

interface IResturantsState {
  WeatherData: WeatherResponse;
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IResturantsState = {
  WeatherData: {
    coord: {
      lon: -94.04,
      lat: 33.44,
    },
    weather: [
      {
        icon: "https://openweathermap.org/img/wn/04n@2x.png",
      },
    ],
  },
  loading: "pending",
  error: null,
};

const WeatherSlice = createSlice({
  name: "resturants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Weater Data
    builder.addCase(GetWeatherThunk.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetWeatherThunk.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.WeatherData = action.payload;
      console.log(state.WeatherData);
    });
    builder.addCase(GetWeatherThunk.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { GetWeatherThunk };
export default WeatherSlice.reducer;
