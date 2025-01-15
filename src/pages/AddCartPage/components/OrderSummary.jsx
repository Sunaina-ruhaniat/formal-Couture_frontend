import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const OrderSummary = ({ subtotal }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6">SUMMARY</Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Subtotal</Typography>
        <Typography>£{subtotal}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <Typography>Delivery</Typography>
        <Typography>£0</Typography>
      </Box>
      <Typography sx={{ mt: 1 }}>
        Shipping: Standard Delivery - Free over £150 (3-5 W)
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">TOTAL</Typography>
        <Typography variant="h6">£{subtotal}</Typography>
      </Box>
    </Box>
  );
};

export default OrderSummary;
