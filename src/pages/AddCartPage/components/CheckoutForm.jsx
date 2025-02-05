import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Paper,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import paymentStore from "stores/paymentStore";

const CheckoutForm = observer(() => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [orderSummary, setOrderSummary] = useState({
    bagTotal: 139.0,
    deliveryMethod: 2.95,
    total: 141.95,
  });
  const [paymentLink, setPaymentLink] = useState("");

  const onSubmit = async (data) => {
    const shippingAddress = {
      name: `${data.firstName} ${data.lastName}`,
      phone: data.phoneNumber,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2 || "",
      city: data.city,
      state: data.state,
      country: data.country,
      zipCode: data.postalCode,
    };

    const billingAddress = shippingAddress;

    const useReferral = data.useReferral;
    const useExchange = data.useExchange;
    const gift = data.giftPackaging;

    setIsLoading(true);
    const orderDetails = await paymentStore.createOrder(
      shippingAddress,
      billingAddress,
      useReferral,
      useExchange,
      gift
    );

    if (orderDetails) {
      setPaymentLink(orderDetails.paymentLink);
      navigate("/secure/checkout/payment");
    } else {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ padding: 4, maxWidth: "1200px", margin: "auto" }}>
      <Typography variant="h4" align="center" gutterBottom>
        DELIVERY
      </Typography>

      <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Delivery Address
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                fullWidth
                {...register("firstName", {
                  required: "First name is required",
                })}
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                fullWidth
                {...register("lastName", { required: "Last name is required" })}
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                fullWidth
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
                error={!!errors.phoneNumber}
                helperText={
                  errors.phoneNumber ? errors.phoneNumber.message : ""
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address Line 1"
                fullWidth
                {...register("addressLine1", {
                  required: "Address Line 1 is required",
                })}
                error={!!errors.addressLine1}
                helperText={
                  errors.addressLine1 ? errors.addressLine1.message : ""
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address Line 2"
                fullWidth
                {...register("addressLine2")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="City"
                fullWidth
                {...register("city", { required: "City is required" })}
                error={!!errors.city}
                helperText={errors.city ? errors.city.message : ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="State"
                fullWidth
                {...register("state", {
                  required: "State is required",
                })}
                error={!!errors.state}
                helperText={errors.state ? errors.state.message : ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Postal Code"
                fullWidth
                {...register("postalCode", {
                  required: "Postal Code is required",
                })}
                error={!!errors.postalCode}
                helperText={errors.postalCode ? errors.postalCode.message : ""}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Country"
                fullWidth
                defaultValue="India"
                {...register("country", { required: "Country is required" })}
                error={!!errors.country}
                helperText={errors.country ? errors.country.message : ""}
              />
            </Grid>
          </Grid>

          <Paper elevation={3} sx={{ padding: 3, mb: 4, mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Gift Packaging
            </Typography>
            <FormControlLabel
              control={<Checkbox {...register("giftPackaging")} />}
              label="Make this order a gift for Rs.5"
            />
          </Paper>

          <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
            <Divider sx={{ my: 2 }} />
            <Grid container>
              <Grid item xs={6}>
                <Typography>Bag Total</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography align="right">
                  Rs.{orderSummary.bagTotal}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Delivery Method</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography align="right">
                  Rs.{orderSummary.deliveryMethod}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Total</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography align="right">Rs.{orderSummary.total}</Typography>
              </Grid>
            </Grid>
          </Paper>

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
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Continue to Payment"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
});

export default CheckoutForm;
