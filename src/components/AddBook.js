import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const actionSubmit = (e) => {
    e.preventDefault();
    const newTitle = e.target.title.value;
    const newAuthor = e.target.author.value;

    const newBook = {
      id: uuidv4(),
      title: newTitle,
      author: newAuthor,
    };

    if (newTitle.trim() && newAuthor.trim()) {
      dispatch(addBook(newBook));
      e.target.title.value = '';
      e.target.author.value = '';
    } else {
      alert('Please write item');
    }
  };

  return (
    <form className="newbook">
      <h2>ADD NEW BOOK</h2>
      <input className="title" type="text" placeholder="Book title" />
      <input className="author" type="text" placeholder="Book author" />
      <button type="submit" onSubmit={actionSubmit}>Add Book</button>
    </form>
  );
};

export default AddBook;
