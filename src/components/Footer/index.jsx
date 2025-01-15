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

const Footer = () => {
  return (
    <Box sx={{ mt: 5 }}>
      {/* Sign Up Section */}
      <Box
        sx={{
          bgcolor: "#DAD4CC",
          py: 5,
          color: "#333",
        }}
      >
        <Container>
          <Grid container spacing={3} alignItems="center">
            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", letterSpacing: "0.1em", mb: 2 }}
              >
                SIGN UP FOR 10% OFF*
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, maxWidth: "600px" }}>
                Be first to hear about news and offers, plus as a new customer
                you can enjoy 10% off your first full-priced order. By signing
                up you agree we will send you marketing updates and accept our{" "}
                <Link href="#" sx={{ textDecoration: "underline" }}>
                  Privacy Policy.
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                *Terms and Conditions apply
              </Typography>
            </Grid>

            {/* Email Sign-Up Form */}
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
                    borderRadius: "4px",
                    maxWidth: "400px",
                    mr: 1,
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#333",
                    color: "white",
                    px: 3,
                    fontWeight: "bold",
                    "&:hover": { bgcolor: "#555" },
                  }}
                >
                  SIGN UP
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer Links */}
      <Box
        sx={{
          bgcolor: "#F7F7F7",
          py: 5,
          mt: 5,
        }}
      >
        <Container>
          <Grid container spacing={3}>
            {/* Customer Care */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Customer Care
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  FAQs
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Track Your Order (UK)
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Track Your Order (International)
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Delivery
                </Link>
              </Typography>
            </Grid>

            {/* Shopping With Us */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Shopping With Us
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Find a Store
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Newsletter Sign Up
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  My Account
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Size Guide
                </Link>
              </Typography>
            </Grid>

            {/* Legal */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Legal
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Terms and Conditions
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Privacy Policy
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Code of Conduct
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Online Tax Strategy
                </Link>
              </Typography>
            </Grid>

            {/* About Us */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                About Us
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Our Story
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Inclusion & Diversity
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Sustain
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  Careers
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
