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
    <div className="bookItem">
      <div className="book">
        <h5 className="category">Inspirational</h5>
        <h1 className="bookTitle">{book.title}</h1>
        <p className="bookAuthor">{book.author}</p>
        <button type="button" className="onBook comment">Comment</button>
        <button type="button" onClick={() => deleteBook(book.id)} className="remove">Remove</button>
        <button type="button" className="onBook">Edit</button>
      </div>
      <div className="chapterUpdate">
        <p className="chapterHeading">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 1</p>
        <button type="button" className="progress">UPDATE PROGRESS</button>
      </div>
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
