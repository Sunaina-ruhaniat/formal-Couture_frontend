import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios"; // Use axios instance if needed
import wishlistStore from "stores/wishlistStore"; // Assuming you have a MobX store for wishlist
import { TextFieldstyle } from "components/Theme";

const WishlistPage = () => {
  const [loading, setLoading] = useState(true);
  const BASE_URL = "http://localhost:8000"; // Change this if needed

  // Fetching wishlist from MobX store
  useEffect(() => {
    const fetchWishlist = async () => {
      await wishlistStore.getWishlist(); // Fetch wishlist from MobX store
      setLoading(false); // Stop loading once the wishlist is fetched
    };
    fetchWishlist();
  }, []);

  // Handling remove from wishlist
  const handleRemoveFromWishlist = async (item) => {
    await wishlistStore.removeFromWishlist(item.product._id, item.variant);
  };

  // Handle adding to cart
  const handleMoveToCart = async (item) => {
    await wishlistStore.moveToCart(item.product._id, item.variant);
  };

  // Get wishlist products from MobX store
  const wishlistProducts = wishlistStore.wishlist?.products || [];

  if (loading) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Loading Wishlist...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: "bold", marginBottom: 4 }}
      >
        MY WISHLIST
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        gutterBottom
        sx={{ marginBottom: 4 }}
      >
        ALL YOUR MOST-LOVED STYLES, IN ONE PLACE.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {wishlistProducts.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.product._id}>
            <Card sx={{ position: "relative", boxShadow: 3 }}>
              <IconButton
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  background: "rgba(255,255,255,0.8)",
                  zIndex: 10,
                }}
                size="small"
                onClick={() => handleRemoveFromWishlist(item)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
              <CardMedia
                component="img"
                height="auto"
                maxheight="50%"
                image={`${BASE_URL}${item.product.images[0]}`}
                alt={item.product.name}
              />
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  {item.product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {`Available in: ${item.variant.size}, ${item.variant.color}`}
                </Typography>
                <Typography
                  variant="h6"
                  color="black"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Rs.{item.product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {`${item.product.rating} ★ (${item.product.reviews} reviews)`}
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5, fontSize: "14px" }}>
                  Size
                </Typography>
                <Select
                  defaultValue={item.variant.size}
                  sx={{
                    width: "100%",
                    height: "50px",
                    borderRadius: 0,
                    ...TextFieldstyle,
                  }}
                >
                  {item.product.sizes.map((size) => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
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
                  onClick={() => handleMoveToCart(item)}
                >
                  ADD TO CART
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WishlistPage;
