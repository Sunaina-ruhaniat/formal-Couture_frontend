import React, { useState } from "react";
import { Typography, Card, CardMedia, Box } from "@mui/material";

const MostLovedStyles = () => {
  const styles = [
    {
      image: "/assets/images/IMG_4809.JPG",
      title: "Livia Wool Coat",
      price: "£379",
    },
    {
      image: "/assets/images/IMG_4977.JPG",
      title: "Petite Cavendish Wool Coat",
      price: "£329",
    },
    {
      image: "/assets/images/IMG_5017.JPG",
      title: "Cavendish Wool Coat",
      price: "£329",
    },
    {
      image: "/assets/images/IMG_5039.JPG",
      title: "Petite Livia Wool Coat",
      price: "£379",
    },
  ];

  const [hovered, setHovered] = useState(null);
  const [hoveredText, setHoveredText] = useState(null); // State to track hover on text

  // Dummy onClick function for "Add to Bag"
  const handleAddToBagClick = () => {
    console.log("Item added to the bag");
  };

  return (
    <div
      style={{ padding: "10px 60px", marginLeft: "40px", marginRight: "40px" }}
    >
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
          fontWeight: "300",
        }}
      >
        Most Loved Styles
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "flex-start",
          overflowX: "auto",
        }}
      >
        {styles.map((style, index) => (
          <div
            key={index}
            style={{
              width: "calc(25% - 16px)",
              minWidth: "250px",
              position: "relative",
            }}
          >
            <Card
              elevation={0}
              style={{
                boxShadow: "none",
                height: "auto",
                position: "relative",
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <CardMedia
                component="img"
                image={style.image}
                alt={style.title}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "0px", // Border radius removed
                }}
              />
              {hovered === index && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    padding: "10px 0",
                    textAlign: "center",
                  }}
                >
                  <div
                    onClick={handleAddToBagClick} // Add the dummy onClick function
                    onMouseEnter={() => setHoveredText(index)} // Change hover state
                    onMouseLeave={() => setHoveredText(null)} // Revert hover state
                    style={{
                      fontSize: "14px",
                      fontFamily:
                        "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.50rem",
                      lineHeight: "1rem",
                      color: hoveredText === index ? "#fff" : "#333333", // Change color on hover
                      fontWeight: "600",
                      cursor: "pointer", // Indicate clickable text
                    }}
                  >
                    Add to Bag
                  </div>
                </div>
              )}
            </Card>
            <div style={{ textAlign: "left", paddingTop: "10px" }}>
              <Typography
                variant="h6"
                style={{
                  fontSize: "16px",
                  fontFamily: "'Proxima Nova', sans-serif",
                  letterSpacing: "1.2px",
                }}
              >
                {style.title}
              </Typography>
              <Typography
                variant="body1"
                style={{
                  fontSize: "16px",
                  fontFamily: "'Proxima Nova', sans-serif",
                  marginTop: "6px",
                  color: "#333333",
                  fontWeight: "600",
                  letterSpacing: "1px",
                }}
              >
                {style.price}
              </Typography>
            </div>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default MostLovedStyles;
