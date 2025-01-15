import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Link,
  Box,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import authStore from "stores/authStore";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    countryCode: "+91",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.password.trim() || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Valid 10-digit phone number is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const payload = {
        email: formData.email,
        username: formData.email,
        password: formData.password,
        phone: formData.phone,
        // countryCode: formData.countryCode,
      };
      authStore.register({ payload, navigate });
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
          Create your account
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
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    sx={{ minWidth: "auto" }}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <Box display="flex" gap={1} width="100%" mt={2}>
            <FormControl fullWidth>
              <InputLabel>Country Code</InputLabel>
              <Select
                value={formData.countryCode}
                onChange={(e) =>
                  setFormData({ ...formData, countryCode: e.target.value })
                }
                label="Country Code"
              >
                <MenuItem value="+91">🇮🇳 +91</MenuItem>
                <MenuItem value="+1">🇺🇸 +1</MenuItem>
                <MenuItem value="+44">🇬🇧 +44</MenuItem>
                {/* Add more country codes here */}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Mobile"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              error={!!errors.phone}
              helperText={errors.phone}
              variant="outlined"
            />
          </Box>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I would like 10% off on my next purchase, plus personalised offers, news and the latest trends"
            sx={{ mt: 2 }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: "black", color: "white", mt: 2 }}
            type="submit"
          >
            Create account
          </Button>
        </form>
        <Typography variant="body2" mt={2}>
          Already have an account?{" "}
          <Link href="/login" sx={{ color: "black", fontWeight: "bold" }}>
            Sign in
          </Link>
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          textAlign="center"
          mt={2}
        >
          By creating an account, you confirm that you have read our{" "}
          <Link href="#" sx={{ fontWeight: "bold" }}>
            Privacy Policy
          </Link>{" "}
          and accept our{" "}
          <Link href="#" sx={{ fontWeight: "bold" }}>
            Terms & Conditions
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUpPage;
