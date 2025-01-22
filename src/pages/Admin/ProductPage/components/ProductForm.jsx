import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
  IconButton,
  Box,
} from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete"; // For remove image button

const ProductForm = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    images: [],
    stock: "",
    sizes: [],
    colors: [],
    fits: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        description: product.description || "",
        category: product.category || "",
        images: product.images || [],
        stock: product.stock || "",
        sizes: Array.isArray(product.sizes) ? product.sizes : [],
        colors: Array.isArray(product.colors) ? product.colors : [],
        fits: Array.isArray(product.fits) ? product.fits : [],
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleImageRemove = (imageName) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((image) => image.name !== imageName),
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("stock", formData.stock);
      formDataToSend.append("sizes", JSON.stringify(formData.sizes));
      formDataToSend.append("colors", JSON.stringify(formData.colors));
      formDataToSend.append("fits", JSON.stringify(formData.fits));

      // Append images
      formData.images.forEach((image) => {
        formDataToSend.append("images", image);
      });

      if (product) {
        // Update Product
        await axios.put(
          `http://localhost:8000/api/product/update-product/${product._id}`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        toast.success("Product updated successfully!");
      } else {
        // Create Product
        await axios.post(
          "http://localhost:8000/api/product/create-product",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        toast.success("Product created successfully!");
      }
      onSave(); // Notify parent to refresh the list
      onClose(); // Close the form
    } catch (error) {
      toast.error("An error occurred while saving the product");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={Boolean(product)} onClose={onClose}>
      <DialogTitle>{product ? "Edit Product" : "Add New Product"}</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          {/* First Row: Name, Price */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </Grid>

          {/* Second Row: Description, Category */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </Grid>

          {/* Third Row: Stock, Sizes, Colors */}
          <Grid item xs={12} sm={4}>
            <TextField
              label="Stock"
              variant="outlined"
              fullWidth
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Sizes (comma separated)"
              variant="outlined"
              fullWidth
              name="sizes"
              value={formData.sizes.join(", ")}
              onChange={(e) =>
                handleChange({
                  target: { name: "sizes", value: e.target.value.split(",") },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Colors (comma separated)"
              variant="outlined"
              fullWidth
              name="colors"
              value={formData.colors.join(", ")}
              onChange={(e) =>
                handleChange({
                  target: { name: "colors", value: e.target.value.split(",") },
                })
              }
            />
          </Grid>

          {/* Fourth Row: Fits */}
          <Grid item xs={12}>
            <TextField
              label="Fits (comma separated)"
              variant="outlined"
              fullWidth
              name="fits"
              value={formData.fits.join(", ")}
              onChange={(e) =>
                handleChange({
                  target: { name: "fits", value: e.target.value.split(",") },
                })
              }
            />
          </Grid>

          {/* Image Upload */}
          <Grid item xs={12}>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            <Box mt={2}>
              {formData.images.length > 0 &&
                formData.images.map((image, idx) => (
                  <Box key={idx} display="flex" alignItems="center" mb={1}>
                    <span>{image.name}</span>
                    <IconButton
                      color="secondary"
                      onClick={() => handleImageRemove(image.name)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary" disabled={isLoading}>
          {isLoading ? <CircularProgress size={24} /> : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductForm;
