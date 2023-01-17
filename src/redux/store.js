import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import phonebookSlice from './phonebookSlice';

// const rootReducer = combineReducers({
//   phonebook: phonebookSlice,
//   filter: filterSlice,
// })

export default configureStore({
  // reducer: rootReducer
  reducer: {
    phonebook: phonebookSlice,
    filter: filterSlice,
  },
});
