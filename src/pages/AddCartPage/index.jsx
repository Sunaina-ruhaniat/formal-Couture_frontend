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
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import cartStore from "stores/cartStore"; // Import the cartStore
import { observer } from "mobx-react";
import OrderSummary from "./components/OrderSummary";
import PromoCode from "./components/PromoCode";

const ShoppingCart = observer(() => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(2);
  const [promoCode, setPromoCode] = useState("");
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  const handleCheckout = () => {
    // Redirect user to Checkout page
    navigate("/checkout");
  };

  const handleContinueShopping = () => {
    // Redirect user to the home page
    navigate("/home");
  };

  useEffect(() => {
    // Fetch the cart data on component mount
    cartStore.getCart();
  }, []);

  // Check if the cart is loaded
  if (!cartStore.cart || !cartStore.cart.products) {
    return <Typography>Loading cart...</Typography>;
  }

  // Calculate subtotal
  const subtotal = cartStore.cart.products.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const hasItemsInCart = cartStore.cart.products.length > 0;

  const handleQuantityChange = async (event, item) => {
    const newQuantity = event.target.value;

    // Call the updateQuantity method from cartStore
    await cartStore.updateQuantity(item._id, newQuantity, item.variant);
  };

  const handleRemoveFromCart = async (item) => {
    // Call the existing removeFromCart function to remove the item
    await cartStore.removeFromCart(item._id);
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
        <Typography sx={{ color: "#000", fontWeight: "500" }}>Cart</Typography>
      </Breadcrumbs>
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={4}>
          {/* Basket Section */}
          <Grid item xs={12} md={7}>
            <Typography variant="h5" gutterBottom>
              YOUR BASKET ({hasItemsInCart ? cartStore.cart.products.length : 0}
              )
            </Typography>
            {hasItemsInCart ? (
              cartStore.cart.products.map((item) => (
                <Card sx={{ display: "flex", mb: 2 }} key={item._id}>
                  <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image={item.product.images[0]} // Display the first image
                    alt={item.product.name}
                  />
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography variant="h6">{item.product.name}</Typography>
                    <Typography variant="body2">
                      Colour: <strong>{item.variant.color || "N/A"}</strong>
                    </Typography>
                    <Typography variant="body2">
                      Size: <strong>{item.variant.size}</strong>
                    </Typography>
                    <Typography variant="body2">In Stock</Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      £{item.price}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                      <Select
                        value={item.quantity}
                        onChange={(event) => handleQuantityChange(event, item)}
                        size="small"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <MenuItem key={num} value={num}>
                            {num}
                          </MenuItem>
                        ))}
                      </Select>
                      <Button
                        variant="outlined"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        Remove
                      </Button>
                      <Button variant="outlined">Move to Wishlist</Button>
                    </Box>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography variant="h6" sx={{ mb: 2 }}>
                Your cart is empty.
              </Typography>
            )}
            {/* Button to continue shopping */}
            <Button
              variant="contained"
              onClick={handleContinueShopping}
              sx={{ mt: 2 }}
            >
              Continue Shopping
            </Button>
          </Grid>

          {/* Summary Section */}
          {hasItemsInCart && (
            <Grid item xs={12} md={5}>
              <Card sx={{ padding: 3 }}>
                <OrderSummary subtotal={subtotal} />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                  startIcon={<ShoppingCartIcon />}
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
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
