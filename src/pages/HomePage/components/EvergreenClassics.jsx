import React from "react";
import "./styles.css";
import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const EvergreenClassics = () => {
  const images = [
    "/assets/images/IMG_4809.JPG",
    "/assets/images/IMG_4977.JPG",
    "/assets/images/IMG_5017.JPG",
    "/assets/images/IMG_5039.JPG",
  ];

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
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
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
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <ArrowForwardIosIcon fontSize="large" sx={{ color: "#013220" }} />
      </Box>
    );
  };

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // For larger screens like laptops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For tablets or smaller devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For mobile devices
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
          xs: "column", // Stack vertically on small screens
          md: "row-reverse", // Row reverse on medium and larger screens
        },
        alignItems: "center",
        justifyContent: "center",
        my: 6,
        px: 2,
        width: "100%", // Ensure it takes full width on smaller screens
        margin: "0 auto", // Center content on large screens
      }}
    >
      <Box
        sx={{
          maxWidth: "500px",
          textAlign: { xs: "center", md: "left" },
          mb: { xs: 3, md: 0 },
          ml: { md: 10 },
          px: { xs: 2, md: 0 }, // Padding for smaller screens
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: { xs: "24px", md: "34px" }, // Adjust font size on smaller screens
            fontFamily:
              "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.42rem",
            lineHeight: "1rem",
            color: "#000",
          }}
        >
          EVERGREEN CLASSICS
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", md: "16px" }, // Adjust font size on smaller screens
            mt: 5,
            mb: 2,
            fontFamily:
              "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
            letterSpacing: "0.08rem",
            lineHeight: "1.5rem",
            color: "#555",
          }}
        >
          From tonal suits and work dresses to machine washable blazers,
          discover new perennial pieces for the office and beyond.
        </Typography>
        <Button
          variant="contained"
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
        >
          SHOP WORKWEAR
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
          {images.map((src, index) => (
            <Box key={index} sx={{ textAlign: "center", px: 0.5 }}>
              <img
                src={src}
                alt={`Evergreen Classics ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "auto",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "0px",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default EvergreenClassics;
