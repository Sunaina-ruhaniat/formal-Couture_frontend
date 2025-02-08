import React from "react";
import { Box, Typography, Paper, Button, Grid } from "@mui/material";
import {
  Email,
  Phone,
  Instagram,
  Facebook,
  LinkedIn,
} from "@mui/icons-material";

const ContactUsPage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={5}>
      <Box sx={{ width: "100%", maxWidth: 1200 }}>
        {/* Header Section */}
        <Typography
          variant="h3"
          gutterBottom
          color="#000"
          fontWeight="semibold"
          sx={{ textAlign: "center", marginBottom: 3 }}
        >
          Contact Us
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          sx={{ marginBottom: 4 }}
        >
          We’re Here for You! At Formal Couture, your satisfaction is our top
          priority, and we’re always happy to assist with any questions,
          feedback, or concerns you may have.
        </Typography>

        {/* Get in Touch Section */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Whether it’s about your order, product details, or styling tips, our
            team is ready to assist you.
          </Typography>
        </Paper>

        {/* Contact Details Section */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ marginBottom: 4 }}
        >
          {/* Email Section */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 3, display: "flex", alignItems: "center" }}>
              <Email sx={{ fontSize: 40, marginRight: 2 }} />
              <Box>
                <Typography variant="h6">Email Us</Typography>
                <Typography variant="body1" color="textSecondary">
                  Drop us a message anytime at{" "}
                  <a href="mailto:theformalcouture@gmail.com">
                    theformalcouture@gmail.com
                  </a>
                  . We aim to respond within 24-48 hours.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Phone Section */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 3, display: "flex", alignItems: "center" }}>
              <Phone sx={{ fontSize: 40, marginRight: 2 }} />
              <Box>
                <Typography variant="h6">Call Us</Typography>
                <Typography variant="body1" color="textSecondary">
                  Speak with our customer care team at{" "}
                  <a href="tel:+919999999999">+91-9999999999</a> (available
                  Monday to Saturday, 10:00 AM – 6:00 PM).
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 3, display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6">Connect on Social Media</Typography>
                <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://www.instagram.com"
                    target="_blank"
                    startIcon={<Instagram />}
                  >
                    Instagram
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://www.facebook.com"
                    target="_blank"
                    startIcon={<Facebook />}
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://www.linkedin.com"
                    target="_blank"
                    startIcon={<LinkedIn />}
                  >
                    LinkedIn
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Footer */}
        <Typography variant="body1" color="textSecondary" align="center">
          We look forward to hearing from you and providing the best shopping
          experience possible!
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactUsPage;
