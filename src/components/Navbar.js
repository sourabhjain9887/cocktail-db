import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/john-smilga/react-projects-15-cocktails/c43f72f7a6a31957b32227e4a9cc89f18789bae5/src/logo.svg"
            alt="cocktail db logo"
            className="logo"
          ></img>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
