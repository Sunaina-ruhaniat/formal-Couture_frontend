import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  TextField,
  Divider,
  Breadcrumbs,
  Link,
  Snackbar,
} from "@mui/material";
import { ArrowForward, ArrowBack, ContentCopy } from "@mui/icons-material";
import ProductDetails from "./components/Details";
import cartStore from "stores/cartStore"; // Import CartStore
import referralCodeStore from "stores/referralCodeStore";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("Light Blue");
  const [referralCode, setReferralCode] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const thumbnailContainerRef = useRef(null);

  const images = [
    "/assets/images/IMG_4986.JPG",
    "/assets/images/IMG_5002.JPG",
    "/assets/images/IMG_4990.JPG",
    "/assets/images/IMG_5008.JPG",
    "/assets/images/IMG_4994.JPG",
    "/assets/images/IMG_5000.JPG",
    "/assets/images/IMG_5009.JPG",
  ];

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailScroll = (event) => {
    if (thumbnailContainerRef.current) {
      const scrollAmount = event.deltaY;
      thumbnailContainerRef.current.scrollTop += scrollAmount;
    }
  };

  const handleAddToCart = () => {
    const variant = { size, color, fit: "Slim" };
    cartStore.addToCart(
      "677936f61f04a52e960a36d6",
      quantity,
      variant,
      navigate
    );
  };

  const handleAddToWishlist = () => {
    const variant = { size, color, fit: "Slim" };
    cartStore.addToWishlist("677551a183120f71bc1ff937", variant);
  };

  const generateReferralCode = () => {
    referralCodeStore
      .generateReferralCode("K001") // Assuming K001 is the product ID
      .then((code) => {
        console.log("Generated Referral Code:", code);
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

  return (
    <div style={{ marginTop: 20, marginLeft: -2 }}>
      <Breadcrumbs
        separator="/"
        aria-label="breadcrumb"
        sx={{ fontSize: "12px", mb: 2, ml: 8 }}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/home"
          sx={{ color: "#000", fontWeight: "500" }}
        >
          HOME
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/product-list"
          sx={{ color: "#000", fontWeight: "500" }}
        >
          PRODUCTS
        </Link>
        <Typography sx={{ color: "#000", fontWeight: "500" }}>
          Product Details
        </Typography>
      </Breadcrumbs>

      <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: 2 }}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "stretch",
            }}
          >
            <Box
              ref={thumbnailContainerRef}
              onWheel={handleThumbnailScroll}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxHeight: "670px",
                maxWidth: "117px",
                overflow: "hidden",
                mr: { md: 2, xs: 0 },
                scrollBehavior: "smooth",
              }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  style={{
                    width: "150px",
                    height: "200px",
                    opacity: currentImage === index ? 0.5 : 1,
                    transition: "opacity 0.3s ease",
                    cursor: "pointer",
                  }}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </Box>

            <Box
              sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 2, md: 0 },
              }}
            >
              <img
                src={images[currentImage]}
                alt="Product"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            <IconButton
              onClick={handleNextImage}
              sx={{
                position: "absolute",
                top: "50%",
                left: "calc(100% - 40px)",
                transform: "translateY(-50%)",
                backgroundColor: "white",
                color: "black",
                borderRadius: "50%",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
              <ArrowForward />
            </IconButton>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                I'm a product
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                SKU: 0013
              </Typography>
              <Typography variant="h5" sx={{ my: 2 }}>
                $80.00
              </Typography>

              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Color
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "#555",
                    border: "2px solid black",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    border: "1px solid black",
                  }}
                ></Box>
              </Box>

              <FormControl fullWidth sx={{ mb: 3, borderColor: "#b8aaad" }}>
                <InputLabel>Size</InputLabel>
                <Select value={size} onChange={(e) => setSize(e.target.value)}>
                  <MenuItem value="S">Small</MenuItem>
                  <MenuItem value="M">Medium</MenuItem>
                  <MenuItem value="L">Large</MenuItem>
                </Select>
              </FormControl>

              <TextField
                type="number"
                label="Quantity"
                defaultValue={1}
                InputProps={{ inputProps: { min: 1 } }}
                sx={{ width: "100px", mb: 3, borderColor: "#b8aaad" }}
                onChange={(e) => setQuantity(e.target.value)}
              />

              <Button
                variant="contained"
                fullWidth
                color="primary"
                sx={{
                  py: 1.5,
                  fontSize: "18px",
                  padding: "25px 60px",
                  backgroundColor: "#b8aaad",
                  borderRadius: 0,
                  "&:hover": { backgroundColor: "#ffffff", color: "#333333" },
                }}
                onClick={handleAddToCart}
              >
                ADD TO CART
              </Button>

              <Button
                variant="outlined"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleAddToWishlist}
              >
                ADD TO WISHLIST
              </Button>
            </Box>

            {/* Referral Code Generation Section */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Generate Referral Code
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={generateReferralCode}
                sx={{ mb: 2 }}
              >
                Generate Code
              </Button>

              {referralCode && (
                <Box>
                  <Typography variant="body1">
                    Your Referral Code: <strong>{referralCode}</strong>
                  </Typography>
                  <IconButton onClick={copyReferralCode}>
                    <ContentCopy />
                  </IconButton>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ProductDetails />

      {/* Snackbar for success/failure */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </div>
  );
};

export default ProductPage;
