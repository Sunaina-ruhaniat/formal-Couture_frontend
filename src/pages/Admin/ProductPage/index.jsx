import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import productStore from "stores/productStore";
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
import ProductForm from "./components/ProductForm";

const BASE_URL = "http://localhost:8000";

const AdminProductPage = observer(() => {
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    productStore.getProductList();
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product); // Open the edit modal or form with selected product
  };

  const handleDelete = async (productId) => {
    await productStore.deleteProduct(productId); // Call delete method from productStore
  };

  if (productStore.isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className="container">
      <div className="sidebar">
        <Typography variant="h6">Browse by</Typography>
        <Divider sx={{ marginTop: "10px", width: "200px" }} />
        <Link to="/admin-page">Dashboard</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/orders">Orders</Link>
      </div>

      {/* Product List */}
      <div style={{ padding: "20px", marginLeft: "120px" }}>
        <Typography variant="h4" className="font-semibold mb-8 text-gray-800">
          Admin Product Page
        </Typography>

        {/* Add Product Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setEditingProduct({})}
        >
          Add New Product
        </Button>
        <Grid container spacing={4} style={{ marginTop: "20px" }}>
          {productStore.productsData && productStore.productsData.length > 0 ? (
            productStore.productsData.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product._id}>
                <Card className="bg-white shadow-xl rounded-lg p-6">
                  <CardContent>
                    <Typography variant="h6" className="text-gray-500 mb-2">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" className="text-gray-700">
                      ${product.price}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEdit(product)}
                      style={{ marginTop: "10px" }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(product._id)}
                      style={{ marginTop: "10px", marginLeft: "10px" }}
                    >
                      Delete
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" align="center" style={{ width: "100%" }}>
              No products available.
            </Typography>
          )}
        </Grid>
      </div>

      {/* Edit Product Form */}
      {editingProduct && (
        <ProductForm
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={productStore.saveProduct} // Assuming you have a saveProduct method in the store
        />
      )}
    </div>
  );
});

export default AdminProductPage;
