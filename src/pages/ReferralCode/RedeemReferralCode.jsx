import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import userStore from "stores/UserStore"; // MobX store

const RedeemReferralCode = () => {
  const [referralCode, setReferralCode] = useState("");

  const handleRedeemReferral = () => {
    userStore.redeemReferralCode(referralCode);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6">Redeem Referral Code</Typography>
      <TextField
        label="Referral Code"
        value={referralCode}
        onChange={(e) => setReferralCode(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleRedeemReferral}
        disabled={userStore.isLoadingReferral}
      >
        {userStore.isLoadingReferral ? (
          <CircularProgress size={24} />
        ) : (
          "Redeem Code"
        )}
      </Button>
      {userStore.redeemedReferralMessage && (
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {userStore.redeemedReferralMessage}
        </Typography>
      )}
    </Box>
  );
};

export default RedeemReferralCode;
