import React from "react";
import { Box, Typography, Paper, Button, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ExchangePolicyPage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={5}>
      <Box sx={{ width: "100%", maxWidth: 1200 }}>
        {/* Header Section */}
        <Typography
          variant="h3"
          gutterBottom
          color="#000"
          fontWeight="semibold"
          sx={{ textAlign: "center", marginBottom: 3 }}
        >
          Exchange Policy
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          sx={{ marginBottom: 4 }}
        >
          At Formal Couture, your satisfaction is our priority! We’ve designed
          an easy exchange process to ensure your shopping experience is
          seamless.
        </Typography>

        {/* Size Exchange Section */}
        <Paper
          sx={{
            padding: 3,
            marginBottom: 4,
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Size Exchange
            </Typography>
            <Typography variant="body1" color="textSecondary">
              If the size doesn’t fit perfectly, no worries! You can request a
              size exchange within 5 days of receiving your order. The item
              should be in its original condition: unwashed, unused, and with
              all tags intact.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <img
              src="your-image-path-here.jpg"
              alt="Size Exchange"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Paper>

        {/* Style Exchange Section */}
        <Paper
          sx={{
            padding: 3,
            marginBottom: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Style Exchange
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Changed your mind or want to try a different look? We offer style
              exchanges within 20 days of receiving your order. The item should
              be in its original, unworn condition, with tags and packaging
              intact.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <img
              src="your-image-path-here.jpg"
              alt="Style Exchange"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Paper>

        {/* How to Initiate an Exchange Section */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            How to Initiate an Exchange
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Write to us on WhatsApp at: <strong>+91 7015602881</strong>
            <br />
            Provide the following details:
            <ul>
              <li>Order ID (for order details)</li>
              <li>Product Code (for the item you’d like to exchange)</li>
              <li>Confirm whether it’s a size or style exchange</li>
              <li>For size exchange, mention the new size you would want</li>
              <li>
                For style exchange, share the product code of the item and the
                size you would like to have
              </li>
            </ul>
            Our team will guide you through the process and ensure a hassle-free
            experience.
          </Typography>
        </Paper>

        {/* Additional Information Section */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Additional Information
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <ul>
              <li>Exchanges are subject to stock availability.</li>
              <li>
                For size exchanges, we’ll replace the item with the same design
                in your preferred size.
              </li>
              <li>
                For style exchanges, you can choose an item of equal or higher
                value (the difference will need to be paid if applicable, via
                online payment mode).
              </li>
              <li>
                If the style exchange request is approved (after quality
                checks), the store credit of the purchase order amount will
                reflect in your wallet in 2-3 days.
              </li>
              <li>
                Exchange Limit: Each item is eligible for exchange only once,
                whether for a different size or style. Multiple exchanges are
                not allowed.
              </li>
              <li>
                Quality Check: Exchanged items must pass quality checks upon
                arrival. They should be unwashed, unworn, with tags intact, and
                free from damage or stains.
              </li>
            </ul>
          </Typography>
        </Paper>

        {/* Contact Button Section */}
        <Box display="flex" justifyContent="center" sx={{ marginTop: 5 }}>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ marginRight: 2 }}
          >
            Need assistance? Reach us on WhatsApp:
          </Typography>
          <IconButton
            href="https://wa.me/917015602881"
            target="_blank"
            color="success"
            sx={{ backgroundColor: "#25D366", borderRadius: "50%" }}
          >
            <WhatsAppIcon sx={{ fontSize: 30, color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ExchangePolicyPage;
