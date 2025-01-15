import { Button, Box, Grid, Typography } from "@mui/material";

const GiftSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1400px",
        marginLeft: "10rem",
      }}
    >
      {/* Main Container */}
      <Grid
        container
        spacing={10}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {/* Left Section with Big Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: "12px",
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              "&:hover": {
                boxShadow: "0 18px 36px rgba(0, 0, 0, 0.15)",
                transform: "scale(1.05)",
                transition: "transform 0.3s, box-shadow 0.3s",
              },
            }}
          >
            <img
              src="/assets/images/IMG_4767.JPG"
              alt="Elegant Gift"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Grid>

        {/* Right Section - Small Images in Carousel Style */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Small Images Row */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              overflow: "hidden",
              width: "65rem",
            }}
          >
            {[1, 2, 3].map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: "400px", // Adjusted width for small images
                  height: "480px", // Adjusted height for small images
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <img
                  src={`/assets/images/IMG_5039.JPG`}
                  alt={`Small Image ${item}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Content Section */}
          <Box
            sx={{
              marginRight: "-16rem",
              marginTop: "3rem",
              maxWidth: "120rem",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily:
                  "'Proxima Nova', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "50px",
                lineHeight: "48px",
                letterSpacing: "0.55rem",
                color: "#333333",
                marginBottom: "1.5rem",
              }}
            >
              ELEGANT GIFTS
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily:
                  "'Proxima Nova', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "18px",
                fontWeight: 300,
                lineHeight: "26px",
                color: "#555555",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Treat the special lady in your life to a versatile formal top that
              she can use for regular wear and be reminded of you. Make her feel
              special. She deserves it.
            </Typography>

            {/* Call to Action Text (not a button, styled like text) */}
            <Typography
              variant="body1"
              sx={{
                fontFamily:
                  "'Proxima Nova', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "26px",
                fontWeight: "bold",
                color: "#000000", // Different color to make it stand out
                letterSpacing: "0.1rem",
              }}
            >
              Use Formal Couture's exclusive packaging option at checkout
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GiftSection;
