import React from 'react';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';

const Books = () => {
  const books = [{
    id: 1,
    title: 'Title',
    author: 'Author',
  }];

  return (
    <div className="homearea">
      <BookList books={books} />
      <AddBook />
    </div>
  );
};

export default Books;
