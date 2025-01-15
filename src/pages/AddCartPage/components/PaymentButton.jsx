import React from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const PaymentButton = ({ amount, createOrder }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={() => createOrder(amount)}
      startIcon={<ShoppingCartIcon />}
    >
      Checkout Securely
    </Button>
  );
};

export default PaymentButton;
