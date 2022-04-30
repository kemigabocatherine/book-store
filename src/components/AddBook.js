import React from 'react';

const AddBook = () => (
  <form className="newbook">
    <h2>ADD NEW BOOK</h2>
    <input type="text" placeholder="Book title" />
    <input type="text" placeholder="Book author" />
    <button type="submit">Add Book</button>
  </form>
);

export default AddBook;
