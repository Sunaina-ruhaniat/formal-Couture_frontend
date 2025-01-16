import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Breadcrumbs,
  Container,
} from "@mui/material";
import { observer } from "mobx-react";
import wishlistStore from "stores/wishlistStore";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const WishlistPage = observer(() => {
  const [loading, setLoading] = useState(true);
  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchWishlist = async () => {
      await wishlistStore.getWishlist();
      setLoading(false);
    };
    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (item) => {
    await wishlistStore.removeFromWishlist(item.product._id, item.variant);
  };

  const handleMoveToCart = async (item) => {
    await wishlistStore.moveToCart(item.product._id, item.variant);
  };

  const wishlistProducts = wishlistStore.wishlist?.products || [];

  return (
    <Container sx={{ maxWidth: "xl", paddingTop: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs
        separator=">"
        aria-label="breadcrumb"
        sx={{
          fontSize: "14px",
          mb: 4,
        }}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/home"
          sx={{ color: "#3f51b5", fontWeight: "bold" }}
        >
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/products"
          sx={{ color: "#3f51b5", fontWeight: "bold" }}
        >
          Products
        </Link>
        <Typography sx={{ color: "#000", fontWeight: "bold" }}>
          Wishlist
        </Typography>
      </Breadcrumbs>

      <Box
        sx={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 4, textAlign: "center" }}>
          Your Wishlist
        </Typography>

        {loading ? (
          <Typography variant="h6" color="textSecondary" align="center">
            Loading wishlist...
          </Typography>
        ) : wishlistProducts.length === 0 ? (
          <Typography variant="h6" color="textSecondary" align="center">
            Your wishlist is empty. Start adding your favorite products!
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {wishlistProducts.map((item) => (
              <Grid item xs={12} sm={6} md={3} lg={3} key={item.product._id}>
                <Card
                  sx={{
                    // borderRadius: "12px", // Rounded corners for card
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    "&:hover": {
                      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    },
                    // border: "1px solid #e0e0e0", // Light border for classy effect
                    backgroundColor: "#fff",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={`${BASE_URL}${item.product.images[0]}`}
                    alt={item.product.name}
                    sx={{
                      height: "300px", // Increased image height for a larger impact
                      objectFit: "cover", // Ensure image covers the container
                      width: "100%", // Full width
                      //   borderTopLeftRadius: "12px", // Square borders at the top corners
                      //   borderTopRightRadius: "12px", // Square borders at the top corners
                    }}
                  />
                  <CardContent sx={{ padding: "16px" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        color: "#333",
                      }}
                    >
                      {item.product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ marginTop: "4px" }}
                    >
                      Size: {item.variant.size} | Color: {item.variant.color}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ marginTop: "8px", color: "#3f51b5" }}
                    >
                      Rs.{item.product.price}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "12px", // Adjusted margin for better spacing
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<AddShoppingCartIcon />}
                        onClick={() => handleMoveToCart(item)}
                        sx={{
                          //   borderRadius: "8px",
                          padding: "6px 12px",
                          backgroundColor: "#00796b", // Classy button color
                          "&:hover": {
                            backgroundColor: "#004d40", // Hover effect
                          },
                        }}
                      >
                        Add to Cart
                      </Button>
                      <IconButton
                        color="error"
                        onClick={() => handleRemoveFromWishlist(item)}
                        sx={{
                          backgroundColor: "#f44336",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "#d32f2f",
                          },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
});

export default WishlistPage;
