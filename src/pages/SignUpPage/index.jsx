import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Link,
  Box,
  CircularProgress,
} from "@mui/material";
import authStore from "stores/authStore";
import { useNavigate } from "react-router-dom";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextFieldstyle } from "components/Theme";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    countryCode: "+91",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required.";
    }

    if (!formData.password.trim() || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!formData.name.trim() || formData.name.length < 6) {
      newErrors.name = "Name must be at least 6 characters.";
    } else if (/[^a-zA-Z\s]/.test(formData.name)) {
      newErrors.name =
        "Name must only contain letters and spaces. No special characters allowed.";
    }

    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Valid 10-digit phone number is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setLoading(true);
      const payload = {
        email: formData.email,
        name: formData.name,
        username: formData.name,
        password: formData.password,
        phone: formData.phone,
        countryCode: formData.countryCode,
      };
      authStore
        .register({ payload, navigate })
        .finally(() => setLoading(false));
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
    <Box display="flex" flexDirection="column" alignItems="center" padding={6}>
      <Box
        sx={{
          width: 600,
          // padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#fff",
        }}
      >
        <Typography
          variant="h5"
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
          create account
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            fullWidth
            // margin="normal"
            label="E-mail"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            variant="outlined"
            sx={{
              input: { color: "#000" },
              marginBottom: 2,
              ...TextFieldstyle,
            }}
          />

          <TextField
            fullWidth
            // margin="normal"
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
              marginBottom: 2,
              ...TextFieldstyle,
            }}
          />

          <TextField
            fullWidth
            // margin="normal"
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={!!errors.name}
            helperText={errors.name}
            variant="outlined"
            sx={{
              input: { color: "#000" },
              marginBottom: 2,
              ...TextFieldstyle,
            }}
          />
          {loading && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1000,
              }}
            >
              <CircularProgress size={50} sx={{ color: "black" }} />
            </Box>
          )}
          <TextField
            fullWidth
            label="Mobile"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            error={!!errors.phone}
            helperText={errors.phone}
            variant="outlined"
            sx={{
              input: { color: "#000" },
              marginBottom: 2,
              ...TextFieldstyle,
            }}
          />

          {/* <FormControlLabel
            control={<Checkbox defaultChecked color="default" />}
            label="I would like 10% off on my next purchase, plus personalised offers, news and the latest trends"
            sx={{ mt: 2 }}
          /> */}

          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              fontSize: "18px",
              mt: 1,
              height: 50,
              "&:hover": { bgcolor: "#ffffff", color: "black" },
              borderRadius: "0px",
            }}
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
