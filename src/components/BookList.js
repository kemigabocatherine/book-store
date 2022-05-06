import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const bookList = useSelector((state) => state.books);

  return (
    <div>
      {bookList.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </div>
  );
};

export default BookList;
