// store.js
/*
import { createStore } from 'redux';
import studentsReducer from './studentsSlice';

const store = createStore(studentsReducer);

export default store;
*/
// store.js
import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './studentsSlice';

const store = configureStore({
  reducer: studentsReducer
});

export default store;
