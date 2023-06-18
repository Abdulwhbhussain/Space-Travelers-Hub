import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URLFORMISSIONS = 'https://api.spacexdata.com/v3/missions';

// Getting all rockets from API
export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    try {
      const response = await axios.get(URLFORMISSIONS);
      const data = await response.data;
      const filteredData = data.map((mission) => {
        const {
          description,
          wikipedia,
        } = mission;
        const id = mission.mission_id;
        const name = mission.mission_name;
        return {
          id,
          name,
          description,
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
  missions: [],
  isLoading: false,
  error: undefined,
};

// Creating rockets slice
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMissions.fulfilled, (state, { payload }) => {
      state.missions = payload;
      state.isLoading = false;
    });
    builder.addCase(getMissions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default missionsSlice.reducer;
