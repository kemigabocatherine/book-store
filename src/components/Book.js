import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  const deleteBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button type="button" onClick={() => deleteBook(book.id)}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.exact({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Book;
