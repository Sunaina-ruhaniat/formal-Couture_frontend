import React from "react";
import { Box, Typography, Button } from "@mui/material";

const BlogSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        marginRight: "5rem",
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src="/assets/images/item6.png" // Replace with the path to your image
        alt="Blog Section"
        sx={{
          flex: 1,
          height: "auto",
          width: "100%",
        }}
      />
      {/* Text Section */}
      <Box sx={{ flex: 1, marginLeft: "5rem" }}>
        <Typography
          variant="caption"
          align="left"
          style={{
            marginBottom: "40px",
            fontSize: "30px",
            fontFamily:
              "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.55rem",
            lineHeight: "3.25rem",
            color: "#333333",
            fontWeight: "300",
          }}
        >
          Caption
        </Typography>
        <Typography
          variant="h4"
          align="left"
          style={{
            marginBottom: "14px",
            fontSize: "36px",
            fontFamily:
              "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
            letterSpacing: "0.05rem",
            lineHeight: "3.25rem",
            color: "#333333",
            fontWeight: "300",
          }}
        >
          Explore the Trendiest Topics in our Blog Section.
        </Typography>
        <Typography
          variant="body1"
          align="left"
          style={{
            marginBottom: "40px",
            fontSize: "18px",
            fontFamily:
              "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
            letterSpacing: "0.05rem",
            lineHeight: "2rem",
            color: "#333333",
            fontWeight: "300",
          }}
        >
          Pair text with an image to focus on your chosen product, collection,
          or blog post. Add details on availability, style, or even provide a
          review.
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
        >
          See Post
        </Button>
      </Box>
    </Box>
  );
};

export default BlogSection;
