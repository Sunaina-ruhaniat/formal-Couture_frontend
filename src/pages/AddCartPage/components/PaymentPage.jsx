import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import paymentStore from "stores/paymentStore";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [razorpayInstance, setRazorpayInstance] = useState(null);

  const handlePayment = () => {
    if (razorpayInstance) {
      razorpayInstance.open();
    }
  };

  const handleTestPayment = () => {
    const paymentLink = paymentStore.paymentLink; // Replace this with your generated payment link
    window.location.href = paymentLink; // Redirect the user to the payment link
  };

  useEffect(() => {
    // Assuming paymentStore holds the paymentLink & razorpay_order_id
    const paymentLink = paymentStore.paymentLink; // This should have been set after creating the order
    const razorpayOrderId = paymentStore.razorpayOrderId;
    console.log("paymentLink", paymentLink, razorpayOrderId);
    if (!paymentLink || !razorpayOrderId) {
      navigate("/secure/checkout");
      return;
    }

    // Initialize Razorpay here
    const options = {
      key: "your-razorpay-key", // Replace with your Razorpay key
      // amount: paymentStore.orderSummary.total * 100, // Amount in paise
      currency: "INR",
      order_id: razorpayOrderId,
      handler: function (response) {
        // Handle the payment success
        alert("Payment Successful!");
        // Call API or update the order status as 'paid'
        // navigate to order confirmation page
        navigate("/secure/order-confirmation");
      },
      // prefill: {
      //   name: paymentStore.shippingAddress.name,
      //   email: "", // Email (if available)
      //   contact: paymentStore.shippingAddress.phone,
      // },
      theme: {
        color: "#000000",
      },
    };

    const rzp = new window.Razorpay(options);

    // setRazorpayInstance(rzp);
    setIsLoading(false);
  }, [navigate]);

  return (
    <Box sx={{ padding: 4, maxWidth: "1200px", margin: "auto" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Complete Your Payment
      </Typography>

      {isLoading ? (
        <Typography align="center">Loading payment gateway...</Typography>
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "50%",
              bgcolor: "#000",
              color: "white",
              fontSize: "18px",
              letterSpacing: "0.2rem",
              backgroundColor: "#000000",
              color: "#fff",
              marginTop: 3,
              paddingY: 1.5,
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#333333",
                letterSpacing: "0.2rem",
              },
            }}
            onClick={handleTestPayment}
          >
            Pay Now
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PaymentPage;
