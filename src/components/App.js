import React from "react";
import { Routes, Route } from "react-router-dom";
// import "../styles/app.css";
import AddProperty from "./add_property/AddProperty";
import NavBar from "./NavBar";
import Properties from "./view_properties/ViewProperties";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/view-properties" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </>
  );
};

export default App;
