import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [hover, setHover] = useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        {" "}
        {/* Container for proper spacing */}
        <div className="navbar-brand">
          <Link to={"/"}>
            <img
              src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
              alt="logo"
              style={{ height: "100px" }}
            />
          </Link>
        </div>
        <div className="navbar-nav me-auto">
          <div className="nav-item nav-link">
            <Link
              to="/view-properties"
              style={{
                textDecoration: "none",
                color: hover === "view-properties" ? "blue" : "black",
              }}
              onMouseEnter={() => setHover("view-properties")}
              onMouseLeave={() => setHover(false)}
            >
              View properties
            </Link>
            <span> &nbsp;</span>
          </div>
          <div className="nav-item nav-link">
            <Link
              to="/add-property"
              style={{
                textDecoration: "none",
                color: hover === "add-property" ? "blue" : "black",
              }}
              onMouseEnter={() => setHover("add-property")}
              onMouseLeave={() => setHover(false)}
            >
              Add property
            </Link>
          </div>
        </div>
        <div className="d-flex align-items-center me-5">
          {" "}
          {/* Flex container for alignment */}
          <span
            className="material-icons"
            style={{ fontSize: "30px", marginRight: "5px" }}
          >
            account_circle
          </span>
          <span className="navbar-text">John Smith</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
