import React from "react";
import { observer } from "mobx-react";
import { Snackbar, Alert } from "@mui/material";
import cartStore from "stores/cartStore";

const AppSnackbar = observer(() => {
  const {
    snackbarOpen,
    snackbarMessage,
    snackbarSeverity,
    closeSnackbar,
    snackbarPosition,
  } = cartStore;

  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={3000}
      onClose={closeSnackbar}
      anchorOrigin={snackbarPosition} // Position the Snackbar in top-right
    >
      <Alert
        onClose={closeSnackbar}
        severity={snackbarSeverity}
        sx={{ width: "100%" }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
});

export default AppSnackbar;
