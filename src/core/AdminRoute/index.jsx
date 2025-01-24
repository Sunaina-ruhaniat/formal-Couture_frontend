import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { publicPaths, privatePaths } from "config/routes";
import Layout from "components/Layout";

const AdminRoute = ({ children, isAuthenticated }) => {
  // console.log("user", localStorage.getItem("user"));
  // console.log("role", localStorage.getItem("role"));
  // console.log("I AM HERE in Admin");

  // if (localStorage.getItem("user") && localStorage.getItem("role")) {
  //   const role = localStorage.getItem("role");
  //   const rolePath = privatePaths[role];
  //   console.log(
  //     "rolePath[Object.keys(rolePath)[0]]",
  //     rolePath[Object.keys(rolePath)[0]]
  //   );
  //   if (rolePath) {
  //     return <Navigate to={rolePath[Object.keys(rolePath)[0]]} replace />;
  //   }
  // }
  const navigate = useNavigate();

  // Example: use navigate programmatically if user is logged in
  // const user = localStorage.getItem("user");
  // const role = localStorage.getItem("role");

  // if (user && role) {
  //   navigate("/admin-page"); // Use navigate to go to the admin page
  // }

  return <Layout>{children}</Layout>;
};

export default AdminRoute;
