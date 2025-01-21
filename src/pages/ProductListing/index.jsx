import React, { useEffect, useState } from "react";
import "./styles.css";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PartywearPage from "pages/HomePage/components/PartyWear";
import { observer } from "mobx-react";
import productStore from "stores/productStore";

const BASE_URL = "http://localhost:8000";

const ProductListing = observer(() => {
  const navigate = useNavigate();
  const { getProductList, productList } = productStore;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <PartywearPage />
      <div style={{ padding: "20px", marginLeft: "120px" }}>
        <Grid container spacing={3}>
          {productList && productList.length > 0 ? (
            productList.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={product._id}>
                <Card
                  elevation={0}
                  style={{
                    position: "relative",
                    boxShadow: "none",
                    overflow: "hidden",
                    cursor: "pointer",
                    height: "600px",
                  }}
                  className="product-card"
                  onClick={() => navigate(`/product-details/${product._id}`)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "150%",
                    }}
                  >
                    {loading && (
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <CircularProgress size={24} />
                      </div>
                    )}

                    <CardMedia
                      component="img"
                      image={
                        hoveredIndex === index && product.images[1]
                          ? `${BASE_URL}${product.images[1]}`
                          : `${BASE_URL}${product.images[0]}`
                      }
                      alt={product.name || "Product Image"}
                      className="primary-image"
                      onLoad={handleImageLoad}
                    />
                    <div className="hover-text">
                      <Typography variant="body1">Quick View</Typography>
                    </div>
                  </div>
                </Card>
                <CardContent>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{ fontWeight: 500, marginBottom: "5px" }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{ fontWeight: 400 }}
                  >
                    ${product.price}
                  </Typography>
                </CardContent>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" align="center">
              No products available.
            </Typography>
          )}
        </Grid>
      </div>
    </>
  );
});

export default ProductListing;
