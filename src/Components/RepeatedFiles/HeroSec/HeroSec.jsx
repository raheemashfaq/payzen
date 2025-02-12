import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const HeroSec = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(/Assets/bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        padding: { xs: "50px 0", md: "20px 0" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "60px" },
              color: "#11243F",
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" }, // Centered text on mobile
            }}
          >
            Safe & Hassle-Free
            <br /> Payment Collections
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "25px",
              color: "#11243F",
              textAlign: { xs: "center", md: "left" },
              marginTop: 2,
            }}
          >
            PayZen provides streamlined payment management with a unified
            dashboard, enabling businesses to collect payments effortlessly by
            creating digital invoices and facilitating both online and in-person
            payment collection.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 2,
              marginTop: 3,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "#11243F",
                borderRadius: "30px",
                fontSize: { xs: "1rem", md: "1.25rem" },
                padding: { xs: "6px 12px", md: "12px 24px" },
                border: "1px solid #11243F",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#11243F",
                  color: "#fff",
                },
              }}
            >
              Get Started
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1253A4",
                color: "#FFFFFF",
                borderRadius: "30px",
                fontSize: { xs: "1rem", md: "1.25rem" },
                padding: { xs: "6px 12px", md: "12px 24px" },
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#0F3C73",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img
            src="/Assets/left_hero.png"
            alt="Hero"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSec;
