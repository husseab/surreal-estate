import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { SessionContext } from "../../contexts/SessionContext";

const NavBar = () => {
  const [hover, setHover] = useState("");
  const { loginWithRedirect, logout } = useAuth0();
  const { sessionState } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionState.isSessionExpired) {
      navigate("/login");
    }
  }, [sessionState.isSessionExpired, navigate]);

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
          {!sessionState.isAuthenticated ? (
            ""
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className="d-flex align-items-center me-5">
          {" "}
          {/* Flex container for alignment */}
          {sessionState.isLoading ? ""  : 
          sessionState.isAuthenticated ? (
            <>
              <span className="navbar-text">{sessionState.user.name}</span>
              <span> &nbsp;</span>

              <span
                className="material-icons"
                style={{
                  fontSize: "30px",
                  marginRight: "5px",
                  cursor: "default",
                }}
              >
                account_circle
              </span>
              <span> &nbsp;</span>

              <div
                className="nav-item nav-link"
                style={{
                  color: hover === "logout" ? "blue" : "black",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHover("logout")}
                onMouseLeave={() => setHover(false)}
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </div>
            </>
          ) : (
            <>
              <span
                className="material-icons"
                style={{
                  fontSize: "30px",
                  marginRight: "5px",
                  cursor: "default",
                }}
              >
                account_circle
              </span>
              <span> &nbsp;</span>
              <div
                className="nav-item nav-link"
                style={{
                  color: hover === "login" ? "blue" : "black",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHover("login")}
                onMouseLeave={() => setHover(false)}
                onClick={() => loginWithRedirect()}
              >
                Login
              </div>
            </>
          )
          }
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
