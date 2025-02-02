import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Paper,
  Breadcrumbs,
  Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SidebarNavigation from "./SidebarNavigation";

const OrderPage = () => {
  const navigate = useNavigate();

  // Sample orders data
  const orders = [
    {
      id: 1,
      items: [
        { name: "Floral Dress", quantity: 2, price: 2500 },
        { name: "Black Heels", quantity: 1, price: 1200 },
      ],
      orderDate: "2025-01-25",
      totalPrice: 6200,
      status: "Delivered",
    },
    {
      id: 2,
      items: [
        { name: "Summer Dress", quantity: 1, price: 1800 },
        { name: "Sunglasses", quantity: 1, price: 800 },
      ],
      orderDate: "2025-01-20",
      totalPrice: 2600,
      status: "Shipped",
    },
    {
      id: 3,
      items: [{ name: "Winter Coat", quantity: 1, price: 3500 }],
      orderDate: "2025-01-10",
      totalPrice: 3500,
      status: "Processing",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
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
      </Breadcrumbs>
      <Container maxWidth="lg" sx={{ display: "flex", marginTop: 5 }}>
        <SidebarNavigation onLogout={handleLogout} />
        <Box sx={{ padding: 3 }}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: 4,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Your Orders
          </Typography>

          {orders.map((order) => (
            <Paper key={order.id} sx={{ marginBottom: 2, padding: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8}>
                  <Typography variant="h6">Order #{order.id}</Typography>
                  <Typography variant="body1">
                    <strong>Order Date:</strong> {order.orderDate}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Status:</strong> {order.status}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Items:</strong>
                  </Typography>
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.quantity} x {item.name} - ₹
                        {item.price * item.quantity}
                      </li>
                    ))}
                  </ul>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <Typography variant="h6">
                    Total: ₹{order.totalPrice}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#000",
                      color: "white",
                      fontSize: "18px",
                      height: "5vh",
                      width: "250px",
                      letterSpacing: "0.2rem",
                      backgroundColor: "#000000",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#ffffff",
                        color: "#333333",
                        letterSpacing: "0.2rem",
                      },
                      marginTop: 1,
                    }}
                  >
                    View Details
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default OrderPage;
