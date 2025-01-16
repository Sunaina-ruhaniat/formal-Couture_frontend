import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Breadcrumbs,
  Link,
  Snackbar,
} from "@mui/material";
import cartStore from "stores/cartStore";
import { useNavigate, useParams } from "react-router-dom";
import productStore from "stores/productStore";
import ProductDetails from "./components/Details";
import GenerateReferralCode from "./components/GenerateReferralCode";

const ProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(""); // Initially empty
  const [color, setColor] = useState(""); // Initially empty
  const [fit, setFit] = useState(""); // Initially empty
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image

  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        setIsLoading(true);
        await productStore.getProductById(productId);
        const fetchedProduct = productStore.selectedProduct;
        setProduct(fetchedProduct);
        setSize(fetchedProduct.sizes[0]); // Default to the first size
        setColor(fetchedProduct.colors[0]); // Default to the first color
        setFit(fetchedProduct.fits[0]); // Default to the first fit
        setSelectedImage(fetchedProduct.images[0]); // Set the first image as the default selected image

        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (!product || !size || !color || !fit) {
      setSnackbarMessage("Please select size, color, and fit.");
      setOpenSnackbar(true);
      return;
    }

    const variant = { size, color, fit };
    cartStore.addToCart(product._id, quantity, variant, navigate);
  };

  const handleAddToWishlist = () => {
    if (!product || !size || !color || !fit) {
      setSnackbarMessage("Please select size, color, and fit.");
      setOpenSnackbar(true);
      return;
    }

    const variant = { size, color, fit };
    cartStore.addToWishlist(product._id, variant);
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (!product) {
    return <Typography>No product found</Typography>;
  }

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
          {product.name}
        </Typography>
      </Breadcrumbs>

      <Box sx={{ maxWidth: "1400px", margin: "0 auto", padding: 2 }}>
        <Grid container spacing={4}>
          {/* Vertical image carousel on the left */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxHeight: "80vh",
                overflowY: "auto",
                paddingRight: 2,
              }}
            >
              {product.images.map((img, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={`${BASE_URL}${img}`}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      maxHeight: "100px",
                      maxWidth: "100px",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Large selected image on the right */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={`${BASE_URL}${selectedImage}`}
                alt="Selected Product"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          {/* Product Details (Right side content) */}
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant="h4" gutterBottom>
                {product.name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                SKU: {product.productCode}
              </Typography>
              <Typography variant="h5" sx={{ my: 2 }}>
                ${product.price}
              </Typography>

              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Color
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                {product.colors.map((colorOption) => (
                  <Box
                    key={colorOption}
                    sx={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: colorOption,
                      border: "2px solid black",
                      cursor: "pointer",
                    }}
                    onClick={() => setColor(colorOption)}
                  />
                ))}
              </Box>

              <FormControl fullWidth sx={{ mb: 3, borderRadius: 0 }}>
                <InputLabel>Size</InputLabel>
                <Select value={size} onChange={(e) => setSize(e.target.value)}>
                  {product.sizes.map((sizeOption) => (
                    <MenuItem key={sizeOption} value={sizeOption}>
                      {sizeOption}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Fit</InputLabel>
                <Select value={fit} onChange={(e) => setFit(e.target.value)}>
                  {product.fits.map((fitOption) => (
                    <MenuItem key={fitOption} value={fitOption}>
                      {fitOption}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                type="number"
                label="Quantity"
                defaultValue={1}
                InputProps={{ inputProps: { min: 1 } }}
                sx={{ width: "100px", mb: 3 }}
                onChange={(e) => setQuantity(e.target.value)}
              />

              <Button
                variant="contained"
                fullWidth
                color="primary"
                sx={{
                  // py: 1.5,
                  // fontSize: "18px",
                  // padding: "25px 60px",
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
                sx={{ mt: 2, borderRadius: 0 }}
                onClick={handleAddToWishlist}
              >
                ADD TO WISHLIST
              </Button>
            </Box>

            <GenerateReferralCode />
          </Grid>
        </Grid>
      </Box>
      {/* Integrating ProductDetails */}
      <ProductDetails
        description={product.description}
        fabric={product.fabric}
        careInstructions={product.careInstructions}
        delivery={product.delivery}
        returns={product.returns}
      />
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
