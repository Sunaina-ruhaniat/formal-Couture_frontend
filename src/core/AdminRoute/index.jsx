import React from "react";
import { Navigate } from "react-router-dom";
import { publicPaths, privatePaths } from "config/routes";

const AdminRoute = ({ children, isAuthenticated }) => {
  if (localStorage.getItem("user") && localStorage.getItem("role")) {
    const role = localStorage.getItem("role");
    return (
      <Navigate
        to={privatePaths[role][Object.keys(privatePaths[role])[0]]}
        replace
      />
    );
  }
  return children;
};

export default AdminRoute;
