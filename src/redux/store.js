import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionsSlice';
import RocketsSlice from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionSlice,
    rockets: RocketsSlice,
  },
});

export default store;
