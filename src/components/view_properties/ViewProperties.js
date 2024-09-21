import React, { useEffect, useState } from "react";
import {
  getPropertyListing,
  // getImage,
  // getPropertyCount,
} from "../../service/Properties.service";
import { Link } from "react-router-dom";
// import { Spin, Alert } from "antd";

const Properties = () => {
  const [propertiesList, setPropertiesList] = useState([]);
  // const [imageUrls, setImageUrls] = useState([]);
  // const [propertiesCount, setPropertiesCount] = useState(0);

  useEffect(() => {
    (async () => {
      // const totalCount = await getPropertyCount();
      const properties = await getPropertyListing();
      if (properties.length > 0) {
        setPropertiesList(properties);
      }
      // if (totalCount?.count) {
      //   setPropertiesCount(totalCount.count);
      // }
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     if (propertiesCount) {
  //       const imagePaths = await getImage(propertiesCount);
  //       setImageUrls(imagePaths);
  //     }
  //   })();
  // }, [propertiesCount]);

  return (
    <div>
      {/* {!(imageUrls.length > 0) ? (
        <Spin tip="Loading...">
          <Alert
            message="Loading up properties..."
            description="Please take deep breaths."
            type="info"
          />
        </Spin>
      ) : ( */}
      <div className="container mt-4">
        <div className="row g-4">
          {propertiesList.length > 0
            ? propertiesList.map((item, index) => {
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
                            "Surreal Estate propeties are all top class properties that will meet your needs."
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
            : ""}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Properties;
