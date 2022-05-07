/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Icon } from '@iconify/react';

const Navbar = () => (
  <header className="navbar">
    <div>
      <h1 className="nav-title">BookStore CMS</h1>
    </div>
    <div className="nav-links">
      <a className="books" href="/">BOOKS</a>
      <a className="categories" href="/Category">CATEGORIES</a>
    </div>
    <div className="oval">
      <Icon icon="bi:person-fill" className="mask" />
    </div>
  </header>
);

export default Navbar;
