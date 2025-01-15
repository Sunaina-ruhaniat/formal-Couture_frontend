import React, { useState } from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LimitedEdition from "./LimitedEdition";
import EvergreenClassics from "./EvergreenClassics";

const CarouselComponent = ({ imagesRight = true }) => {
  const [showLeftContent, setShowLeftContent] = useState(true); // Track which content to show

  const images = [
    "/assets/images/IMG_4809.JPG",
    "/assets/images/IMG_4977.JPG",
    "/assets/images/IMG_5017.JPG",
    "/assets/images/IMG_5039.JPG",
  ];

  // Custom Arrow Component
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <Box
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          left: "-30px",
          transform: "translateY(-50%)",
          zIndex: 2,
          cursor: "pointer",
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
          right: "-30px",
          transform: "translateY(-50%)",
          zIndex: 2,
          cursor: "pointer",
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
          xs: "column",
          md: imagesRight ? "row" : "row-reverse",
        },
        alignItems: "center",
        justifyContent: "center",
        my: 6,
        px: 2,
        width: "100%", // Ensure it takes full width on smaller screens
        margin: "0 auto", // Center content on large screens
      }}
    >
      {/* Conditionally render content sections */}
      {showLeftContent ? <LimitedEdition /> : <EvergreenClassics />}

      {/* Carousel Section */}
      <Box
        sx={{
          maxWidth: "800px",
          mt: { xs: 4, md: 0 },
          position: "relative",
          width: "100%", // Ensure the carousel takes full width
          maxWidth: "1200px", // Limit the carousel width on larger screens
        }}
      >
        <Slider {...settings}>
          {images.map((src, index) => (
            <Box key={index} sx={{ textAlign: "center", px: 1 }}>
              <img
                src={src}
                alt={`Limited Edition ${index + 1}`}
                style={{
                  width: "100%",
                  maxHeight: "auto", // Limit the image height
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default CarouselComponent;
