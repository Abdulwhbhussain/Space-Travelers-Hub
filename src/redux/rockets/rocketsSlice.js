import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URLFORROCKETS = 'https://api.spacexdata.com/v4/rockets';

// Getting all rockets from API
export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    try {
      const response = await axios.get(URLFORROCKETS);
      const data = await response.data;
      const filteredData = data.map((rocket) => {
        const {
          id,
          name,
          description,
          wikipedia,
        } = rocket;
        const image = rocket.flickr_images[0];
        return {
          id,
          name,
          description,
          image,
          wikipedia,
          reserved: false,
        };
      });
      return filteredData;
    } catch (error) {
      return error;
    }
  },
);

// Initial state
const initialState = {
  rockets: [],
  isLoading: false,
  error: undefined,
};

// Creating rockets slice
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRockets.fulfilled, (state, { payload }) => {
      state.rockets = payload;
      state.isLoading = false;
    });
    builder.addCase(getRockets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default rocketsSlice.reducer;
