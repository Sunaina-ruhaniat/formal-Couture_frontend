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
import { Link } from "react-router-dom";
import orderStore from "stores/orderStore"; // Adjust path if necessary

const AdminOrderPage = observer(() => {
  useEffect(() => {
    orderStore.getAllOrders(); // Fetch orders when page loads
  }, []);

  if (orderStore.isLoading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20%" }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="container">
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
        <Typography
          variant="h4"
          style={{
            fontWeight: "bold",
            color: "#2C3E50",
            marginBottom: "30px",
            fontSize: "32px",
          }}
        >
          Admin Orders
        </Typography>

        {/* Order List */}
        <Grid container spacing={4}>
          {orderStore.orders && orderStore.orders.length > 0 ? (
            orderStore.orders.map((order) => (
              <Grid item xs={12} sm={6} md={3} key={order._id}>
                <Card
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "15px",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                    padding: "20px",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      style={{
                        color: "#34495E",
                        marginBottom: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Order #{order._id}
                    </Typography>
                    <Typography variant="body2" style={{ color: "#7F8C8D" }}>
                      Customer: {order.customerName}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ color: "#7F8C8D", marginTop: "8px" }}
                    >
                      Total: ${order.totalAmount}
                    </Typography>
                    <Button
                      component={Link}
                      to={`/admin/orders/${order._id}`}
                      style={{
                        marginTop: "15px",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        textTransform: "none",
                        fontWeight: "600",
                        borderRadius: "8px",
                        backgroundColor: "#000",
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "black",
                          border: "1px solid black",
                        },
                      }}
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
              style={{
                width: "100%",
                marginTop: "50px",
                color: "#999",
                fontWeight: "bold",
              }}
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
