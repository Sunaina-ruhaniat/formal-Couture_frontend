import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import {
  Button,
  TextField,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import userStore from "stores/UserStore";

const ReferralCodeGeneration = observer(() => {
  const [targetEntity, setTargetEntity] = useState("K001"); // Example target entity (product or refer)

  const handleGenerateReferral = () => {
    userStore.generateReferralCode(targetEntity);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6">Generate Referral Code</Typography>
      <TextField
        label="Target Entity"
        value={targetEntity}
        onChange={(e) => setTargetEntity(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerateReferral}
        disabled={userStore.isLoadingReferral}
      >
        {userStore.isLoadingReferral ? (
          <CircularProgress size={24} />
        ) : (
          "Generate Referral Code"
        )}
      </Button>
      {userStore.referralCode && (
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Your Referral Code: {userStore.referralCode}
        </Typography>
      )}
    </Box>
  );
});

export default ReferralCodeGeneration;
