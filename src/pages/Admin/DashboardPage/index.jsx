import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Button,
  CircularProgress,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import "./styles.css";
import ProductForm from "../ProductPage/components/ProductForm";
import productStore from "stores/productStore";
import userStore from "stores/userStore";
import orderStore from "stores/orderStore";

const AdminDashboard = observer(() => {
  const [addProduct, setAddProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);

        await userStore.getUser();
        const totalUsers = userStore.user ? 1 : 0;

        const productsResponse = await productStore.getProductList();
        const totalProducts = productStore?.productList.length || 0;

        const ordersResponse = await orderStore.getAllOrders();
        const totalOrders = orderStore?.orders?.length || 0;

        setStats({
          totalUsers: totalUsers,
          totalProducts: totalProducts,
          totalOrders: totalOrders,
          totalRevenue: 0,
        });
      } catch (error) {
        console.error("Error fetching admin stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

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
          Admin Dashboard
        </Typography>

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
            }}
          >
            <CircularProgress color="primary" size={60} />
          </Box>
        ) : (
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" color="textSecondary">
                      Total Users
                    </Typography>
                    <Typography variant="h4" color="black">
                      {stats.totalUsers}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" color="textSecondary">
                      Total Products
                    </Typography>
                    <Typography variant="h4" color="black">
                      {stats.totalProducts}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" color="textSecondary">
                      Total Orders
                    </Typography>
                    <Typography variant="h4" color="priblackmary">
                      {stats.totalOrders}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" color="textSecondary">
                      Total Revenue
                    </Typography>
                    <Typography variant="h4" color="black">
                      Rs.{stats.totalRevenue}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Box mt={5}>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Recent Orders
              </Typography>
              <Grid container spacing={3}>
                {recentOrders.length > 0 ? (
                  recentOrders.map((order) => (
                    <Grid item xs={12} sm={6} md={3} key={order._id}>
                      <Card sx={{ boxShadow: 3 }}>
                        <CardContent>
                          <Typography variant="h6">
                            Order ID: {order._id}
                          </Typography>
                          <Typography variant="body2">
                            Total Amount: ${order.totalAmount}
                          </Typography>
                          <Button
                            onClick={() =>
                              navigate(`/order-details/${order._id}`)
                            }
                            variant="outlined"
                            sx={{
                              marginTop: "10px",
                              borderColor: "primary.main",
                              color: "primary.main",
                              "&:hover": {
                                backgroundColor: "primary.main",
                                color: "white",
                              },
                            }}
                          >
                            View Order
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ boxShadow: 3 }}>
                      <CardContent>
                        <Typography variant="body1">
                          No recent orders.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
              </Grid>
            </Box>

            <Box mt={5}>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Quick Actions
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      padding: "15px",
                      fontSize: "16px",
                      borderRadius: "8px",
                      backgroundColor: "#000",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "black",
                        border: "1px solid black",
                      },
                    }}
                    onClick={() => setAddProduct({})}
                  >
                    Add Product
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{
                      padding: "15px",
                      fontSize: "16px",
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#000",
                        color: "white",
                      },
                    }}
                    onClick={() => navigate("/admin/orders")}
                  >
                    Manage Orders
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </div>

      {addProduct && (
        <ProductForm
          product={addProduct}
          onClose={() => setAddProduct(null)}
          onSave={productStore.saveProduct}
        />
      )}
    </div>
  );
});

export default AdminDashboard;
