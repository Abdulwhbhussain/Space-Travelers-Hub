import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionSlice';
import RocketsSlice from './Rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionSlice,
    rockets: RocketsSlice,
  },
});

export default store;
