import React, { useEffect } from "react";
import { observer } from "mobx-react";
import {
  CircularProgress,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
  Grid,
} from "@mui/material";
import "../styles.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import orderStore from "stores/orderStore"; // Adjust path if necessary

const OrderDetailsPage = observer(() => {
  const { orderId } = useParams(); // Get orderId from URL
  const navigate = useNavigate();

  useEffect(() => {
    orderStore.getOrderById(orderId); // Fetch order details using orderId
  }, [orderId]);

  if (orderStore.isLoading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20%" }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (!orderStore.selectedOrder) {
    return (
      <Typography variant="h6" align="center" style={{ marginTop: "50px" }}>
        Order not found.
      </Typography>
    );
  }

  const { selectedOrder } = orderStore;
  const { shippingAddress, billingAddress } = selectedOrder;

  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar">
        <Typography variant="h6" color="textPrimary" sx={{ marginBottom: 3 }}>
          Browse by
        </Typography>
        <Divider sx={{ marginTop: "10px", width: "200px" }} />
        <Link to="/admin-page">Dashboard</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/orders">Orders</Link>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          marginLeft: "100px",
          marginTop: "20px",
        }}
      >
        <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" }}>
          Order #{selectedOrder._id}
        </Typography>

        <Card
          style={{
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            borderRadius: "12px",
            marginTop: "60px",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              color="black"
              style={{ fontWeight: "600" }}
            >
              Customer Information
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Name: {selectedOrder.user.name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Email: {selectedOrder.user.email}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Phone: {selectedOrder.user.phone}
            </Typography>

            <Divider sx={{ marginY: "15px" }} />

            <Typography
              variant="h6"
              color="black"
              style={{ fontWeight: "600" }}
            >
              Order Details
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Status: {selectedOrder.status}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Payment Status: {selectedOrder.paymentStatus}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Total Amount: ${selectedOrder.totalAmount}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Final Amount: ${selectedOrder.finalAmount}
            </Typography>

            <Divider sx={{ marginY: "15px" }} />

            {/* Address Section with Grid */}
            <Grid container spacing={3}>
              {/* Shipping Address */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  color="black"
                  style={{ fontWeight: "600" }}
                >
                  Shipping Address:
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {shippingAddress.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {shippingAddress.phone}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {shippingAddress.addressLine1}, {shippingAddress.addressLine2}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {shippingAddress.city}, {shippingAddress.state},{" "}
                  {shippingAddress.country} - {shippingAddress.zipCode}
                </Typography>
              </Grid>

              {/* Billing Address */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  color="black"
                  style={{ fontWeight: "600" }}
                >
                  Billing Address:
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {billingAddress.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {billingAddress.phone}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {billingAddress.addressLine1}, {billingAddress.addressLine2}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {billingAddress.city}, {billingAddress.state},{" "}
                  {billingAddress.country} - {billingAddress.zipCode}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ marginY: "15px" }} />

            {/* Product Details */}
            <Typography
              variant="h6"
              color="black"
              style={{ fontWeight: "600" }}
            >
              Products:
            </Typography>
            {selectedOrder.products.map((product, index) => (
              <div key={index}>
                <Typography variant="body1" color="textSecondary">
                  {product.name} - ${product.price} x {product.quantity}
                </Typography>
              </div>
            ))}

            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/admin/orders")}
              style={{
                marginTop: "60px",
                borderRadius: "8px",
                backgroundColor: "#000",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "black",
                  border: "1px solid black",
                },
                fontWeight: "600",
              }}
            >
              Back to Orders
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});

export default OrderDetailsPage;
