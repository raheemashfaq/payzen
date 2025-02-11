import { Box, Button, Grid } from "@mui/material";
import React from "react";

const HeroSec = () => {
  return (
    <div>
      <Box
        style={{
          backgroundImage: `url(/Assets/bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "100vh",
          padding: "20px 0",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={12} md={6} className="left">
            <h1 style={{ fontSize: "60px", color: "#11243F" }}>
              Safe & Hassle-Free
              <br /> Payment Collections
            </h1>
            <p
              style={{
                padding: "16px",
                lineHeight: "25px",
                color: "#11243F",
              }}
            >
              PayZen Provides Streamlined Payment Management with a Unified{" "}
              <br />
              Dashboard, Enabling Businesses to Collect Payments Effortlessly by{" "}
              <br />
              Creating Digital Invoices and Facilitating both online and
              in-person <br /> Payment Collection.
            </p>
            <Box className="buttons">
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "transparent",
                  color: "#11243F",
                  borderRadius: "30px",
                  fontSize: "1.25rem",
                  padding: "12px 24px",
                  marginRight: 1,
                  border: "1px solid #11243F",
                }}
              >
                Get Started
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#1253A4",
                  color: "#FFFFFF",
                  borderRadius: "30px",
                  fontSize: "1.25rem",
                  padding: "12px 24px",
                }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{
                width: "100%",
                maxWidth: "583px",
                height: "auto",
              }}
              src="/Assets/left_hero.png"
              alt="Hero"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HeroSec;
