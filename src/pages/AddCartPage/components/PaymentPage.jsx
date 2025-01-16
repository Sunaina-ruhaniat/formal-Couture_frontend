import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Divider,
  Paper,
  Card,
  CardContent,
} from "@mui/material";

const PaymentPage = () => {
  return (
    <Box sx={{ padding: 4, maxWidth: "1200px", margin: "auto" }}>
      {/* Header */}
      <Typography variant="h4" align="center" gutterBottom>
        PAYMENT
      </Typography>

      {/* Payment Options */}
      <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Choose Payment Method
        </Typography>
        <RadioGroup defaultValue="creditCard">
          <FormControlLabel
            value="giftCard"
            control={<Radio />}
            label="Gift Card"
          />
          <FormControlLabel
            value="creditCard"
            control={<Radio />}
            label={
              <>
                Credit Card/Debit Card
                <Box component="span" sx={{ ml: 2 }}>
                  <img
                    src="https://via.placeholder.com/80x20"
                    alt="Visa Mastercard"
                  />
                </Box>
              </>
            }
          />
          <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
        </RadioGroup>
      </Paper>

      {/* Order Summary */}
      <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Your Items (2)
        </Typography>
        <Card variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box
                  component="img"
                  src="https://via.placeholder.com/100"
                  alt="Product"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography>Leonora Dress</Typography>
                <Typography color="textSecondary">Color: Warm Plum</Typography>
                <Typography color="textSecondary">Size: UK 10</Typography>
                <Typography>Rs.139.00</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box
                  component="img"
                  src="https://via.placeholder.com/100"
                  alt="Gift Box"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography>Gift Box</Typography>
                <Typography>Rs.5.00</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Typography color="textSecondary" sx={{ mt: 2 }}>
          Your order may arrive in multiple deliveries, but all items will be
          gift wrapped.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography>Bag Total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align="right">Rs.144.00</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Delivery Method</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align="right">Rs.2.95</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align="right">Rs.146.95</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Place Order Button */}
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" color="primary" size="large">
          Place Order & Pay
        </Button>
        <Typography variant="caption" display="block" sx={{ mt: 2 }}>
          By placing this order you agree to the
          <a href="#" style={{ marginLeft: 4 }}>
            website terms and conditions
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default PaymentPage;
