import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  CircularProgress,
  Divider,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import userStore from "stores/userStore";
import toast from "react-hot-toast";
import "./styles.css";
import authStore from "stores/authStore";

const AdminProfilePage = observer(() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        await userStore.getUser();
        setFormData({
          name: userStore.user.user.username || "",
          email: userStore.user.user.email || "",
          phone: userStore.user.user.phone || "",
        });
        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to fetch user data");
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    try {
      await userStore.updateUserProfile(formData);
      toast.success("Profile updated successfully!");
      setIsEditing(false);
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to update profile");
      setIsLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      await userStore.changePassword(passwordData);
      toast.success("Password changed successfully!");
      setPasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to change password");
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userData");
    navigate("/login");
    toast.success("Logged out successfully!");
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20%",
          color: "#000",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar">
        <Typography variant="h6" color="textPrimary" sx={{ marginBottom: 3 }}>
          Browse by
        </Typography>
        <Divider sx={{ marginTop: "10px", width: "200px" }} />
        <Link to="/admin-page">Dashboard</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/orders">Orders</Link>
      </div>

      <div
        style={{
          flex: 1,
          padding: "20px",
          marginLeft: "100px",
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontWeight: "bold",
            color: "#2C3E50",
            marginBottom: "30px",
            fontSize: "32px",
          }}
        >
          Admin Profile
        </Typography>

        <Card
          style={{
            borderRadius: "10px",
            boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            marginBottom: "30px",
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom color="textSecondary">
              Profile Information
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  variant="outlined"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  variant="outlined"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Phone"
                  name="phone"
                  fullWidth
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  variant="outlined"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </Grid>
            </Grid>

            <Box marginTop={3}>
              {isEditing ? (
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSaveProfile}
                    style={{
                      marginRight: "10px",
                      backgroundColor: "#000",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setIsEditing(false)}
                    style={{
                      borderColor: "#000",
                      color: "#000",
                      borderRadius: "5px",
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => setIsEditing(true)}
                  color="primary"
                  style={{
                    borderColor: "#000",
                    color: "#000",
                    borderRadius: "5px",
                  }}
                >
                  Edit Profile
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>

        <Divider style={{ margin: "20px 0" }} />

        <Card
          style={{
            borderRadius: "10px",
            boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom color="textSecondary">
              Change Password
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Old Password"
                  name="oldPassword"
                  type="password"
                  fullWidth
                  value={passwordData.oldPassword}
                  onChange={handlePasswordChange}
                  variant="outlined"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="New Password"
                  name="newPassword"
                  type="password"
                  fullWidth
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  variant="outlined"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  fullWidth
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  variant="outlined"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </Grid>
            </Grid>

            <Box marginTop={3}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleChangePassword}
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                Change Password
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Box marginTop={3}>
          <Button
            variant="outlined"
            onClick={handleLogout}
            style={{
              borderColor: "#000",
              color: "#000",
              borderRadius: "5px",
            }}
          >
            Logout
          </Button>
        </Box>
      </div>
    </div>
  );
});

export default AdminProfilePage;
