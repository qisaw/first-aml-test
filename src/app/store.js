import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import horseListReducer from '../features/horseList/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    horseList: horseListReducer,
  },
});
