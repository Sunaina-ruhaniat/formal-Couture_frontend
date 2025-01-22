// src/pages/admin/AddEditProductPage.js
import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const AddEditProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (productId) {
      // Fetch the product details if editing an existing product
      const fetchProduct = async () => {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      };

      fetchProduct();
    }
  }, [productId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // API call to save the product data
    if (productId) {
      await fetch(`/api/products/${productId}`, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" },
      });
    } else {
      await fetch(`/api/products`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" },
      });
    }

    navigate("/admin/products");
  };

  return (
    <div>
      <Typography variant="h4">
        {productId ? "Edit Product" : "Add New Product"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Name"
              fullWidth
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Price"
              type="number"
              fullWidth
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Category"
              fullWidth
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: "20px" }}
        >
          Save Product
        </Button>
      </form>
    </div>
  );
};

export default AddEditProductPage;
