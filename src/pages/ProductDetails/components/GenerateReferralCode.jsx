import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  IconButton,
  TextField,
  Snackbar,
} from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import referralCodeStore from "stores/referralCodeStore";
import productStore from "stores/productStore";
import { useParams } from "react-router-dom";

const GenerateReferralCode = () => {
  const { productId } = useParams();
  const [referralCode, setReferralCode] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateReferralCode = () => {
    referralCodeStore
      .generateReferralCode()
      .then((code) => {
        setReferralCode(code);
        setSnackbarMessage("Referral Code Generated!");
        setOpenSnackbar(true);
      })
      .catch(() => {
        setSnackbarMessage("Failed to generate referral code.");
        setOpenSnackbar(true);
      });
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    setSnackbarMessage("Referral Code Copied!");
    setOpenSnackbar(true);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        setIsLoading(true);
        await productStore.getProductById(productId);
        const fetchedProduct = productStore.selectedProduct;

        setProduct(fetchedProduct);
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <div>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card sx={{ padding: 3, maxWidth: 600, width: "100%", boxShadow: 3 }}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
          >
            Generate Referral Code
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={generateReferralCode}
            sx={{
              width: "100%",
              paddingY: 1.5,
              mb: 2,
              fontWeight: "bold",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#2e6d6f",
              },
            }}
          >
            Generate Code
          </Button>

          {referralCode && (
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Your Referral Code:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  variant="outlined"
                  value={referralCode}
                  sx={{
                    width: "200px",
                    marginRight: 1,
                    textAlign: "center",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "4px",
                      fontWeight: "bold",
                    },
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <IconButton
                  onClick={copyReferralCode}
                  sx={{ padding: 1, "&:hover": { backgroundColor: "#f1f1f1" } }}
                >
                  <ContentCopy sx={{ color: "#1a3e36" }} />
                </IconButton>
              </Box>
            </Box>
          )}
        </Card>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </div>
  );
};

export default GenerateReferralCode;
