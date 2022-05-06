import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const actionSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      title,
      author,
      id: uuidv4(),
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="newbook" onSubmit={actionSubmit}>
      <h2>ADD NEW BOOK</h2>
      <input className="title" type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="author" type="text" placeholder="Book author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
