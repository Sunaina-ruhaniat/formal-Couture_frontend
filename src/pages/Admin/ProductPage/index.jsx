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
    setEditingProduct(product);
  };

  const handleDelete = async (productId) => {
    await productStore.deleteProduct(productId);
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
          Admin Product Page
        </Typography>

        {/* Add Product Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setEditingProduct({})}
          style={{
            marginBottom: "20px",
            padding: "10px 20px",
            width: "30rem",
            fontSize: "16px",
            borderRadius: "8px",
            backgroundColor: "#000",
            "&:hover": {
              backgroundColor: "#fff",
              color: "black",
              border: "1px solid black",
            },
          }}
        >
          Add New Product
        </Button>

        <Grid container spacing={4} justifyContent="center">
          {productStore.productsData && productStore.productsData.length > 0 ? (
            productStore.productsData.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={product._id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  className="bg-white shadow-xl rounded-lg"
                  style={{
                    width: "100%",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
                    borderRadius: "10px", // Rounded corners for the card
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      style={{
                        color: "#333", // Darker color for better readability
                        marginBottom: "10px",
                        fontWeight: "600",
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        color: "#666",
                        marginBottom: "20px",
                      }}
                    >
                      Rs.{product.price}
                    </Typography>

                    {/* Edit and Delete Buttons */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          width: "45%",
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
                        onClick={() => handleEdit(product)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{
                          width: "45%",
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
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </Button> */}

                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleEdit(product)}
                        style={{
                          marginTop: "10px",
                          width: "45%",
                          padding: "8px",
                          fontSize: "14px",
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDelete(product._id)}
                        style={{
                          marginTop: "10px",
                          width: "45%",
                          padding: "8px",
                          fontSize: "14px",
                        }}
                      >
                        Delete
                      </Button>
                    </div>
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
