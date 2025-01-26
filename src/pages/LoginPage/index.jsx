import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  InputAdornment,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import authStore from "stores/authStore";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CssTextField, TextFieldstyle } from "components/Theme";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // const validateForm = () => {
  //   const newErrors = {};
  //   const phonePattern = /^[0-9]{10}$/; // For phone validation: 10 digits
  //   const passwordPattern = /^(?=.*[A-Z]).{8,}$/; // Password should be at least 8 characters and contain at least one capital letter

  //   // Phone Validation
  //   if (!formData.phone.trim() || !phonePattern.test(formData.phone))
  //     newErrors.phone = "Please enter a valid 10-digit phone number.";

  //   // Password Validation
  //   if (!formData.password.trim() || !passwordPattern.test(formData.password))
  //     newErrors.password =
  //       "Password must be at least 8 characters, including at least one capital letter.";

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (validateForm()) {
  //   try {
  //     await authStore.login({
  //       payload: formData,
  //       navigate,
  //     });
  //   } catch (error) {
  //     toast.error("Login failed. Please try again.");
  //   }
  //   }
  // };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.password.trim() || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (validateForm()) {
    try {
      await authStore.login({
        payload: formData,
        navigate,
      });
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
    // }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      // height="70vh"
      padding={15}
    >
      <Box
        sx={{
          width: 800,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 3,
          bgcolor: "#fff",
        }}
      >
        {/* "log in" heading with left alignment */}
        <Typography
          variant="h3"
          gutterBottom
          color="#000"
          fontWeight="semibold"
          letterSpacing={4}
          mb={3}
          sx={{
            textTransform: "uppercase",
            textAlign: "left",
            width: "100%",
          }}
        >
          log in
        </Typography>

        <Typography
          variant="body2"
          sx={{
            textTransform: "uppercase",
            textAlign: "left",
            marginBottom: "15px",
            color: "gray",
            width: "100%",
          }}
        >
          Already have an account with us? Sign in below
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          {/* Phone Number Field */}
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            error={!!errors.phone}
            helperText={errors.phone}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "gray" }}>
                  +91
                </InputAdornment>
              ),
            }}
            sx={{
              input: { color: "#000" },
              ...TextFieldstyle,
            }}
          />
          {/* Password Field */}
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
            error={!!errors.password}
            helperText={errors.password}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <Button
                  sx={{ minWidth: "auto", color: "#000" }}
                  onClick={togglePasswordVisibility}
                  size="small"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </Button>
              ),
            }}
            sx={{
              input: { color: "#000" },
              ...TextFieldstyle,
            }}
          />

          {/* "Stay signed in" Checkbox */}
          <FormControlLabel
            control={<Checkbox defaultChecked color="default" />}
            label="Stay signed in"
            sx={{
              color: "#000",
              alignSelf: "flex-start",
              mt: 1,
              "& .Mui-checked": {
                color: "#000",
              },
            }}
          />

          {/* Submit Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#000",
              color: "white",
              fontSize: "18px",
              mt: 2,
              "&:hover": { bgcolor: "#333" },
              borderRadius: "0px",
              height: 50,
            }}
            type="submit"
          >
            Sign In
          </Button>
        </form>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            mt: 2,
            borderColor: "#000",
            color: "#000",
            fontSize: "18px",
            "&:hover": { borderColor: "#333", color: "#333" },
            borderRadius: "0px",
            height: 50,
          }}
          onClick={() => navigate("/sign-up")}
        >
          Create Account
        </Button>

        <Button
          sx={{
            mt: 1,
            color: "gray",
            fontSize: "0.9rem",
            textTransform: "none",
          }}
          onClick={() => navigate("/forgot-password")}
        >
          Forgotten your password?
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
