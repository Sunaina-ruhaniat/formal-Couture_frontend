// src/components/ShoppingCart.js

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Divider,
  InputAdornment,
  Select,
  MenuItem,
  Breadcrumbs,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import { Link, useNavigate } from "react-router-dom";
import paymentStore from "stores/paymentStore"; // Import the PaymentStore
import { observer } from "mobx-react";
import referralCodeStore from "stores/referralCodeStore";
import OrderSummary from "./components/OrderSummary";
import PromoCode from "./components/PromoCode";
import PaymentButton from "./components/PaymentButton";

const ShoppingCart = observer(() => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(2);
  const [promoCode, setPromoCode] = useState("");
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

  const createOrder = async (amount) => {
    try {
      // Define the order data with shipping and billing address
      const orderData = {
        shippingAddress: {
          name: "John Doe", // Replace with dynamic data
          phone: "1234567890", // Replace with dynamic data
          addressLine1: "123 Main St", // Replace with dynamic data
          addressLine2: "Apt 4B", // Replace with dynamic data
          city: "New York", // Replace with dynamic data
          state: "NY", // Replace with dynamic data
          country: "USA", // Replace with dynamic data
          zipCode: "10001", // Replace with dynamic data
        },
        billingAddress: {
          name: "John Doe", // Replace with dynamic data
          phone: "1234567890", // Replace with dynamic data
          addressLine1: "123 Main St", // Replace with dynamic data
          addressLine2: "Apt 4B", // Replace with dynamic data
          city: "New York", // Replace with dynamic data
          state: "NY", // Replace with dynamic data
          country: "USA", // Replace with dynamic data
          zipCode: "10001", // Replace with dynamic data
        },
        useReferral: false, // Set this based on whether the user has a referral
        useExchange: true, // Set this based on the user's choice to use an exchange
      };

      // Send the request to the backend
      const response = await fetch("http://localhost:8000/api/order/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      if (response.ok) {
        // The backend will return the Razorpay order details
        if (data.order_id) {
          openRazorpayModal(data.order_id, data.amount);
        } else {
          console.error("Failed to create order on backend.");
        }
      } else {
        console.error("Failed to checkout:", data.message);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  // Function to trigger Razorpay modal
  const openRazorpayModal = (orderId, amount) => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Public key (from Razorpay dashboard)
      amount: amount * 100, // Convert to the smallest unit (e.g., paisa)
      currency: "INR", // Currency code
      order_id: orderId, // Order ID received from the backend
      handler: function (response) {
        verifyPayment(response);
      },
      prefill: {
        name: "John Doe", // User info (you can dynamically add)
        email: "johndoe@example.com",
        contact: "1234567890",
      },
      theme: {
        color: "#F37254", // Customize color
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const verifyPayment = async (response) => {
    try {
      const paymentData = {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      };

      const verificationResponse = await fetch(
        "http://localhost:8000/api/payment/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        }
      );

      const data = await verificationResponse.json();
      if (data.success) {
        alert("Payment Successful!");
      } else {
        alert("Payment Verification Failed!");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
    }
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePromoChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handleApplyPromo = async () => {
    // Redeem promo code logic
    const redeemedMessage = await referralCodeStore.redeemReferralCode(
      promoCode
    );
    if (redeemedMessage) {
      alert(`Promo code applied successfully: ${redeemedMessage}`);
    }
  };

  // const handleCheckout = async () => {
  //   const subtotal = 298 * quantity;
  //   const orderData = {
  //     shippingAddress,
  //     billingAddress: shippingAddress, // Assuming same as shipping
  //     useReferral: false, // Add logic if you want to apply referral discounts
  //     useExchange: true, // Add logic if you want to apply exchange values
  //   };

  //   const orderResponse = await paymentStore.createOrder(
  //     shippingAddress,
  //     shippingAddress,
  //     false, // Assume no referral
  //     true // Assume exchange
  //   );

  //   if (orderResponse && orderResponse.razorpay_order_id) {
  //     openRazorpayPayment(orderResponse);
  //   }
  // };

  const openRazorpayPayment = (orderData) => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
      amount: orderData.amount, // The amount to be paid in the smallest currency unit (e.g., paisa)
      currency: "INR", // Or whatever currency you're using
      order_id: orderData.razorpay_order_id,
      handler: function (response) {
        // Handle the payment success, e.g., verify the payment on your backend
        verifyPayment(response);
      },
      prefill: {
        name: shippingAddress.name,
        email: "test@example.com", // Optional, add user's email
        contact: shippingAddress.phone,
      },
      theme: {
        color: "#F37254", // Customize the payment modal color
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  // const verifyPayment = async (paymentResponse) => {
  //   const isVerified = await paymentStore.verifyPayment(paymentResponse);
  //   if (isVerified) {
  //     // Handle successful payment (e.g., order completed)
  //     alert("Payment successful!");
  //   } else {
  //     // Handle payment failure
  //     alert("Payment verification failed.");
  //   }
  // };

  const handleCheckout = () => {
    // Redirect user to Checkout page
    navigate("/checkout");
  };

  const subtotal = 298 * quantity;

  return (
    <div style={{ marginTop: 20, marginLeft: -2 }}>
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
        <Link
          underline="hover"
          color="inherit"
          href="/product-list"
          sx={{ color: "#000", fontWeight: "500" }}
        >
          PRODUCTS
        </Link>
        <Typography sx={{ color: "#000", fontWeight: "500" }}>Cart</Typography>
      </Breadcrumbs>
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={4}>
          {/* Basket Section */}
          <Grid item xs={12} md={7}>
            <Typography variant="h5" gutterBottom>
              YOUR BASKET ({quantity})
            </Typography>
            <Card sx={{ display: "flex", mb: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: 150 }}
                image="https://via.placeholder.com/150"
                alt="Florian Dress"
              />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h6">FLORIAN DRESS</Typography>
                <Typography variant="body2">
                  Colour: <strong>Navy Green</strong>
                </Typography>
                <Typography variant="body2">In Stock</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  £298
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  <Select
                    value={quantity}
                    onChange={handleQuantityChange}
                    size="small"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </Select>
                  <Button variant="outlined">Move to Wishlist</Button>
                  <Button variant="outlined" color="error">
                    Remove
                  </Button>
                </Box>
              </CardContent>
            </Card>
            <Button variant="text">&lt; Continue Shopping</Button>
          </Grid>

          {/* Summary Section */}
          <Grid item xs={12} md={5}>
            <Card sx={{ padding: 3 }}>
              {/* <Typography variant="h6">SUMMARY</Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Subtotal</Typography>
                <Typography>£{subtotal}</Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
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
              <Typography variant="body2" sx={{ mt: 1 }}>
                Pay in 3 interest-free payments of £{(subtotal / 3).toFixed(2)}{" "}
                with PayPal.
              </Typography> */}

              {/* <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                startIcon={<ShoppingCartIcon />}
                onClick={handleCheckout} // Checkout action triggers Razorpay
              >
                CHECKOUT SECURELY
              </Button>
              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                <PaymentIcon />
                <LocalShippingIcon />
              </Box> */}

              <OrderSummary subtotal={subtotal} />
              <PaymentButton amount={subtotal} createOrder={createOrder} />
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                startIcon={<ShoppingCartIcon />}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
              <Divider sx={{ my: 2 }} />
              <PromoCode />

              {/* <Typography variant="subtitle1">APPLY PROMO CODE</Typography>
              <TextField
                fullWidth
                placeholder="Enter code here"
                value={promoCode}
                onChange={handlePromoChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button variant="contained" onClick={handleApplyPromo}>
                        APPLY
                      </Button>
                    </InputAdornment>
                  ),
                }}
              /> */}
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});

export default ShoppingCart;
