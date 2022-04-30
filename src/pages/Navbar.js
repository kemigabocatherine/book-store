import React from 'react';

const Navbar = () => (
  <div className="navbar">
    <div className="nav-title">
      <h1>BookStore CMS</h1>
    </div>
    <div className="nav-links">
      <a className="link" href="/">Books</a>
      <a className="link" href="/Category">Category</a>
    </div>
  </div>
);

export default Navbar;
