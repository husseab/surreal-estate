import React from "react";
import ReactDOM from "react-dom/client"; // Ensure you're importing from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { SessionProvider } from "./contexts/SessionContext";

// Create a root with the new API
const root = ReactDOM.createRoot(document.getElementById("root"));

// Use root.render() directly
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={process.env.REACT_APP_DOMAIN_ID}
        clientId={process.env.REACT_APP_CLIENT_ID}
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <SessionProvider>
          <App />
        </SessionProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
