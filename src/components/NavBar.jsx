import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeTab = () => {
    setClick(false);
  };

  return (
    <div className="header">
      <Link to="/" onClick={closeTab}>
        <h1 title="Home">
          <i>N.C.E</i>
        </h1>
      </Link>
      <ul className={click ? "nav-items active" : "nav-items "}>
        <li>
          <Link to="/" onClick={closeTab}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={closeTab}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/aboutme" onClick={closeTab}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeTab}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "aqua" }} />
        ) : (
          <FaBars size={20} style={{ color: "aqua" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
