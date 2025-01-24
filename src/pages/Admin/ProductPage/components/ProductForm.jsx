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
  Typography,
  Divider,
} from "@mui/material";
import toast from "react-hot-toast";
import DeleteIcon from "@mui/icons-material/Delete";
import productStore from "stores/productStore";

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
    productCode: "",
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
        productCode: product.productCode || "",
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
      formDataToSend.append("productCode", formData.productCode);

      formData.images.forEach((image) => {
        formDataToSend.append("images", image);
      });

      if (product._id) {
        await productStore.updateProduct(product._id, formDataToSend);
        onSave();
        onClose();
      } else {
        await productStore.createProduct(formDataToSend);
        onSave();
        onClose();
      }
    } catch (error) {
      toast.error("An error occurred while saving the product.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={Boolean(product)} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography
          variant="h6"
          color="textPrimary"
          fontWeight="600"
          sx={{ marginTop: "10px" }}
        >
          {product._id ? "Edit Product" : "Add New Product"}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3} sx={{ marginTop: "6px" }}>
          {/* Product Name */}
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

          {/* Product Price */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              name="price"
              value={formData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          {/* Product Category */}
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

          {/* Product Stock */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Stock"
              variant="outlined"
              fullWidth
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          {/* Sizes */}
          <Grid item xs={12} sm={6}>
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

          {/* Colors */}
          <Grid item xs={12} sm={6}>
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

          {/* Fits */}
          <Grid item xs={12} sm={6}>
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

          {/* Product Code */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Code"
              variant="outlined"
              fullWidth
              name="productCode"
              value={formData.productCode}
              onChange={handleChange}
            />
          </Grid>

          {/* Product Description */}
          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </Grid>

          {/* Image Upload */}
          <Grid item xs={12}>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              style={{
                marginBottom: "10px",
                border: "1px solid #ccc",
                padding: "5px",
              }}
            />
            <Box mt={2}>
              {formData.images.length > 0 &&
                formData.images.map((image, idx) => (
                  <Box
                    key={idx}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                  >
                    <Typography variant="body2">{image.name}</Typography>
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
        <Button onClick={onClose} color="secondary" variant="outlined">
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          color="primary"
          disabled={isLoading}
          variant="contained"
        >
          {isLoading ? <CircularProgress size={24} /> : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductForm;
