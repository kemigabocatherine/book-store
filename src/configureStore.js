import { combineReducers, Redux } from 'react-redux';
import bookReducer from './redux/books/books';
import statusReducer from './redux/categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  status: statusReducer,
});

const store = Redux.createStore(rootReducer);

export default store;
