import React, { createContext, useState, useMemo, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // Initial session state with all the required properties
  const [sessionState, setSessionState] = useState({
    user: null, // User object
    isAuthenticated: false, // Authentication status
    isLoading: true, // Loading status
    isSessionExpired: false, // Session expiration status
    sessionExpiry: null, // Expiry timestamp
    role: null, // User role (custom claim)
    permissions: null, // User permissions (custom claim)
    customClaims: null, // Custom claims (custom claim)
  });

  useEffect(() => {
    // If the user is authenticated, we check session expiration and update the state
    if (isAuthenticated) {
      const expiration = user?.exp; // JWT expiration (Unix timestamp) if available
      const now = Date.now() / 1000; // Current time in seconds

      const isExpired = expiration && expiration <= now;

      // Dynamically create claim keys using the environment variable
      // const roleKey = `${process.env.REACT_APP_AUTH0_NAMESPACE}/role`;
      // const customClaimsKey = `${process.env.REACT_APP_AUTH0_NAMESPACE}/custom_claim`;

      // Access custom claims and roles
      // const customClaims = user?.[customClaimsKey];
      // const role = user?.[roleKey];

      setSessionState((prevState) => ({
        ...prevState,
        user,
        isAuthenticated,
        isLoading,
        isSessionExpired: isExpired,
        sessionExpiry: expiration
          ? new Date(expiration * 1000).toISOString()
          : null,
      }));
    } else {
      // Reset state when not authenticated
      setSessionState((prevState) => ({
        ...prevState,
        user: null,
        isAuthenticated,
        isLoading,
        isSessionExpired: false,
        sessionExpiry: null,
        customClaims: null,
        role: null,
      }));
    }
  }, [user, isAuthenticated, isLoading]);

  // Memoize session state to prevent unnecessary re-renders
  const memoizedSessionState = useMemo(
    () => ({ sessionState }),
    [sessionState]
  );

  return (
    <SessionContext.Provider value={memoizedSessionState}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider, SessionContext };
