import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const TermsAndConditionsPage = () => {
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
          Terms and Conditions
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          sx={{ marginBottom: 4 }}
        >
          By shopping with us, you agree to the following terms and conditions.
          These policies ensure a smooth and transparent shopping experience for
          everyone.
        </Typography>

        {/* General Section */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            1. General
          </Typography>
          <Typography variant="body1" color="textSecondary">
            These terms apply to all products purchased directly from Formal
            Couture via our official website or authorized platforms.
            <br />
            By placing an order, you acknowledge that you have read, understood,
            and agree to these terms.
          </Typography>
        </Paper>

        {/* Products Section */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            2. Products
          </Typography>
          <Typography variant="body1" color="textSecondary">
            All products displayed are subject to availability. We reserve the
            right to discontinue any item without prior notice.
            <br />
            While we strive to provide accurate product descriptions and images,
            slight variations in color or design may occur due to screen
            differences or manufacturing processes.
          </Typography>
        </Paper>

        {/* Pricing and Payment Section */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            3. Pricing and Payment
          </Typography>
          <Typography variant="body1" color="textSecondary">
            All prices are listed in Indian Rupees (INR) and include applicable
            taxes unless stated otherwise.
            <br />
            Payment must be made in full at the time of order placement. We
            accept multiple payment methods, including credit cards, debit
            cards, and UPI.
          </Typography>
        </Paper>

        {/* Shipping and Delivery Section */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            4. Shipping and Delivery
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Formal Couture delivers to over 17,000 pin codes across India.
            <br />
            Delivery timelines vary by location and are provided as estimates at
            checkout. We are not liable for delays caused by external factors
            such as courier delays or unforeseen circumstances.
            <br />
            Incorrect Address: It is the customer’s responsibility to provide
            accurate delivery details. In cases where an incorrect or incomplete
            address is provided, Formal Couture will not be responsible for
            non-delivery, and no refunds will be issued for the order amount.
          </Typography>
        </Paper>

        {/* Exchange Policy Section */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            5. Exchange Policy
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Products are eligible for exchange only if they meet the outlined
            conditions (under “Additional Information” of Exchange Policy),
            including passing quality checks. Refer to the Exchange Policy,
            which is detailed separately.
          </Typography>
        </Paper>

        {/* Refunds Section */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            6. Refunds
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Refunds in any form are not provided. Products are eligible only for
            exchange in accordance with our Exchange Policy.
          </Typography>
        </Paper>

        {/* Cancellation Section */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            7. Cancellation
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Once an order is placed and payment is completed, cancellations are
            not permitted. We encourage you to review your order carefully
            before completing the purchase.
          </Typography>
        </Paper>

        {/* Limitation of Liability Section */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            8. Limitation of Liability
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Formal Couture is not responsible for any indirect, incidental, or
            consequential damages resulting from the use or inability to use our
            products.
          </Typography>
        </Paper>

        {/* Governing Law Section */}
        <Paper sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            9. Governing Law
          </Typography>
          <Typography variant="body1" color="textSecondary">
            These terms are governed by the laws of India. Any disputes will be
            resolved under the jurisdiction of Indian courts.
          </Typography>
        </Paper>

        {/* Footer Section */}
        <Typography
          variant="body1"
          color="textSecondary"
          align="center"
          sx={{ marginTop: 4 }}
        >
          We value your trust and aim to provide exceptional service. If you
          have any questions, please reach out to us.
          <br />— Team Formal Couture
        </Typography>
      </Box>
    </Box>
  );
};

export default TermsAndConditionsPage;
