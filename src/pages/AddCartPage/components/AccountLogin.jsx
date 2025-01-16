import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AccountLogin = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/secure/checkout/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        backgroundColor: "#f9f9f9",
        minHeight: "60vh",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        GO TO YOUR ACCOUNT
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        We have noticed that there is an account related to this email address.
        Would you like to...
      </Typography>
      <TextField
        label="Email*"
        variant="outlined"
        fullWidth
        defaultValue="s1906127@gmail.com"
        sx={{ maxWidth: 400, marginBottom: 2 }}
      />
      <TextField
        label="Password*"
        variant="outlined"
        fullWidth
        type="password"
        sx={{ maxWidth: 400, marginBottom: 2 }}
      />
      <Typography
        variant="body2"
        sx={{ color: "gray", marginBottom: 1, maxWidth: 400 }}
      >
        Password is case sensitive
      </Typography>
      <Link
        href="#"
        underline="hover"
        sx={{ fontSize: "0.875rem", marginBottom: 2 }}
      >
        Forgotten your password?
      </Link>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          textTransform: "none",
          backgroundColor: "#1a3e36",
          paddingY: 1.5,
          marginBottom: 2,
          maxWidth: 400,
          ":hover": {
            backgroundColor: "#16382f",
          },
        }}
        onClick={() => handleCheckout()}
      >
        LOG IN AND SAVE TIME
      </Button>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        OR
      </Typography>
      <Button
        variant="outlined"
        fullWidth
        onClick={() => handleCheckout()}
        sx={{
          textTransform: "none",
          paddingY: 1.5,
          maxWidth: 400,
          borderColor: "#1a3e36",
          color: "#1a3e36",
          ":hover": {
            borderColor: "#16382f",
            backgroundColor: "#f9f9f9",
          },
        }}
      >
        CHECKOUT AS GUEST
      </Button>
    </Box>
  );
};

export default AccountLogin;
