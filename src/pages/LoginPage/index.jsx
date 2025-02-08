import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import authStore from "stores/authStore";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextFieldstyle } from "components/Theme";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const phonePattern = /^[0-9]{10}$/;

    if (!formData.phone.trim() || !phonePattern.test(formData.phone))
      newErrors.phone = "Please enter a valid 10-digit phone number.";

    if (!formData.password.trim())
      newErrors.password = "Please enter password.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        await authStore.login({
          payload: formData,
          navigate,
        });
      } catch (error) {
        toast.error("Login failed. Please try again.");
      } finally {
        setLoading(false);
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
    <Box display="flex" flexDirection="column" alignItems="center" padding={6}>
      <Box
        sx={{
          width: 600,
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
          log in
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            fullWidth
            // margin="normal"
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

          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#000",
              color: "white",
              fontSize: "18px",
              mt: 2,
              "&:hover": { bgcolor: "#ffffff", color: "black" },
              borderRadius: "0px",
              height: 50,
            }}
            type="submit"
          >
            Sign In
          </Button>
        </form>
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
