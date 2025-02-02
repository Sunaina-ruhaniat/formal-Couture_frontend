import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { observer } from "mobx-react";
import { TextFieldstyle } from "components/Theme";

const DeliveryCheckPage = observer(() => {
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const staticAddress =
    "Flat no. 1707, Yarrow Building, Nahar Amrit Shakti, Chandivali, Mumbai, 400072";

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
    setErrorMessage(""); // Reset error message when input changes
  };

  const handleCheckDelivery = async () => {
    const validPincode = "400072"; // Static pincode for Mumbai address

    if (pincode === validPincode) {
      setDeliveryStatus("Delivery is available at this location.");
      setErrorMessage(""); // Clear any previous error
    } else {
      setErrorMessage("Sorry, we do not deliver to this location.");
      setDeliveryStatus(""); // Clear any previous success message
    }
  };

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography
        variant="h6"
        sx={{ marginBottom: 2, textTransform: "uppercase", letterSpacing: 2 }}
      >
        Check Delivery Availability
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter pincode"
          value={pincode}
          onChange={handlePincodeChange}
          error={!!errorMessage}
          sx={{
            paddingRight: 1,
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
          onClick={handleCheckDelivery}
        >
          CHECK
        </Button>
      </Box>

      {/* Success or Error Message */}
      {deliveryStatus && (
        <Typography
          variant="body1"
          color="success"
          sx={{ marginTop: 1, marginLeft: 3 }}
        >
          {deliveryStatus}
        </Typography>
      )}
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

export default DeliveryCheckPage;
