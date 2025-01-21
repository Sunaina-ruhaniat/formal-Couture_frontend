import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Select,
  MenuItem,
  Breadcrumbs,
  Divider,
  Link,
  Link as MuiLink,
} from "@mui/material";
import { observer } from "mobx-react";
import cartStore from "stores/cartStore"; // Import the cartStore
import { useNavigate } from "react-router-dom";
import OrderSummary from "./components/OrderSummary";
import PromoCode from "./components/PromoCode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import wishlistStore from "stores/wishlistStore";

const ShoppingCart = observer(() => {
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    cartStore.getCart();
  }, []);

  useEffect(() => {
    const originalSubtotal = cartStore.calculateSubtotal();
    setSubtotal(originalSubtotal);
  }, [cartStore.cart]);

  if (!cartStore.cart || !cartStore.cart.products) {
    return <Typography>Loading cart...</Typography>;
  }

  const hasItemsInCart = cartStore.cart.products.length > 0;

  const handleCheckout = () => {
    navigate("/secure/checkout/login");
  };

  const handleContinueShopping = () => {
    navigate("/home");
  };

  const handleRemoveFromCart = async (item) => {
    await cartStore.removeFromCart(
      item.product._id,
      item.quantity,
      item.variant
    );
    cartStore.getCart();
  };

  const handleMoveToWishlist = async (item) => {
    await wishlistStore.addToWishlist(item.product._id, item.variant);
    cartStore.getCart();
  };

  const handleQuantityChange = (event, item) => {
    const newQuantity = event.target.value;
    // cartStore.updateQuantity(item.product._id, newQuantity, item.variant);
  };

  const handleSizeChange = (event, item) => {
    const newSize = event.target.value;
    // cartStore.updateSize(item.product._id, newSize, item.variant);
  };

  return (
    <div style={{ marginTop: 20, marginLeft: -2 }}>
      <Breadcrumbs
        separator="/"
        aria-label="breadcrumb"
        sx={{ fontSize: "14px", mb: 2, ml: 8 }}
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
        <Typography sx={{ color: "#000", fontWeight: "500" }}>Cart</Typography>
      </Breadcrumbs>
      <Box sx={{ padding: 4, maxWidth: "1600px", margin: "0 auto" }}>
        <Grid container spacing={4}>
          {/* Basket Section */}
          <Grid item xs={12} md={7}>
            <Typography variant="h5" gutterBottom>
              YOUR BASKET ({hasItemsInCart ? cartStore.cart.products.length : 0}
              )
            </Typography>
            {hasItemsInCart ? (
              cartStore.cart.products.map((item) => (
                <Card
                  sx={{
                    display: "flex",
                    mb: 2,
                  }}
                  key={item._id}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 200,
                      height: 250,
                      objectFit: "cover",
                      margin: 1,
                    }}
                    image={`${BASE_URL}${item.product.images[0]}`}
                    alt={item.product.name}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                      }}
                    >
                      {item.product.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#555",
                        mb: 1,
                      }}
                    >
                      Colour: <strong>{item.variant.color || "N/A"}</strong>
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: item.stock > 0 ? "green" : "green",
                        mb: 2,
                      }}
                    >
                      {"In Stock"}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        mt: 1,
                        fontWeight: "bold",
                      }}
                    >
                      Rs.{item.price}
                    </Typography>
                  </CardContent>

                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: 2,
                        mt: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{ mb: 0.5, fontSize: "14px" }}
                        >
                          Size
                        </Typography>
                        <Select
                          value={item.variant.size || ""}
                          onChange={(event) => handleSizeChange(event, item)}
                          size="small"
                          sx={{
                            mb: 3,
                            width: "160px",
                            height: "45px",
                            border: "2px solid black",
                            borderRadius: 0,
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "black",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "black",
                            },
                          }}
                        >
                          {item.product.sizes.map((size) => (
                            <MenuItem key={size} value={size}>
                              {size}
                            </MenuItem>
                          ))}
                        </Select>

                        <Typography
                          variant="body2"
                          sx={{ mb: 0.5, fontSize: "14px" }}
                        >
                          Quantity
                        </Typography>
                        <Select
                          value={item.quantity}
                          onChange={(event) =>
                            handleQuantityChange(event, item)
                          }
                          size="small"
                          sx={{
                            mb: 3,
                            width: "160px",
                            height: "45px",
                            border: "2px solid black",
                            borderRadius: 0,
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "black",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "black",
                            },
                          }}
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <MenuItem key={num} value={num}>
                              {num}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        justifyContent: "flex-start",
                        mt: 2,
                      }}
                    >
                      <MuiLink
                        onClick={() => handleMoveToWishlist(item)}
                        sx={{
                          cursor: "pointer",
                          color: "#000",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Move to Wishlist
                      </MuiLink>
                      <MuiLink
                        onClick={() => handleRemoveFromCart(item)}
                        sx={{
                          cursor: "pointer",
                          color: "#000",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Remove
                      </MuiLink>
                    </Box>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography variant="h6" sx={{ mb: 2 }}>
                Your cart is empty.
              </Typography>
            )}
            <Button
              variant="contained"
              onClick={handleContinueShopping}
              sx={{ mt: 2, backgroundColor: "#000", color: "#fff" }}
            >
              Continue Shopping
            </Button>
          </Grid>

          {/* Summary Section */}
          {hasItemsInCart && (
            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  padding: 3,
                }}
              >
                <OrderSummary subtotal={subtotal} />
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, backgroundColor: "#000", color: "#fff" }}
                  startIcon={<ShoppingCartIcon />}
                  onClick={handleCheckout}
                >
                  Checkout Securely
                </Button>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <PromoCode />
              </Card>
            </Grid>
          )}
        </Grid>
      </Box>
    </div>
  );
});

export default ShoppingCart;
