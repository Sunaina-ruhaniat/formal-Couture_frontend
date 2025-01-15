import React from "react";
import {
  Breadcrumbs,
  Link,
  Typography,
  Button,
  MenuItem,
  Select,
  Box,
  Grid,
} from "@mui/material";

const PartywearPage = () => {
  return (
    <Box
      p={2}
      sx={{
        ml: -2,
        fontFamily:
          "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
      }}
    >
      {/* Breadcrumbs */}
      <Breadcrumbs
        separator="/"
        aria-label="breadcrumb"
        sx={{ fontSize: "12px", mb: 2, ml: 8 }}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/home"
          sx={{ color: "#000", fontWeight: "500" }}
        >
          HOME
        </Link>
        <Typography sx={{ color: "#000", fontWeight: "500" }}>
          Products
        </Typography>
      </Breadcrumbs>

      {/* Header and Categories Section */}
      <Box
        sx={{
          bgcolor: "#f5f5f5", // Background color
          p: 3, // Padding for spacing
          borderRadius: "4px", // Optional: Adds a rounded corner effect
          mb: 3, // Bottom margin for spacing
        }}
      >
        {/* Header */}
        <Typography
          variant="h5"
          mt={2}
          mb={1}
          ml={4}
          sx={{
            fontSize: "28px",
            fontWeight: "400",
            color: "#000",
          }}
        >
          PRODUCTS
        </Typography>

        {/* Categories */}
        <Box display="flex" gap={1} flexWrap="wrap" mb={2} ml={4}>
          {[
            "PARTY DRESSES",
            "EVENING DRESSES",
            "VELVET DRESSES",
            "SEQUIN DRESSES",
          ].map((category, index) => (
            <Button
              key={index}
              variant="outlined"
              size="small"
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                textTransform: "none",
                color: "#000",
                borderColor: "#dcdcdc",
                letterSpacing: "0.18rem",
                borderRadius: "0",
                padding: "10px 16px",
                minWidth: "fit-content",
                "&:hover": {
                  borderColor: "#000",
                },
              }}
            >
              {category}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Filters Section */}
      <Box sx={{ p: 2, ml: 6 }}>
        <Grid container spacing={1}>
          {" "}
          {/* Reduced spacing between items */}
          {["Size", "Fit", "Category", "Colour", "Limited Edition"].map(
            (filter, index) => (
              <Grid item xs={6} sm={4} md={1} key={index}>
                {" "}
                {/* Adjusted grid size */}
                <Select
                  size="small"
                  displayEmpty
                  defaultValue=""
                  variant="outlined"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    width: "100%", // Make Select take the full width
                    height: "40px", // Fixed height
                    color: "#333",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none", // Remove the inner border
                    },
                    "& .MuiSelect-select": {
                      padding: "0", // Remove default padding
                      display: "flex", // Use flexbox to align text and icon
                      justifyContent: "space-between", // Space between text and icon
                      alignItems: "center", // Align text and icon vertically
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    {filter} {/* Simple text label */}
                  </MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </Select>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default PartywearPage;
