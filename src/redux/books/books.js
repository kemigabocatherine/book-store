const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const initialState = [
  {
    title: 'Gifted Hands',
    author: 'Ben Carson',
    id: '1',
  },
  {
    title: 'Think Big',
    author: 'Ben Carson',
    id: '2',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export { addBook, removeBook, initialState };
export default bookReducer;
