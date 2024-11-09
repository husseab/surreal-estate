import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MainComponent = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(JSON.stringify(user), isAuthenticated, "test");
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
            {!isAuthenticated ? (
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
