import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";

const DeliveryPolicy = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={5}>
      <Box sx={{ width: "100%", maxWidth: 1200 }}>
        {/* Delivery Policy Header */}
        <Typography
          variant="h3"
          gutterBottom
          color="primary"
          sx={{ textAlign: "center", marginBottom: 3 }}
        >
          Delivery Policy
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          sx={{ marginBottom: 4 }}
        >
          At Formal Couture, we are committed to providing you with a seamless
          delivery experience. Please review our shipping policy below for
          detailed information about our delivery process.
        </Typography>

        {/* Delivery Details */}
        <Box sx={{ marginBottom: 4 }}>
          <List>
            <ListItem>
              <ListItemText
                primary="1. Delivery Coverage"
                secondary="We proudly deliver to over 17,000 pin codes across India, ensuring our products reach customers nationwide. Please confirm the serviceability of your location during the checkout process."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="2. Shipping Charges"
                secondary="We offer free shipping across India for serviceable pin codes. Cash on Delivery (COD) orders will be charged an additional fee of INR 100."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="3. Delivery Timeframes"
                secondary="Estimated delivery timelines will be provided at checkout and vary based on your location. Standard delivery typically takes 5-10 business days from the date of order placement depending on your location."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="4. Order Tracking"
                secondary="Once your order is dispatched, a tracking link will be shared via email or SMS. You can monitor your shipment’s progress using this link."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="5. Delivery Address"
                secondary="Please ensure that you provide a complete and accurate delivery address at the time of placing your order. Formal Couture is not responsible for delays or non-delivery due to incorrect or incomplete addresses provided by the customer. Refunds will not be issued in such cases."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="6. Handling and Dispatch"
                secondary="Orders are processed and dispatched within 2-3 business days after payment confirmation. During peak seasons, dispatch times may extend slightly."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="7. Failed Delivery Attempts"
                secondary="If delivery is unsuccessful after multiple attempts due to the recipient being unavailable, the package may be returned to us. Reshipping fees of INR 200 will apply in such cases. In such exceptional scenarios, kindly reach out to us via our WhatsApp contact number +91 9999999999, and once the reshipping fee is paid, the product will be dispatched again."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="8. Damaged or Tampered Packages"
                secondary="If the package appears tampered with or damaged upon delivery, we advise you to refuse the delivery and contact our support team via WhatsApp immediately."
              />
            </ListItem>
          </List>
        </Box>

        {/* Contact Button */}
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          sx={{ marginBottom: 3 }}
        >
          We take every measure to ensure your order reaches you on time and in
          perfect condition. If you have any concerns or questions about
          shipping, please contact us at:
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 3 }}
          href="mailto:theformalcouture@gmail.com"
        >
          Contact Support
        </Button>
      </Box>
    </Box>
  );
};

export default DeliveryPolicy;
