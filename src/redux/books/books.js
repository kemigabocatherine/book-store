const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const bookReducer = (state = [], action) => {
  if (action.type === ADD_BOOK) {
    return [
      ...state,
      action.book,
    ];
  }

  if (action.type === REMOVE_BOOK) {
    return state.filter((book) => book !== action.book);
  }
  return state;
};

export { addBook, removeBook };
export default bookReducer;
