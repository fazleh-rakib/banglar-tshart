import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css"

const Header = () => {
  return <nav className="header-container">
     <Link to='/'>Home</Link>
     <Link to='review'>Review</Link>
     <Link to='about'>AAbout</Link>
     <Link to='/'>Home</Link>

  </nav>;
};

export default Header;
