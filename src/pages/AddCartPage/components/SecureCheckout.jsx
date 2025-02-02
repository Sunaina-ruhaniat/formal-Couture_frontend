import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SecureCheckout = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("guest");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      alert("Email is required.");
      return;
    }
    if (selectedOption === "signin" && !password) {
      alert("Password is required.");
      return;
    }
    navigate("/secure/checkout/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
        backgroundColor: "#f9f9f9",
        padding: 2,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        WELCOME TO SECURE CHECKOUT
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
        <TextField
          label="Email*"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ marginBottom: 3 }}
        />
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          DO YOU HAVE A PASSWORD?
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", marginBottom: 2 }}>
          Signing in will make shopping with us quicker and easier
        </Typography>
        <RadioGroup
          value={selectedOption}
          onChange={handleOptionChange}
          sx={{ marginBottom: 3 }}
        >
          <FormControlLabel
            value="signin"
            control={<Radio />}
            label="Yes my password is..."
          />
        </RadioGroup>
        {selectedOption === "signin" && (
          <>
            <TextField
              label="Password*"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{ marginBottom: 1 }}
            />
            <Typography variant="body2" sx={{ color: "gray", marginBottom: 1 }}>
              Password is case sensitive
            </Typography>
            <Link href="#" underline="hover" sx={{ fontSize: "0.875rem" }}>
              Forgotten your password?
            </Link>
          </>
        )}
        <Button
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#000",
            color: "white",
            fontSize: "18px",
            letterSpacing: "0.2rem",
            backgroundColor: "#000000",
            color: "#fff",
            marginTop: 3,
            paddingY: 1.5,
            "&:hover": {
              backgroundColor: "#ffffff",
              color: "#333333",
              letterSpacing: "0.2rem",
            },
          }}
        >
          CONTINUE SECURELY
        </Button>
      </form>
    </Box>
  );
};

export default SecureCheckout;
