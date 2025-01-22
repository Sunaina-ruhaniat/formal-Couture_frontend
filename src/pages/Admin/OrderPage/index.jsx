import React, { useEffect } from "react";
import { observer } from "mobx-react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Divider,
} from "@mui/material";
import "./styles.css";
import { Link } from "react-router-dom";
import orderStore from "stores/orderStore"; // Adjust path if necessary

const AdminOrderPage = observer(() => {
  useEffect(() => {
    orderStore.getAllOrders(); // Fetch orders when page loads
  }, []);

  // if (orderStore.isLoading) {
  //   return <CircularProgress />;
  // }

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <Typography variant="h6">Browse by</Typography>
        <Divider sx={{ marginTop: "10px", width: "200px" }} />
        <Link to="/admin-page">Dashboard</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/orders">Orders</Link>
      </div>

      {/* Main Content */}
      <div style={{ padding: "20px", marginLeft: "120px" }}>
        <Typography variant="h4" className="font-semibold mb-8 text-gray-800">
          Admin Orders
        </Typography>

        {/* Order List */}
        <Grid container spacing={4}>
          {orderStore.orders && orderStore.orders.length > 0 ? (
            orderStore.orders.map((order) => (
              <Grid item xs={12} sm={6} md={3} key={order._id}>
                <Card className="bg-white shadow-xl rounded-lg p-6">
                  <CardContent>
                    <Typography variant="h6" className="text-gray-500 mb-2">
                      Order #{order._id}
                    </Typography>
                    <Typography variant="body2" className="text-gray-700">
                      Customer: {order.customerName}
                    </Typography>
                    <Typography variant="body2" className="text-gray-700">
                      Total: ${order.totalAmount}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      component={Link}
                      to={`/admin/orders/${order._id}`}
                      style={{ marginTop: "10px" }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography
              variant="h6"
              align="center"
              style={{ width: "100%", marginTop: "50px" }}
            >
              No orders available.
            </Typography>
          )}
        </Grid>
      </div>
    </div>
  );
});

export default AdminOrderPage;
