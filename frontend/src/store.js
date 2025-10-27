// store.js
import { createStore } from 'redux';
import studentsReducer from './studentsSlice';

const store = createStore(studentsReducer);

export default store;
