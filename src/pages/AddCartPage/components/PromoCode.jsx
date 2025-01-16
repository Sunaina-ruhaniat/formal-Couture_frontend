import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { observer } from "mobx-react";
import referralCodeStore from "stores/referralCodeStore";
import cartStore from "stores/cartStore";

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
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
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
          helperText={errorMessage}
          InputProps={{
            sx: {
              height: "50px",
              borderRadius: "8px",
              paddingLeft: 2,
              paddingRight: 2,
              backgroundColor: "#f5f5f5",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            height: "50px",
            width: "150px",
            // borderRadius: "8px",
            // fontWeight: "bold",
            letterSpacing: "0.2rem",
            backgroundColor: "#000000",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#000000",
            },
          }}
          onClick={handleApplyPromo}
        >
          APPLY
        </Button>
      </Box>
      {errorMessage && (
        <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
});

export default PromoCode;
