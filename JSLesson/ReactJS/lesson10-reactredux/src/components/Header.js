import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return <header>
      <h1>Blog App</h1>
      <NavLink activeClassName='active' to="/" exact>Home</NavLink>
      <NavLink activeClassName='active' to="/blogs">Blogs</NavLink>
      <NavLink activeClassName='active' to="/create">Create</NavLink>
      <NavLink activeClassName='active' to="/contact">Contact</NavLink>
  </header>;
};

export default Header;
