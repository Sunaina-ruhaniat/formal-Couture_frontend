import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={5}>
      <Box sx={{ width: "100%", maxWidth: 1200 }}>
        {/* FAQ Header */}
        <Typography
          variant="h3"
          gutterBottom
          color="primary"
          sx={{ textAlign: "center", marginBottom: 3 }}
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          sx={{ marginBottom: 4 }}
        >
          Before reaching out, you might find your answer in our FAQ section.
          We’ve covered many common queries there. If you don’t find what you’re
          looking for, feel free to reach out to us!
        </Typography>

        {/* FAQ Section */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box>
              {/* Each Accordion Item */}
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography variant="h6">
                    What payment methods do you accept?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="textSecondary">
                    We accept multiple payment options, including credit/debit
                    cards, net banking, UPI, and popular wallets like Paytm and
                    PhonePe. All payments are secure and encrypted.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography variant="h6">
                    Is it safe to make payments on your website?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="textSecondary">
                    Absolutely! We use secure payment gateways and encrypt all
                    transactions to protect your personal and payment
                    information.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography variant="h6">
                    Can I pay via Cash on Delivery (COD)?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="textSecondary">
                    Yes, we offer the convenience of Cash on Delivery (COD) for
                    select locations. If COD is available in your area, you will
                    see the option during checkout. Please note that a small
                    convenience fee of INR 100 may apply for COD orders.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                >
                  <Typography variant="h6">
                    Can I use multiple payment methods for one purchase?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="textSecondary">
                    Currently, we only support one primary payment method per
                    order. However, you can combine other options like referral
                    points or wallet balance for partial payment.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5d-content"
                  id="panel5d-header"
                >
                  <Typography variant="h6">
                    How long does it take to process and deliver an order?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="textSecondary">
                    Orders are typically processed and dispatched within 2-3
                    business days of payment confirmation. Delivery timelines
                    vary based on location, with most orders arriving within
                    5-10 business days.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6d-content"
                  id="panel6d-header"
                >
                  <Typography variant="h6">Can I cancel my order?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="textSecondary">
                    We’re sorry, but cancellations are not allowed once the
                    order is placed and payment is complete. Please double-check
                    your order details before confirming your purchase.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* More FAQ items */}
              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel7d-content"
                  id="panel7d-header"
                >
                  <Typography variant="h6">
                    What is your exchange policy?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="textSecondary">
                    We offer exchanges for size or style within 5-20 days
                    depending on the product condition and applicable policies.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Add other FAQ items as needed */}
            </Box>
          </Grid>
        </Grid>

        {/* Footer Section */}
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          sx={{ marginTop: 5 }}
        >
          We hope this FAQ answers your queries! If not, don’t hesitate to get
          in touch—we’re always here to assist.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 3 }}
          href="mailto:theformalcouture@gmail.com"
        >
          Contact Support
        </Button>
      </Box>
    </Box>
  );
};

export default FAQPage;
