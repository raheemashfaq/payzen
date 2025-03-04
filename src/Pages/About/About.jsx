import React from "react";
import HeroSec from "../../Components/RepeatedFiles/HeroSec/HeroSec";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <HeroSec />

      <Box
        component="img"
        src="/Assets/image.png"
        alt="Banner"
        sx={{ height: "177px", width: "100%" }}
      />

      <Container>
        {/* About PayZen Section */}
        <Box sx={{ padding: { xs: "10px", md: "20px" } }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "#11243F", fontWeight: 700 }}
                >
                  About PayZen
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6D6D6D",
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: 400,
                    lineHeight: "26px",
                  }}
                >
                  PayZen came into inception in December 2020 with an idea to
                  facilitate the public by providing a platform for payments of
                  Governmental & Non-Governmental Receipts with ease. It was
                  built to bridge the gap between the Government and the Public,
                  increasing financial inclusion across Pakistan. Punjab IT
                  Board has designed, developed, and implemented the product
                  with sheer dedication so that every citizen of Pakistan has
                  access to formal digital financial services.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/Assets/aboutpayzon.png"
                alt="About PayZen"
                sx={{
                  width: "100%",
                  maxWidth: "589px",
                  height: "auto",
                  borderRadius: "20px",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Vision Section */}
        <Box sx={{ padding: { xs: "10px", md: "20px" } }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/Assets/rightAbout.png"
                alt="Vision"
                sx={{
                  width: "100%",
                  maxWidth: "577px",
                  height: "auto",
                  borderRadius: "20px",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "#11243F", fontWeight: 700 }}
                >
                  Vision
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6D6D6D",
                    fontSize: { xs: "14px", md: "15px" },
                    fontWeight: 400,
                    lineHeight: "26px",
                  }}
                >
                  The Government of Punjab aims to replace traditional payment
                  processes with a seamless digital alternative. PayZen will
                  eliminate the need for physical visits to collection offices,
                  reducing corruption and increasing transparency. This platform
                  will be implemented nationwide, ensuring ease and efficiency
                  in financial transactions.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Call-to-Action Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "40px 0",
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "30px",
                padding: { xs: "10px 20px", md: "12px 24px" },
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 600,
                transition: "0.3s",
                "&:hover": { backgroundColor: "#0F3C73" },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;
