import React from "react";
import { Navigate } from "react-router-dom";
import { publicPaths, privatePaths } from "config/routes";

const PrivateRoute = ({ children, isAuthenticated }) => {
  // If the user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to={publicPaths.login} replace />;
  }

  // If authenticated, return the children (protected content)
  return children;
};

export default PrivateRoute;
