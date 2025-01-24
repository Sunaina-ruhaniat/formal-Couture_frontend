import { Navigate } from "react-router-dom";
import { privatePaths } from "config/routes"; // Import privatePaths
import Layout from "components/Layout";

const PublicRoute = ({ children }) => {
  // const role = localStorage.getItem("role");

  // if (role) {
  //   return (
  //     <Navigate
  //       to={privatePaths[role][Object.keys(privatePaths[role])[0]]}
  //       replace
  //     />
  //   );
  // }

  return <Layout>{children}</Layout>;
};

export default PublicRoute;
