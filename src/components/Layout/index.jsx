import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import Header from "components/Header";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom"; // Ensure this is imported for correct routing
import Home from "pages/HomePage";

const Layout = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          backgroundColor: "#f3f3f3",
          height: "30px",
        }}
      />

      <header>
        <Header />
      </header>
      <Box
        sx={{
          backgroundColor: "#f8f8f8",
          padding: "15px",
          textAlign: "center",
          borderTop: "none",
        }}
      >
        {/* <Link
          component={RouterLink} // Use RouterLink to properly route
          to="/sign-up"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          <Typography variant="body2">
            SIGN UP FOR 10% OFF YOUR FIRST ORDER*
          </Typography>
        </Link> */}
      </Box>
      <Divider
        sx={{
          backgroundColor: "#d7d7d7",
        }}
      ></Divider>
      <Box
        sx={{
          backgroundColor: "#f0c14b",
          // backgroundColor: "#f3f3f3",
          padding: "15px",
          textAlign: "center",
          borderTop: "none",
        }}
      ></Box>
      <main
        style={{
          minHeight: "80vh",
        }}
      >
        <Outlet />
      </main>
      <footer
        style={{
          padding: "10px",
          background: "#fafafa",
        }}
      >
        <Footer />
      </footer>
    </Box>
  );
};

export default Layout;
