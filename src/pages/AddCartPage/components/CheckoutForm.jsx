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
  FormLabel,
  Divider,
  Select,
  MenuItem,
  Checkbox,
  Paper,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: 4, maxWidth: "1200px", margin: "auto" }}>
      {/* Header */}
      <Typography variant="h4" align="center" gutterBottom>
        DELIVERY
      </Typography>

      {/* Delivery Options */}
      {/* <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">
            Choose your delivery method below
          </FormLabel>
          <RadioGroup row defaultValue="home">
            <FormControlLabel
              value="home"
              control={<Radio />}
              label="Home / Office Delivery"
            />
            <FormControlLabel
              value="collect"
              control={<Radio />}
              label="Click & Collect"
            />
          </RadioGroup>
        </FormControl>
      </Paper> */}

      {/* Delivery Address */}
      <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Delivery Address
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Title" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="First Name" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last Name" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Phone Number" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Address Line 1" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Address Line 2" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="City" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Postal Code" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select fullWidth defaultValue="United Kingdom">
              <MenuItem value="United Kingdom">United Kingdom</MenuItem>
              <MenuItem value="United States">United States</MenuItem>
              <MenuItem value="India">India</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox />}
              label="Default delivery address"
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Gift Packaging */}
      <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Gift Packaging
        </Typography>
        <FormControlLabel
          control={<Checkbox />}
          label="Make this order a gift for Rs.5"
        />
      </Paper>

      {/* Delivery Method */}
      {/* <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Delivery Method
        </Typography>
        <RadioGroup defaultValue="standard">
          <FormControlLabel
            value="standard"
            control={<Radio />}
            label="Standard Delivery - Rs.2.95 (3-5 Working Days)"
          />
          <FormControlLabel
            value="nextDay"
            control={<Radio />}
            label="Next Day Delivery - Rs.6.00"
          />
          <FormControlLabel
            value="premium"
            control={<Radio />}
            label="Premium Delivery (up to 3 working days) - Rs.3.95"
          />
          <FormControlLabel
            value="saturday"
            control={<Radio />}
            label="Saturday Delivery - Rs.6.00"
          />
        </RadioGroup>
      </Paper> */}

      {/* Order Summary */}
      <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Your Items (1)
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
                <Typography color="textSecondary">Size: UK 18</Typography>
                <Typography>Rs.139.00</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Divider sx={{ my: 2 }} />
        <Grid container>
          <Grid item xs={6}>
            <Typography>Bag Total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align="right">Rs.139.00</Typography>
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
            <Typography align="right">Rs.141.95</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Submit Button */}
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate("/secure/checkout/payment")}
        >
          Continue to Payment
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutForm;
