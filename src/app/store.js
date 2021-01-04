import { configureStore } from '@reduxjs/toolkit';
import horseListReducer from '../features/horseList/horseListSlice'

export const setUpStore = () => configureStore({
  reducer: {
    horseList: horseListReducer,
  },
})

export default setUpStore();

