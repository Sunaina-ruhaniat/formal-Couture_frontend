import React from "react";
import { Box, Typography } from "@mui/material";

const AboutUsPage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={5}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 1200,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          color="#000"
          fontWeight="semibold"
          letterSpacing={4}
          sx={{ textAlign: "center", marginBottom: 3 }}
        >
          OUR STORY
        </Typography>

        {/* Mission */}
        <Box
          sx={{
            padding: 3,
            marginBottom: 4,
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Mission
            </Typography>
            <Typography variant="body1" color="textSecondary">
              To empower individuals through the transformative power of
              clothing, fostering confidence and self-expression with our
              curated collection.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <img
              src="/assets/images/IMG_4838.JPG" // Replace with an actual image URL
              alt="Mission"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Box>

        {/* Vision */}
        <Box
          sx={{
            padding: 3,
            marginBottom: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Vision
            </Typography>
            <Typography variant="body1" color="textSecondary">
              To establish ourselves as the ultimate choice for Workwear
              enthusiasts, driving trends and inspiring individuals, all while
              ensuring unparalleled customer satisfaction.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <img
              src="/assets/images/IMG_4838.JPG" // Replace with an actual image URL
              alt="Vision"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Box>

        {/* Brand Story */}
        <Box
          sx={{
            padding: 3,
            marginBottom: 4,
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Brand Story
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Formal Couture was born out of a desire to address a persistent
              challenge faced by modern women—finding workwear that blends
              style, functionality, and accessibility. The daily struggle of
              choosing between professional attire that looks polished but feels
              uncomfortable, or pieces that are practical but lack
              sophistication, led to the creation of this brand. The purpose
              behind Formal Couture is to offer a solution: a curated collection
              of high-quality, versatile office wear that meets the demands of
              today’s working woman.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <img
              src="/assets/images/IMG_4838.JPG" // Replace with an actual image URL
              alt="Brand Story"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Box>

        {/* Origin of Brand Name */}
        <Box
          sx={{
            padding: 3,
            marginBottom: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Origin of Brand Name
            </Typography>
            <Typography variant="body1" color="textSecondary">
              The name Formal Couture perfectly encapsulates the essence of the
              brand. "Formal" reflects the focus on creating polished,
              professional attire tailored for the working woman, while
              "Couture" brings in the idea of high-quality, thoughtfully
              designed garments with a touch of elegance. Together, the name
              signifies a blend of sophistication and functionality— elevating
              traditional office wear to something more refined and expressive.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <img
              src="/assets/images/IMG_4838.JPG" // Replace with an actual image URL
              alt="Origin of Brand Name"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsPage;
