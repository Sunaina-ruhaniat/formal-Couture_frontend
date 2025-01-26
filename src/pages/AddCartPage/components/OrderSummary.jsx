import React, { useState } from "react";
import { Box, Typography, Divider, Select, MenuItem } from "@mui/material";

export const ShippingDropdown = () => {
  const [shippingOption, setShippingOption] = useState("standard");

  const handleShippingChange = (event) => {
    setShippingOption(event.target.value);
  };

  const shippingOptions = [
    {
      value: "standard",
      label: "Standard Delivery - Free over Rs.500 (3-5 W)",
    },
    {
      value: "express",
      label: "Express Delivery - Rs.50 (1-2 W)",
    },
    {
      value: "nextDay",
      label: "Next Day Delivery - Rs.100 (Next Day)",
    },
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Shipping Options
      </Typography>
      <Select
        value={shippingOption}
        onChange={handleShippingChange}
        fullWidth
        sx={{
          height: "45px",
          borderRadius: 2,
          border: "1px solid #ddd",
          backgroundColor: "#f5f5f5",
        }}
      >
        {shippingOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

const OrderSummary = ({ subtotal }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6" sx={{ letterSpacing: "0.2rem" }}>
        SUMMARY
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ letterSpacing: "2px" }}>Subtotal</Typography>
        <Typography>Rs.{subtotal}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <Typography sx={{ letterSpacing: "2px" }}>Delivery</Typography>
        <Typography>Rs.0</Typography>
      </Box>
      {/* <ShippingDropdown /> */}
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ letterSpacing: "0.2rem" }}>
          TOTAL
        </Typography>
        <Typography variant="h6">Rs.{subtotal}</Typography>
      </Box>
    </Box>
  );
};

export default OrderSummary;
