import React from "react";
import { Link } from "react-router-dom";

const MainComponent = () => {
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
            <Link to={"/view-properties"}>
              <button className="btn btn-primary me-2 mb-2" type="button">
                View Properties
              </button>
            </Link>
            <Link to={"/add-property"}>
              <button className="btn btn-primary me-2 mb-2" type="button">
                Add Property
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
