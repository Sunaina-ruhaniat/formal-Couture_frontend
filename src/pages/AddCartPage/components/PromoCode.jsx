import React, { useState } from "react";
import { TextField, InputAdornment, Button, Typography } from "@mui/material";
import { observer } from "mobx-react";
import referralCodeStore from "stores/referralCodeStore"; // Assuming this is the store for handling referral codes

const PromoCode = observer(() => {
  const [promoCode, setPromoCode] = useState("");

  const handlePromoChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handleApplyPromo = async () => {
    const redeemedMessage = await referralCodeStore.redeemReferralCode(
      promoCode
    );
    if (redeemedMessage) {
      alert(`Referral code applied successfully: ${redeemedMessage}`);
    }
  };

  return (
    <div>
      <Typography variant="subtitle1">APPLY PROMO CODE</Typography>
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
      />
    </div>
  );
});

export default PromoCode;
