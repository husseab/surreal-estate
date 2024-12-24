import React, { useEffect, useState } from "react";
import { Alert } from "antd"; 
import { Routes, Route, Navigate, useSearchParams, useNavigate } from "react-router-dom"; 
import { useAuth0 } from "@auth0/auth0-react";
import AddProperty from "./components/add_property/AddProperty";
import NavBar from "./components/navigation/NavBar";
import Properties from "./components/view_properties/ViewProperties";
import MainComponent from "./components/main_page/mainPage";

const App = () => {
  const { user, isLoading } = useAuth0();
  const [searchParams] = useSearchParams(); 
  const [showAlert, setShowAlert] = useState(false); 

  useEffect(() => {
    if (searchParams.get("error") === "access_denied" && !user?.email_verified) {
      setShowAlert(true);
    }
  }, []); 

  if (isLoading) {
    return <div>Loading...</div>; // Loading state while checking authentication
  }

  return (
    <>
      <NavBar showAlert={showAlert} />
      {showAlert ? (
        <Alert
          message="Email Verification Required"
          description="Please verify your email before logging in."
          type="error"
          showIcon
          closable
        />
      )
      :
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/view-properties" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    }
    </>
  );
};

export default App;
