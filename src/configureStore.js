import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './redux/books/books';
import statusReducer from './redux/categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: statusReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
