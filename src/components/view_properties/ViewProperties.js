import React, { useEffect, useState } from "react";
import { Alert } from "antd";
import { getPropertyListing } from "../../service/Properties.service";

const Properties = () => {
  const [propertiesList, setPropertiesList] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    (async () => {
      const properties = await getPropertyListing();
      if (properties && properties.length > 0) {
        setPropertiesList(properties);
      } else {
        setAlertMessage(
          "Error: Unable to retrieve properties. Server not available."
        );
      }
    })();
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <div className="row g-4">
          {alertMessage ? (
            <Alert type="error" message={alertMessage || "Error"} />
          ) : propertiesList && propertiesList.length > 0 ? (
            propertiesList.map((item, index) => {
              return (
                <div key={item._id} className="col-6 col-md-4 col-lg-2">
                  <div className="card h-100">
                    <img
                      src={`https://picsum.photos/300/300?random=${index}`}
                      className="card-img-top"
                      alt="city"
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text mb-3 flex-grow-1">
                        {
                          "Surreal Estate propeties are mock properties to test features."
                        }
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">City: {item.city}</li>
                      <li className="list-group-item">Type: {item.type}</li>
                      <li className="list-group-item">
                        Bedroooms: {item.bedrooms}
                      </li>
                      <li className="list-group-item">
                        Bathrooms: {item.bathrooms}
                      </li>
                      <li className="list-group-item">Price: {item.price}</li>
                    </ul>
                    <div className="card-body">
                      {/* <Link to="/" className="card-link">
                              View Property
                            </Link> */}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            ""
          )}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Properties;
