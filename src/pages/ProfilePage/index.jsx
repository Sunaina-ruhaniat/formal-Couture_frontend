import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Paper,
  Grid,
  Button,
  Box,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SidebarNavigation from "./components/SidebarNavigation";
import ProfileDetails from "./components/ProfileDetail";
import ProfileHeader from "./components/ProfileHeader";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    console.log("userDataString", userDataString);
    if (!userDataString) {
      navigate("/login");
      return;
    }

    try {
      const userData = JSON.parse(userDataString);
      setUser(userData);
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleInputChange = (field, value) => {
    setUser((prevUser) => ({ ...prevUser, [field]: value }));
  };

  const handleSaveChanges = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  if (!user) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  return (
    <div style={{ marginTop: 20, marginLeft: -2 }}>
      <Breadcrumbs
        separator="/"
        aria-label="breadcrumb"
        sx={{ fontSize: "14px", mb: 2, ml: 8 }}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/home"
          sx={{ color: "#000", fontWeight: "500" }}
        >
          HOME
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/product-list"
          sx={{ color: "#000", fontWeight: "500" }}
        >
          PRODUCTS
        </Link>
      </Breadcrumbs>
      <Container maxWidth="lg" sx={{ display: "flex", marginTop: 5 }}>
        <SidebarNavigation onLogout={handleLogout} />
        <ProfileDetails
          user={user}
          isEditing={isEditing}
          onInputChange={handleInputChange}
          onSaveChanges={handleSaveChanges}
        />
      </Container>
    </div>
  );
};

export default ProfilePage;
