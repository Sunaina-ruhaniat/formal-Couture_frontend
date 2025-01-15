import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const ShareWithUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box sx={{ py: 12, px: 6 }}>
      <Typography
        variant="h2"
        align="left"
        style={{
          marginBottom: "40px",
          fontSize: "40px",
          fontFamily:
            "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
          textTransform: "uppercase",
          letterSpacing: "0.55rem",
          lineHeight: "3.25rem",
          color: "#333333",
        }}
      >
        SHARE WITH US #FORMALCOUTURE
      </Typography>

      {/* Image Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 4,
        }}
      >
        {["IMG_5039", "IMG_4809", "IMG_4977", "IMG_5017"].map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              "&:hover img": {
                transform: "scale(1.1)", // Zoom effect
              },
              "&:hover .textOverlay": {
                opacity: 0, // Hide the product name and client name
              },
              "&:hover .shopOverlay": {
                opacity: 1, // Show the "Shop This Style"
              },
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Box sx={{ position: "relative" }}>
              <img
                src={`/assets/images/${item}.JPG`}
                alt={`Item ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.3s ease-in-out", // Smooth zoom
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 60,
                  left: 0,
                  right: 0,
                  padding: "10px",
                  color: "#fff",
                  textAlign: "center",
                  transition: "opacity 0.3s ease-in-out",
                  opacity: hoveredIndex === index ? 0 : 1, // Hide on hover
                }}
                className="textOverlay"
              >
                <Typography
                  variant="body2"
                  style={{
                    fontSize: "18px",
                    fontFamily:
                      "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.40rem",
                    lineHeight: "2rem",
                    color: "#ffffff",
                    fontWeight: "300",
                  }}
                >
                  PRODUCT NAME
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    fontFamily:
                      "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
                    lineHeight: "2rem",
                    color: "#ffffff",
                    fontWeight: "300",
                  }}
                >
                  @clientName
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "10px",
                  color: "#fff",
                  textAlign: "center",
                  opacity: hoveredIndex === index ? 1 : 0, // Show on hover
                  transition: "opacity 0.3s ease-in-out",
                }}
                className="shopOverlay"
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    fontFamily:
                      "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.25rem",
                    lineHeight: "2rem",
                    color: "#ffffff",
                    textDecoration: "underline",
                    fontWeight: "600",
                    marginBottom: "3rem",
                  }}
                >
                  Shop This Style
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ShareWithUs;
