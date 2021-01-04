import { configureStore } from '@reduxjs/toolkit';
import horseListReducer from '../features/horseList/counterSlice'

export const setUpStore = () => configureStore({
  reducer: {
    horseList: horseListReducer,
  },
})

export default setUpStore();

