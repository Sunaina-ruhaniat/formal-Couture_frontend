import React from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

// 1. Blog Section Card
export const BlogSectionCard = () => (
  <Card sx={{ display: "flex", alignItems: "center", margin: 2 }}>
    <CardMedia
      component="img"
      sx={{ width: 200, height: 200 }}
      image="https://via.placeholder.com/200" // Replace with your image URL
      alt="Blog Image"
    />
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Explore the Trendiest Topics in our Blog Section.
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Pair text with an image to focus on your chosen product, collection, or
        blog post. Add details on availability, style, or even provide a review.
      </Typography>
      <Button variant="outlined">See Post</Button>
    </CardContent>
  </Card>
);

// 2. Limited Edition Offer Section
// export const LimitedEditionSection = () => (
//   <Box
//     sx={{
//       backgroundImage: "url(https://via.placeholder.com/800x300)", // Replace with your image URL
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       color: "white",
//       textAlign: "center",
//       padding: 4,
//       position: "relative",
//     }}
//   >
//     <Typography variant="h6" gutterBottom>
//       Treat the special lady in your life to a versatile formal top that she can
//       use for regular wear and be reminded of you 😊 Make her feel special! She
//       deserves it.
//     </Typography>
//     <Typography variant="h4" fontWeight="bold" gutterBottom>
//       LIMITED EDITION
//     </Typography>
//     <Typography variant="body1">
//       Use Formal Couture's exclusive packaging option at checkout.
//     </Typography>
//     <Button
//       variant="contained"
//       sx={{ position: "absolute", bottom: 10, right: 10 }}
//     >
//       Back to Top
//     </Button>
//   </Box>
// );

export const LimitedEditionSection = () => {
  return (
    <div style={{ backgroundColor: "#FBF9F5", height: "50rem" }}>
      {/* Main Container */}
      <div
        className="relative max-w-screen-lg mx-auto"
        style={{ marginLeft: "8rem" }}
      >
        {/* Large Image */}
        <div className="relative flex">
          {/* Big Image */}
          <img
            src="/assets/images/item10.png"
            alt="Elegant Gift"
            className="w-full h-auto rounded-lg shadow-xl"
          />

          {/* Overlaying Small Images */}
          <div
            className="transform -translate-y-1/2 flex flex-col"
            style={{ marginTop: "-46rem", marginLeft: "34rem" }}
          >
            {[1, 2, 3].map((item, index) => (
              <img
                key={index}
                src="/assets/images/item4.png"
                alt={`Small ${item}`}
                className="w-24 h-24 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
          {/* Content Section */}
          <div
            className="text-center"
            style={{ marginLeft: "44rem", marginTop: "5rem" }}
          >
            <h5
              style={{
                fontFamily: "Lato",
                letterSpacing: "0.16em",
                marginLeft: "15rem",
                color: "#1B1D31",
                font: "bold",
                fontSize: "16px",
              }}
            >
              LUXURY GIFTING
            </h5>
            <h2
              className="text-4xl font-bold text-gray-800 mt-3"
              style={{
                fontFamily: "Georgia",
                fontSize: "32px",
                lineHeight: "48px",
                letterSpacing: "0.08em",
                marginLeft: "10rem",
              }}
            >
              ELEGANT GIFTS
            </h2>
            <p
              className="text-gray-600 mt-6 px-4 lg:px-40 leading-relaxed"
              style={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "26px",
                textAlign: "center",
                marginLeft: "-5.5rem",
                marginRight: "12rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula
              lectus, convallis sed justo a, eleifend semper diam. Fusce vitae
              ultricies augue.
            </p>

            {/* PrimeReact Button */}
            <Button
              label="Shop Now"
              style={{
                backgroundColor: "#050D52",
                borderColor: "#050D52",
                fontSize: "16px",
                width: "204px",
                height: "56px",
                color: "#F7F7F7",
                marginLeft: "15rem",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Confidence Banner Section
export const ConfidenceBanner = () => (
  <Box
    sx={{
      backgroundColor: "#f5f5f5",
      padding: 4,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      Step into Confidence!
    </Typography>
    <Typography variant="body1" maxWidth="600px" gutterBottom>
      Why settle for ordinary when your workwear can be extraordinary? Formal
      Couture brings you a carefully crafted collection of high-quality and
      versatile formal wear designed to empower today's unstoppable working
      women. By simplifying wardrobe choices, Formal Couture helps women focus
      on what truly matters—showing up as their best selves. Because when you
      feel great, you shine even brighter. Own your style, own your day!
    </Typography>
    <Button variant="contained">Know More</Button>
  </Box>
);
