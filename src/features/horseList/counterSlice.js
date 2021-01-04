import { createSlice } from '@reduxjs/toolkit';
import { get } from '../../restClient'

export const counterSlice = createSlice({
  name: 'horseList',
  initialState: {
    horses: [],
    page: 0,
    loading: false,
    error: false,
  },
  reducers: {
    loadHorsesComplete: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.horses = action.payload.horses
      state.loading = false
    },
    loadHorses: state => {
      state.loading = true
      state.horses = []
      state.error = ''
    },
    loadHorsesError: (state, action) => {
      state.horses = []
      state.loading = false
      state.error = action.payload.message
    },
    setHorsePage: (state, action) => {
      state.page = action.payload.message
    }
  },
});

export const { loadHorses, loadHorsesComplete, loadHorsesError, setHorsePage } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const loadHorsesFromApi = () => async dispatch => {
  try {
    dispatch(loadHorses())
    const { body } = await get('/horse')
    dispatch(loadHorsesComplete({ horses: body }))
  } catch (err) {
    console.log(err)
    dispatch(loadHorsesError({ message: err.message }))
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectHorses = state => state.horseList.horses;

export const selectIsLoading = state => state.horseList.loading;

export const selectError = state => state.horseList.error

export const selectNumPages = state => Math.ceil(selectHorses(state).length / 10)

export default counterSlice.reducer;
