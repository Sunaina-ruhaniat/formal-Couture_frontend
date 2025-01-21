import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import productStore from "stores/productStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const LimitedEditionCarousel = observer(() => {
  const navigate = useNavigate();
  const { productListByCategory, getProductByCategory } = productStore;
  const category = "limited-edition";
  useEffect(() => {
    getProductByCategory(category);
  }, []);

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <Box
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          cursor: "pointer",
          backgroundColor: "#fff", // White background for the box
          borderRadius: "50%", // Optional: round the box edges
          padding: "8px", // Space around the icon
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Optional: shadow for the box
        }}
      >
        <ArrowBackIosIcon fontSize="large" sx={{ color: "#013220" }} />
      </Box>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <Box
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          right: "-14px", // Adjust the position of the arrow
          transform: "translateY(-50%)",
          zIndex: 2,
          cursor: "pointer",
          backgroundColor: "#fff", // White background for the box
          borderRadius: "50%", // Optional: round the box edges
          padding: "8px", // Space around the icon
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Optional: shadow for the box
        }}
      >
        <ArrowForwardIosIcon fontSize="large" sx={{ color: "#013220" }} />
      </Box>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        justifyContent: "center",
        my: 6,
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "500px",
          textAlign: { xs: "center", md: "left" },
          mb: { xs: 3, md: 0 },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: "40px",
            fontFamily:
              "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.60rem",
            lineHeight: "1rem",
            color: "#00000",
          }}
        >
          LIMITED EDITION
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            mt: 5,
            mb: 2,
            fontFamily:
              "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
            letterSpacing: "0.08rem",
            lineHeight: "1.5rem",
            color: "#555",
          }}
        >
          Reimagined with modern flair, embrace new levels of self-expression
          with our latest arrivals.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "18px",
            padding: "25px 60px",
            backgroundColor: "#b8aaad",
            borderRadius: 0, // Remove border radius
            "&:hover": {
              backgroundColor: "#ffffff",
              color: "#333333", // Change color on hover
            },
            fontFamily:
              "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.40rem",
            lineHeight: "1rem",
            color: "#ffffff", // Default text color
            fontWeight: "600",
          }}
          onClick={() => navigate("/product-list")}
        >
          SHOP LIMITED EDITION
        </Button>
      </Box>

      {/* Carousel Section */}
      <Box
        sx={{
          mt: { xs: 4, md: 0 },
          position: "relative",
          width: "100%", // Ensure the carousel takes full width
          maxWidth: "1200px", // Limit the carousel width on larger screens
        }}
      >
        <Slider {...settings}>
          {productListByCategory[category]?.map((product, index) => (
            <Box key={index} sx={{ textAlign: "center", px: 0.5 }}>
              <img
                src={`http://localhost:8000${product.images[0]}`}
                alt={`Limited Edition ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "auto",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "0px",
                  background:
                    "url(https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif)",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
});

export default LimitedEditionCarousel;
