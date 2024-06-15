import React, { useEffect, useState } from "react";
import getPropertyListing from "../service/Properties.service";

const Properties = () => {
  const [propertiesList, setPropertiesList] = useState([]);

  useEffect(() => {
    (async () => {
      const properties = await getPropertyListing();
      if (properties.length > 0) {
        setPropertiesList(properties);
      }
    })();
  }, []);

  return (
    <div>
      {propertiesList.length > 0
        ? propertiesList.map((item, index) => {
            return (
              <>
                <div>{item.title}</div>
                <div>{item.city}</div>
                <div>{item.type}</div>
                <div>{item.bedrooms}</div>
                <div>{item.bathrooms}</div>
                <div>{item.price}</div>
                <div>{item.item}</div>
              </>
            );
          })
        : ""}
    </div>
  );
};

export default Properties;
