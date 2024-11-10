import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { SessionContext } from "../../contexts/SessionContext";

const MainComponent = () => {
  const { loginWithRedirect } = useAuth0();
  const { sessionState } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionState.isSessionExpired) {
      navigate("/login");
    }
  }, [sessionState.isSessionExpired, navigate]);

  if (sessionState.isLoading) {
    return <div>Loading...</div>;
  }

  console.log("test", JSON.stringify(sessionState));

  return (
    <div className="container mt-4">
      <div className="card" style={{ width: "18 rem" }}>
        <div className="card-body">
          <h5 className="card-title">Surreal Estate</h5>
          <p className="card-text">
            {
              "This is a mock real estate site that allows you to view and add properties. It will also allow set properties as favorite and create a favorites list. "
            }
          </p>
          <div className="d-flex gap-2">
            {!sessionState.isAuthenticated ? (
              <button
                className="btn btn-primary me-2 mb-2"
                type="button"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            ) : (
              <Link to={"/add-property"}>
                <button className="btn btn-primary me-2 mb-2" type="button">
                  Add Property
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
