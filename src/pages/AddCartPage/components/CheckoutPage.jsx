import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import paymentStore from "stores/paymentStore";

const CheckoutPage = ({ createOrder }) => {
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
  const [billingAddress, setBillingAddress] = useState({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
  const [useReferral, setUseReferral] = useState(false);
  const [useExchange, setUseExchange] = useState(false);

  // Handle changes in input fields
  const handleChange = (e, field, addressType) => {
    const updatedValue = e.target.value;
    if (addressType === "shipping") {
      setShippingAddress((prev) => ({
        ...prev,
        [field]: updatedValue,
      }));
    } else if (addressType === "billing") {
      setBillingAddress((prev) => ({
        ...prev,
        [field]: updatedValue,
      }));
    }
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      shippingAddress,
      billingAddress,
      useReferral,
      useExchange,
    };

    // Call the createOrder function passed as a prop
    paymentStore.createOrder(orderData);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Shipping Address Section */}
        <Typography variant="h6" sx={{ mt: 2 }}>
          Shipping Address
        </Typography>
        <Grid container spacing={2}>
          {Object.keys(shippingAddress).map((key) => (
            <Grid item xs={12} md={6} key={`shipping-${key}`}>
              <TextField
                fullWidth
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                value={shippingAddress[key]}
                onChange={(e) => handleChange(e, key, "shipping")}
                required
              />
            </Grid>
          ))}
        </Grid>

        {/* Billing Address Section */}
        <Typography variant="h6" sx={{ mt: 4 }}>
          Billing Address
        </Typography>
        <Grid container spacing={2}>
          {Object.keys(billingAddress).map((key) => (
            <Grid item xs={12} md={6} key={`billing-${key}`}>
              <TextField
                fullWidth
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                value={billingAddress[key]}
                onChange={(e) => handleChange(e, key, "billing")}
                required
              />
            </Grid>
          ))}
        </Grid>

        {/* Additional Options */}
        <Box sx={{ display: "flex", mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setUseReferral(!useReferral)}
          >
            {useReferral ? "Remove Referral" : "Use Referral"}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ ml: 2 }}
            onClick={() => setUseExchange(!useExchange)}
          >
            {useExchange ? "Remove Exchange" : "Use Exchange"}
          </Button>
        </Box>

        {/* Submit Button */}
        <Divider sx={{ my: 3 }} />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ mt: 3 }}
        >
          Proceed to Payment
        </Button>
      </form>
    </Box>
  );
};

export default CheckoutPage;
