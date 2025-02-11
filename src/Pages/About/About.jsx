import React from "react";
import HeroSec from "../../Components/RepeatedFiles/HeroSec/HeroSec";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Container>
        <HeroSec />
      </Container>

      <Box
        component="img"
        src="/Assets/image.png"
        alt="Banner"
        sx={{ height: "177px", width: "100%" }}
      />

      <Container>
        <Box sx={{ padding: "20px" }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "#11243F", fontWeight: 700 }}
                >
                  About Payzen
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#6D6D6D", fontSize: "16px", fontWeight: 400 }}
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
                alt="About Payzen"
                sx={{ width: "100%", maxWidth: "589px", height: "496px" }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ padding: "20px" }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/Assets/rightAbout.png"
                alt="About Payzen"
                sx={{
                  width: "100%",
                  maxWidth: "577px",
                  height: "540px",
                  borderRadius: "40px",
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
                  sx={{ color: "#6D6D6D", fontSize: "15px", fontWeight: 400 }}
                >
                  In this technologically advanced ecosystem, Government of
                  Punjab has <br /> envisioned to offer complete retreat from
                  traditional and primitive payment <br /> processes that caused
                  hassle and trouble. PayZen will simplify the task that <br />
                  indigenously involved physical visits to the collection
                  offices across the <br /> province for Government & Commercial
                  tax payments, and instigated bribery <br /> and corruption.
                  Furthermore, PayZen will ensure transparency, uniformity in{" "}
                  <br />
                  processing tasks, and a hassle-free experience. Commencing in
                  Punjab, <br /> PayZen will be implemented in all the provinces
                  soon.
                </Typography>
              </Box>
            </Grid>
          </Grid>
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
                borderRadius: " 30px",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: 600,
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
