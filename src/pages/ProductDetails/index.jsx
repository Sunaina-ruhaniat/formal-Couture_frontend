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
  CircularProgress,
  Rating,
} from "@mui/material";
import cartStore from "stores/cartStore";
import { useNavigate, useParams } from "react-router-dom";
import productStore from "stores/productStore";
import ReviewPage from "pages/ReviewPage";
import { TextFieldstyle } from "components/Theme";

const ProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        setIsLoading(true);
        await productStore.getProductById(productId);
        const fetchedProduct = productStore.selectedProduct;
        setProduct(fetchedProduct);
        setSize(fetchedProduct.sizes[0]);
        setColor(fetchedProduct.colors[0]);
        setSelectedImage(fetchedProduct.images[0]);
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (!product || !size || !color || !quantity) {
      setSnackbarMessage("Please select size, color, and quantity.");
      setOpenSnackbar(true);
      return;
    }

    const variant = { size, color };
    cartStore.addToCart(product._id, quantity, variant, navigate);
  };

  const handleAddToWishlist = () => {
    if (!product || !size || !color) {
      setSnackbarMessage("Please select size and color.");
      setOpenSnackbar(true);
      return;
    }

    const variant = { size, color };
    cartStore.addToWishlist(product._id, variant);
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setIsLoading(true);
    const imgPreload = new Image();
    imgPreload.src = `${BASE_URL}${img}`;
    imgPreload.onload = () => setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
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

      <Box sx={{ maxWidth: "60vw", margin: "0 auto", padding: 2 }}>
        <Grid container spacing={2} sx={{ marginTop: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              maxHeight: "54vh",
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
                  borderRadius: "4px",
                  marginRight: 4,
                }}
                onClick={() => handleImageClick(img)}
              >
                <img
                  src={`${BASE_URL}${img}`}
                  alt={`Thumbnail ${index + 1}`}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    maxHeight: "auto",
                    maxWidth: "120px",
                  }}
                />
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {isLoading && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <CircularProgress size={24} />
              </div>
            )}
            <img
              src={`${BASE_URL}${selectedImage}`}
              alt="Selected Product"
              style={{
                width: "auto",
                maxWidth: "auto",
                objectFit: "cover",
                display: isLoading ? "none" : "block",
              }}
            />
          </Box>

          <Grid item xs={12} md={6} sx={{ marginLeft: 8 }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4" gutterBottom>
                  {product.name}
                </Typography>
                <Box
                  onClick={() => {
                    const element = document.getElementById("reviews-section");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  <Rating
                    value={product.rating || 0}
                    readOnly
                    sx={{ color: "#000" }}
                  />
                </Box>
              </Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {product.productCode}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                gutterBottom
                sx={{ my: 2 }}
              >
                Rs.{product.price}
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
                      backgroundColor: colorOption,
                      border: "2px solid black",
                      cursor: "pointer",
                    }}
                    onClick={() => setColor(colorOption)}
                  />
                ))}
              </Box>

              <Box sx={{ display: "flex", width: "100%", gap: 3 }}>
                <FormControl fullWidth sx={{ mt: 1, mb: 3, borderRadius: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{ mb: 0.5, fontSize: "14px" }}
                  >
                    Size
                  </Typography>
                  <Select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    sx={{
                      width: "100%",
                      height: "50px",
                      borderRadius: 0,
                      ...TextFieldstyle,
                    }}
                  >
                    {product.sizes.map((sizeOption) => (
                      <MenuItem key={sizeOption} value={sizeOption}>
                        {sizeOption}
                      </MenuItem>
                    ))}
                  </Select>
                  {/* <Select
                    value={item.variant.size || ""}
                    onChange={(event) => handleSizeChange(event, item)}
                    size="small"
                    sx={{
                      mb: 3,
                      width: "160px",
                      height: "45px",
                      borderRadius: 0,
                      ...TextFieldstyle,
                    }}
                  >
                    {item.product.sizes.map((size) => (
                      <MenuItem key={size} value={size}>
                        {size}
                      </MenuItem>
                    ))}
                  </Select>{" "} */}
                </FormControl>
              </Box>

              <Typography variant="body2" sx={{ mb: 0.5, fontSize: "14px" }}>
                Quantity
              </Typography>
              <Select
                value={quantity}
                InputProps={{ inputProps: { min: 1, max: product.stock } }}
                onChange={(e) => {
                  if (e.target.value > product.stock)
                    alert("Max Qty to select is " + product.stock);
                  setQuantity(parseInt(e.target.value));
                }}
                // size="small"
                sx={{
                  mb: 3,
                  width: "150px",
                  height: "50px",
                  borderRadius: 0,
                  ...TextFieldstyle,
                }}
              >
                {Array.from({ length: product.stock }, (_, i) => i + 1).map(
                  (num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  )
                )}
              </Select>

              {/* <TextField
                type="number"
                label="Quantity"
                defaultValue={1}
                value={quantity}
                InputProps={{ inputProps: { min: 1, max: product.stock } }}
                sx={{
                  width: "100px",
                  mb: 3,
                  ...TextFieldstyle,
                }}
                onChange={(e) => {
                  if (e.target.value > product.stock)
                    alert("Max Qty to select is " + product.stock);
                  setQuantity(parseInt(e.target.value));
                }}
              /> */}
              <Box sx={{ display: "flex", width: "100%", gap: 3 }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "#000",
                    color: "white",
                    fontSize: "18px",
                    mt: 2,
                    "&:hover": { backgroundColor: "#ffffff", color: "#333333" },
                    borderRadius: "0px",
                    height: 50,
                  }}
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </Button>

                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    mt: 2,
                    borderColor: "#000",
                    color: "#000",
                    fontSize: "18px",
                    "&:hover": { borderColor: "#333", color: "#333" },
                    borderRadius: "0px",
                    height: 50,
                  }}
                  onClick={handleAddToWishlist}
                >
                  ADD TO WISHLIST
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <div style={{ marginTop: "2rem" }}>
        <ReviewPage />
      </div>
    </div>
  );
};

export default ProductPage;
