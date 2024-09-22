import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import "../styles/app.css";
import AddProperty from "./add_property/AddProperty";
import NavBar from "./navigation/NavBar";
import Properties from "./view_properties/ViewProperties";
import MainComponent from "./main_page/mainPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/view-properties" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
