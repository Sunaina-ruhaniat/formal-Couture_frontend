import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  TextField,
  MenuItem,
  Paper,
} from "@mui/material";

const ProfileDetails = ({ user, isEditing, onInputChange, onSaveChanges }) => {
  const [referralCode, setReferralCode] = useState("");

  const handleGenerateReferralCode = () => {
    const newReferralCode = `REF${Math.floor(Math.random() * 1000000)}`;
    setReferralCode(newReferralCode);
  };

  return (
    <Grid item xs={12} sm={10} md={8}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          textTransform: "uppercase",
          letterSpacing: 3,
          color: "#333",
        }}
      >
        My Details
      </Typography>
      <Divider sx={{ marginBottom: 3 }} />

      <>
        {/* Title Dropdown */}
        {/* <TextField
          select
          label="Title"
          value={user.title || ""}
          onChange={(e) => onInputChange("title", e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          <MenuItem value="Mr">Mr</MenuItem>
          <MenuItem value="Miss">Miss</MenuItem>
          <MenuItem value="Mrs">Mrs</MenuItem>
        </TextField> */}

        {/* Name Fields */}
        <TextField
          label="Name"
          value={user.name || ""}
          onChange={(e) => onInputChange("firstName", e.target.value)}
          fullWidth
          required
        />

        {/* Email */}
        <TextField
          label="Email"
          value={user.email || ""}
          onChange={(e) => onInputChange("email", e.target.value)}
          fullWidth
          required
          sx={{ marginTop: 2 }}
        />

        {/* Mobile Number */}
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={4}>
            <TextField
              select
              label="Country Code"
              value={user.countryCode || ""}
              onChange={(e) => onInputChange("countryCode", e.target.value)}
              fullWidth
            >
              <MenuItem value="+91">India (+91)</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Mobile Number"
              value={user.phone || ""}
              onChange={(e) => onInputChange("phone", e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Save Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            marginTop: 3,
            backgroundColor: "#000000",
            color: "white",
            padding: "10px 0",
            letterSpacing: 2,
            fontSize: "18px",
            "&:hover": { backgroundColor: "#ffffff", color: "black" },
          }}
          onClick={onSaveChanges}
        >
          Save Changes
        </Button>
      </>
      {/* Referral Code Section */}
      <Divider sx={{ marginBottom: 1 }} />
      <Divider sx={{ marginBottom: 3 }} />

      <Typography
        variant="h6"
        sx={{
          marginBottom: 2,
          fontWeight: "bold",
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        Generate Your Referral Code
      </Typography>
      <Divider sx={{ marginBottom: 3 }} />

      <Box sx={{ marginBottom: 1 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            // marginTop: 2,
            backgroundColor: "#000000",
            color: "white",
            padding: "10px 0",
            fontSize: "18px",
            letterSpacing: 2,
            "&:hover": { backgroundColor: "#ffffff", color: "black" },
          }}
          onClick={handleGenerateReferralCode}
        >
          Generate Referral Code
        </Button>
      </Box>
      {referralCode && (
        <Typography
          variant="h6"
          sx={{
            marginTop: 2,
            fontSize: "1.2rem",
            fontWeight: "bold",
            border: "2px solid #000000",
            padding: "8px 15px",
            borderRadius: 0,
          }}
        >
          Your Referral Code: {referralCode}
        </Typography>
      )}
    </Grid>
  );
};

export default ProfileDetails;
