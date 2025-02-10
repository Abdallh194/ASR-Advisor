import { createSlice } from "@reduxjs/toolkit";
import GetAllPlacesThunk from "./act/GetAllGetAllPlacesThunck";

interface IResturantsState {
  PlacesData: TPlace[];
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
  FillteredPlaces: TPlace[];
}

const initialState: IResturantsState = {
  PlacesData: [],
  loading: "pending",
  error: null,
  FillteredPlaces: [],
};

const ResturantsSlice = createSlice({
  name: "resturants",
  initialState,
  reducers: {
    CleanUp: (state) => {
      state.PlacesData = [];
    },
    GetFillteredPlaces: (state, action) => {
      state.FillteredPlaces = state.PlacesData.filter(
        (place) => place.name === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    // Get All Places
    builder.addCase(GetAllPlacesThunk.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetAllPlacesThunk.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload) {
        state.PlacesData = action.payload.filter(
          (place) => place.name && +place.num_reviews > 0
        );
      }
    });
    builder.addCase(GetAllPlacesThunk.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const { CleanUp, GetFillteredPlaces } = ResturantsSlice.actions;
export { GetAllPlacesThunk };
export default ResturantsSlice.reducer;
