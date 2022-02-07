import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="Navbar">
    <Link to="/">Home</Link> <br/>
    <Link to="/works">Works</Link> <br/>
    <Link to="/about">About</Link> <br/>
    <Link to="/contact">Contact</Link> <br/>
  </nav>
);

export default Navbar;