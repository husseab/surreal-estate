import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="navbar-brand">
        <img
          src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
          alt="logo"
          style={{ height: "100px" }}
        />
      </div>
      <div className="navbar-nav">
        <div className="nav-item nav-link">
          <Link style={{ textDecoration: "none" }} to="/">
            View properties
          </Link>
          <span> &nbsp;</span>
        </div>
        <div className="nav-item nav-link">
          <Link style={{ textDecoration: "none" }} to="/add-property">
            Add property
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
