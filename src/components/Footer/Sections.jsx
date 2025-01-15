import React from "react";
import { Box, Grid, Typography, TextField, Button, Link } from "@mui/material";

// Footer Component
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 4, px: 2 }}>
      {/* Sign-Up Section */}
      <Box sx={{ bgcolor: "#d9d3c4", p: 4, textAlign: "center", mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          SIGN UP FOR 5% OFF*
        </Typography>
        <Typography variant="body1" gutterBottom>
          Unlock exclusive perks and be the first to know about exciting news
          and special offers! Plus, enjoy 5% off your first full-priced order
          when you sign up. Make the most of your shopping experience—subscribe
          now and never miss a thing.
        </Typography>
        <Typography variant="body2" gutterBottom>
          By signing up, you agree to receive our updates and accept our{" "}
          <Link href="/privacy-policy" underline="hover">
            Privacy Policy
          </Link>
          .
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Your email address"
            sx={{ width: "300px", bgcolor: "#fff" }}
          />
          <Button
            variant="contained"
            sx={{
              ml: 2,
              bgcolor: "#333",
              color: "#fff",
              "&:hover": { bgcolor: "#555" },
            }}
          >
            SIGN UP
          </Button>
        </Box>
      </Box>

      {/* Footer Links */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            CUSTOMER CARE
          </Typography>
          <Box>
            <Link href="/faq" underline="hover" color="inherit" display="block">
              FAQs
            </Link>
            <Link
              href="/exchange-policy"
              underline="hover"
              color="inherit"
              display="block"
            >
              Exchange Policy
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            SHOPPING WITH US
          </Typography>
          <Box>
            <Link
              href="/shipping-policy"
              underline="hover"
              color="inherit"
              display="block"
            >
              Shipping and Delivery Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              underline="hover"
              color="inherit"
              display="block"
            >
              Terms and Conditions
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            LEGAL
          </Typography>
          <Box>
            <Link
              href="/privacy-policy"
              underline="hover"
              color="inherit"
              display="block"
            >
              Privacy Policy
            </Link>
            <Link
              href="/affiliate-program"
              underline="hover"
              color="inherit"
              display="block"
            >
              Affiliate Program
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            ABOUT US
          </Typography>
          <Box>
            <Link
              href="/our-story"
              underline="hover"
              color="inherit"
              display="block"
            >
              Our Story
            </Link>
            <Link
              href="/contact-us"
              underline="hover"
              color="inherit"
              display="block"
            >
              Contact Us
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

// Separate Pages as Components
export const OurStory = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom>
      Our Story
    </Typography>
    <Typography variant="body1" paragraph>
      Formal Couture was born out of a desire to address a persistent challenge
      faced by modern women—finding workwear that blends style, functionality,
      and accessibility. The daily struggle of choosing between professional
      attire that looks polished but feels uncomfortable, or pieces that are
      practical but lack sophistication, led to the creation of this brand.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Mission
    </Typography>
    <Typography variant="body1" paragraph>
      To empower individuals through the transformative power of clothing,
      fostering confidence and self-expression with our curated collection.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Vision
    </Typography>
    <Typography variant="body1" paragraph>
      To establish ourselves as the ultimate choice for Workwear enthusiasts,
      driving trends and inspiring individuals, all while ensuring unparalleled
      customer satisfaction.
    </Typography>
  </Box>
);

export const ExchangePolicy = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom>
      Exchange Policy
    </Typography>
    <Typography variant="body1" paragraph>
      At Formal Couture, your satisfaction is our priority! We understand that
      sometimes things might not fit just right or you may want to try a
      different style. That’s why we’ve designed a simple and customer-friendly
      exchange policy to ensure your shopping experience is as seamless as
      possible.
    </Typography>
    {/* Add more content as needed */}
  </Box>
);

// Add other pages similarly (TermsAndConditions, ShippingPolicy, ContactUs, FAQ)

// Export All Pages
export { Footer, OurStory, ExchangePolicy };
