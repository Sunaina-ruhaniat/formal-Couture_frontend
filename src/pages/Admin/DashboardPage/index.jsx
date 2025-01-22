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
import axios from "axios";
import { observer } from "mobx-react";
import "./styles.css";
import ProductForm from "../ProductPage/components/ProductForm";
import productStore from "stores/productStore";

const AdminDashboard = observer(() => {
  const [addProduct, setAddProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });

  const navigate = useNavigate();

  // Fetching the overview stats (this could be fetched from an API)
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/admin/stats"); // Example API endpoint for stats
        setStats(response.data); // Assuming response.data has the stats
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
        <Typography variant="h6">Browse by</Typography>
        <Divider sx={{ marginTop: "10px", width: "200px" }} />
        <Link to="/admin-page">Dashboard</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/orders">Orders</Link>
      </div>

      {/* Main Content (Right) */}
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Grid container spacing={3}>
              {/* Total Users Card */}
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="textSecondary">
                      Total Users
                    </Typography>
                    <Typography variant="h4" color="primary">
                      {stats.totalUsers}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Total Products Card */}
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="textSecondary">
                      Total Products
                    </Typography>
                    <Typography variant="h4" color="primary">
                      {stats.totalProducts}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Total Orders Card */}
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="textSecondary">
                      Total Orders
                    </Typography>
                    <Typography variant="h4" color="primary">
                      {stats.totalOrders}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Total Revenue Card */}
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="textSecondary">
                      Total Revenue
                    </Typography>
                    <Typography variant="h4" color="primary">
                      ${stats.totalRevenue}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Recent Orders */}
            <Box mt={5}>
              <Typography variant="h6" gutterBottom>
                Recent Orders
              </Typography>
              <Grid container spacing={3}>
                {/* Example order list (this could be dynamic data) */}
                <Grid item xs={12} sm={6} md={3}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">Order ID: 12345</Typography>
                      <Typography variant="body2">
                        Customer: John Doe
                      </Typography>
                      <Button
                        onClick={() => navigate("/order-details/12345")}
                        variant="outlined"
                        sx={{ marginTop: "10px" }}
                      >
                        View Order
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                {/* Add more orders here */}
              </Grid>
            </Box>

            {/* Quick Actions */}
            <Box mt={5}>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
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
                    onClick={() => navigate("/admin/orders")}
                  >
                    Manage Orders
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Box>
      {addProduct && (
        <ProductForm
          product={addProduct}
          onClose={() => setAddProduct(null)}
          onSave={productStore.saveProduct} // Assuming you have a saveProduct method in the store
        />
      )}
    </div>
  );
});

export default AdminDashboard;
