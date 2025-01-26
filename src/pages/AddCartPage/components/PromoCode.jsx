import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { observer } from "mobx-react";
import referralCodeStore from "stores/referralCodeStore";
import cartStore from "stores/cartStore";
import { TextFieldstyle } from "components/Theme";

const PromoCode = observer(() => {
  const [promoCode, setPromoCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePromoChange = (event) => {
    setPromoCode(event.target.value);
    setErrorMessage("");
  };

  const handleApplyPromo = async () => {
    const redeemedMessage = await referralCodeStore.redeemReferralCode(
      promoCode
    );

    if (redeemedMessage) {
      const discountAmount = cartStore.calculateSubtotal() * 0.05;
      cartStore.applyDiscount(discountAmount);
    } else {
      setErrorMessage("Invalid promo code. Please try again.");
    }
  };

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography
        variant="h6"
        sx={{ marginBottom: 2, textTransform: "uppercase", letterSpacing: 2 }}
      >
        Apply Promo Code
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter promo code"
          value={promoCode}
          onChange={handlePromoChange}
          error={!!errorMessage}
          sx={{
            // height: "5vh",
            paddingLeft: 2,
            paddingRight: 2,
            ...TextFieldstyle,
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#000",
            color: "white",
            fontSize: "18px",
            height: "5vh",
            width: "150px",
            letterSpacing: "0.2rem",
            backgroundColor: "#000000",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#ffffff",
              color: "#333333",
              letterSpacing: "0.2rem",
            },
          }}
          onClick={handleApplyPromo}
        >
          APPLY
        </Button>
      </Box>
      {errorMessage && (
        <Typography
          variant="body2"
          color="error"
          sx={{ marginTop: 1, marginLeft: 3 }}
        >
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
});

export default PromoCode;
