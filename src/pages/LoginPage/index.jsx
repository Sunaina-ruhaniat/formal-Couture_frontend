import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // For toast notifications
import authStore from "stores/authStore";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

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
    if (validateForm()) {
      try {
        await authStore.login({
          payload: formData,
          navigate,
        });
      } catch (error) {
        toast.error("Login failed. Please try again.");
      }
    }
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
      justifyContent="center"
      height="100vh"
      bgcolor="#f9f9f9"
    >
      <Box
        width={500}
        p={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        boxShadow={3}
        borderRadius={2}
        bgcolor="white"
      >
        <Typography variant="h5" gutterBottom>
          Sign in
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="E-mail"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            variant="outlined"
          />
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
              endAdornment: <Button sx={{ minWidth: "auto" }} onClick={togglePasswordVisibility}>{showPassword ? "🙈" : "👁️"}</Button>,
            }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Stay signed in"
            sx={{ alignSelf: "flex-start", mt: 1 }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: "black", color: "white", mt: 2 }}
            type="submit"
          >
            Sign in
          </Button>
        </form>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => navigate("/sign-up")} // Navigate to /sign-up
        >
          Create account
        </Button>
        <Link href="#" sx={{ mt: 2, color: "gray", fontSize: "0.9rem" }}>
          Forgotten your password?
        </Link>
      </Box>
    </Box>
  );
};

export default LoginPage;
