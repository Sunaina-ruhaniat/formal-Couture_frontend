import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { TextFieldstyle } from "components/Theme";

const Footer = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Box sx={{ color: "#333" }}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.40rem",
                  mb: 2,
                }}
              >
                SIGN UP FOR 5% OFF*
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, maxWidth: "600px" }}>
                Unlock exclusive perks and be the first to know about exciting
                news and special offers! Plus, enjoy 5% off your first
                full-priced order when you sign up. Make the most of your
                shopping experience—subscribe now and never miss a thing. By
                signing up, you agree to receive our updates and accept our{" "}
                <Link href="#" sx={{ textDecoration: "underline" }}>
                  Privacy Policy.
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                *Terms and Conditions apply
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  alignItems: "center",
                }}
              >
                <TextField
                  variant="outlined"
                  placeholder="Your email address"
                  fullWidth
                  sx={{
                    bgcolor: "white",
                    maxWidth: "400px",
                    mr: 1,
                    ...TextFieldstyle,
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    fontSize: "18px",
                    height: 54,
                    width: "200px",
                    "&:hover": { bgcolor: "#ffffff", color: "black" },
                    borderRadius: "0px",
                  }}
                >
                  SIGN UP
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#F7F7F7", py: 5, mt: 5 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.20rem",
                  mb: 2,
                }}
              >
                Customer Care
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="/faq" color="inherit" underline="none">
                  FAQs
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="/contact-us" color="inherit" underline="none">
                  Contact Us
                </Link>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.20rem",
                  mb: 2,
                }}
              >
                Shopping With Us
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="/exchange-policy" color="inherit" underline="none">
                  Exchange Policy
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="/delievry-policy" color="inherit" underline="none">
                  Shipping and Delivery Policy
                </Link>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.20rem",
                  mb: 2,
                }}
              >
                Legal
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link
                  href="/terms-and-conditions"
                  color="inherit"
                  underline="none"
                >
                  Terms and Conditions
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="/privacy-policy" color="inherit" underline="none">
                  Privacy Policy
                </Link>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.20rem",
                  mb: 2,
                }}
              >
                About Us
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="/our-story" color="inherit" underline="none">
                  Our Story
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="/referral-program" color="inherit" underline="none">
                  Referral Program
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
