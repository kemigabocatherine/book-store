import { combineReducers, createStore } from 'redux';
import bookReducer from './redux/books/books';
import statusReducer from './redux/categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  status: statusReducer,
});

const store = createStore(rootReducer);

export default store;
