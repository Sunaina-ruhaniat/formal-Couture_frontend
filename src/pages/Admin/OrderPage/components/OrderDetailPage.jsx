import React, { useEffect } from "react";
import { observer } from "mobx-react";
import {
  CircularProgress,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import orderStore from "stores/orderStore"; // Adjust path if necessary

const OrderDetailPage = observer(() => {
  const { orderId } = useParams();

  useEffect(() => {
    orderStore.getOrderById(orderId); // Fetch order details when page loads
  }, [orderId]);

  if (orderStore.isLoading) {
    return <CircularProgress />;
  }

  const order = orderStore.selectedOrder;

  if (!order) {
    return <Typography variant="h6">Order not found.</Typography>;
  }

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="sidebar">
        <Typography variant="h6">Admin Panel</Typography>
        <Link to="/admin-page">Dashboard</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/orders">Orders</Link>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Typography variant="h4" className="font-semibold mb-8 text-gray-800">
          Order #{order._id}
        </Typography>

        <Card className="bg-white shadow-xl rounded-lg p-6">
          <CardContent>
            <Typography variant="h6" className="text-gray-500 mb-2">
              Customer: {order.customerName}
            </Typography>
            <Typography variant="h6" className="text-gray-500 mb-2">
              Status: {order.status}
            </Typography>
            <Typography variant="h6" className="text-gray-500 mb-2">
              Total Amount: ${order.totalAmount}
            </Typography>

            <Typography variant="h6" className="text-gray-500 mb-2">
              Items:
            </Typography>
            <Grid container spacing={2}>
              {order.items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card className="bg-white shadow-md">
                    <CardContent>
                      <Typography variant="body1">
                        {item.productName}
                      </Typography>
                      <Typography variant="body2">
                        Quantity: {item.quantity}
                      </Typography>
                      <Typography variant="body2">
                        Price: ${item.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/admin/orders"
              style={{ marginTop: "20px" }}
            >
              Back to Orders
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});

export default OrderDetailPage;
