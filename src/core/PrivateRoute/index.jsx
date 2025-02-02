import Layout from "components/Layout";
import { publicPaths } from "config/routes";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // if (!localStorage.getItem("user")) {
  //   return <Navigate to={publicPaths.login} replace />;
  // }
  return <Layout>{children}</Layout>;
};

export default PrivateRoute;
