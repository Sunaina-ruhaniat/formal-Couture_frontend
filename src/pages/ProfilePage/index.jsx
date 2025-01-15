import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Grid,
  Avatar,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  AccountCircle,
  Email,
  Phone,
  Lock,
  AccessTime,
} from "@mui/icons-material"; // Import icons

const Profile = () => {
  const [user, setUser] = useState(null); // State to store user data
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (!userDataString) {
      navigate("/login");
      return;
    }

    try {
      const userData = JSON.parse(userDataString);
      const user = userData.data ? userData.data.user : null;
      if (user) {
        setUser(user);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate("/login");
    }
  }, [navigate, userId]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userData");
    navigate("/home");
  };

  // Function to extract the name from the email
  const extractNameFromEmail = (email) => {
    const name = email.split("@")[0]; // Get everything before '@'
    return name.charAt(0).toUpperCase() + name.slice(1); // Capitalize the first letter of the name
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: 3, marginTop: 5, textAlign: "center" }}>
        {user ? (
          <Grid container spacing={3}>
            {/* Profile Header */}
            <Grid
              item
              xs={12}
              sm={4}
              container
              direction="column"
              alignItems="center"
            >
              <Avatar
                sx={{ width: 120, height: 120, marginBottom: 2 }}
                src="/static/images/avatar/1.jpg"
              />
              <Typography variant="h5">
                {extractNameFromEmail(user.email)}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {user.role}
              </Typography>
            </Grid>

            {/* User Info Section */}
            <Grid item xs={12} sm={8}>
              <Card variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ marginBottom: 2 }}
                  >
                    User Information
                  </Typography>
                  <Divider sx={{ marginBottom: 2 }} />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <AccountCircle sx={{ marginRight: 1 }} />
                    <Typography variant="body1">
                      {extractNameFromEmail(user.email)}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <Email sx={{ marginRight: 1 }} />
                    <Typography variant="body1">{user.email}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <Phone sx={{ marginRight: 1 }} />
                    <Typography variant="body1">{user.phone}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <Lock sx={{ marginRight: 1 }} />
                    <Typography variant="body1">*********</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <AccessTime sx={{ marginRight: 1 }} />
                    <Typography variant="body1">
                      Joined on {new Date(user.createdAt).toLocaleDateString()}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              {/* Logout Button */}
              <Box
                sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Typography variant="h5">Loading user data...</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Profile;
