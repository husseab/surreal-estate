import React, { useEffect } from "react";
import getPropertyListing from "../service/Properties.service";

const Properties = () => {
  useEffect(() => {
    getPropertyListing();
  }, []);

  return <div>Properties Page</div>;
};

export default Properties;
