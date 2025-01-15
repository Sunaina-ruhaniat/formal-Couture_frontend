import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null); // State to store user data
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  console.log("userId", userId);
  // useEffect(() => {
  //   // Check if user is logged in by getting userId from localStorage
  //   const userId = localStorage.getItem("userId");
  //   console.log("userId", userId);
  //   if (userId) {
  //     // Assuming you stored user info in localStorage, retrieve it here
  //     const userData = JSON.parse(localStorage.getItem("userData"));
  //     setUser(userData); // Set user data
  //   } else {
  //     // If no userId found, redirect to login page
  //     navigate("/login");
  //   }
  // }, [navigate]);

  const handleLogout = () => {
    // Clear user data from localStorage and redirect to home page
    localStorage.removeItem("userId");
    localStorage.removeItem("userData");
    navigate("/home"); // Navigate to home page after logout
  };

  return (
    <Container>
      {user ? (
        <Box sx={{ padding: "20px", textAlign: "center" }}>
          <Typography variant="h4" sx={{ marginBottom: "20px" }}>
            Welcome, {user.name}
          </Typography>
          <Typography variant="h6">Email: {user.email}</Typography>
          <Typography variant="h6">Phone: {user.phone}</Typography>
          <Typography variant="h6">Role: {user.role}</Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "20px" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      ) : (
        <Typography
          variant="h5"
          sx={{ textAlign: "center", marginTop: "50px" }}
        >
          Loading user data...
        </Typography>
      )}
    </Container>
  );
};

export default Profile;
