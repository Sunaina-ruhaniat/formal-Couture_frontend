import React from "react";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Divider,
  IconButton,
  Grid,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const ProductPage = () => {
  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: 4 }}>
      {/* Navigation */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Home / New Collection / I'm a product
        </Typography>
        <Box>
          <IconButton>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>

      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src="/assets/images/item1.png"
              alt="Product"
              style={{ width: "100%", borderRadius: "4px" }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <img
              src="/assets/images/item2.png"
              alt="Thumbnail 1"
              style={{ width: "80px", borderRadius: "4px" }}
            />
            <img
              src="/assets/images/item3.png"
              alt="Thumbnail 2"
              style={{ width: "80px", borderRadius: "4px" }}
            />
          </Box>
        </Grid>

        {/* Product Details Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            I'm a product
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            SKU: 0013
          </Typography>
          <Typography variant="h5" sx={{ my: 2 }}>
            $80.00
          </Typography>

          {/* Color Options */}
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Color
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Box
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#555",
                border: "2px solid black",
              }}
            ></Box>
            <Box
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                border: "1px solid black",
              }}
            ></Box>
          </Box>

          {/* Size Dropdown */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Size</InputLabel>
            <Select>
              <MenuItem value="small">Small</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="large">Large</MenuItem>
            </Select>
          </FormControl>

          {/* Quantity Selector */}
          <TextField
            type="number"
            label="Quantity"
            defaultValue={1}
            InputProps={{ inputProps: { min: 1 } }}
            sx={{ width: "100px", mb: 3 }}
          />

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{ py: 1.5, backgroundColor: "black", color: "white" }}
          >
            Add to Cart
          </Button>

          {/* Product Info */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Product Info
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I'm a product detail. I'm a great place to add more information
              about your product such as sizing, material, care and cleaning
              instructions. This is also a great space to write what makes this
              product special and how your customers can benefit from this item.
            </Typography>
          </Box>

          {/* Return & Refund Policy */}
          <Box sx={{ mt: 4 }}>
            <Divider />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Return & Refund Policy
            </Typography>
          </Box>

          {/* Shipping Info */}
          <Box sx={{ mt: 4 }}>
            <Divider />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Shipping Info
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductPage;
