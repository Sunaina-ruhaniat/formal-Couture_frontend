// import React from "react";
// import { Navigate } from "react-router-dom";
// import { publicPaths, privatePaths } from "config/routes";

// const PrivateRoute = ({ children, isAuthenticated }) => {
//   // If the user is not authenticated, redirect to login page
//   if (!isAuthenticated) {
//     return <Navigate to={publicPaths.login} replace />;
//   }

//   // If authenticated, return the children (protected content)
//   return children;
// };

// export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children, admin }) => {
  const userRole = localStorage.getItem("role");

  // If the user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If the route is for admin but the user is not an admin, redirect to home or a different page
  if (admin && userRole !== "admin") {
    return <Navigate to="/home" />;
  }

  // If the route is for customer but the user is not a customer, redirect to admin dashboard or another page
  if (!admin && userRole === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
};

export default PrivateRoute;
