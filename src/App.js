import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import "../styles/app.css";
import AddProperty from "./components/add_property/AddProperty";
import NavBar from "./components/navigation/NavBar";
import Properties from "./components/view_properties/ViewProperties";
import MainComponent from "./components/main_page/mainPage";

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
