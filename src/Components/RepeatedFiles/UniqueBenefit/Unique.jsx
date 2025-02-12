import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Unique = () => {
  const cards = [
    {
      title: "Easy To Setup",
      description:
        "PayZen ensures secure payment processing through encryption and tokenization.",
      image: "/Assets/box.png",
    },
    {
      title: "Secure",
      description:
        "PayZen ensures secure payment processing through encryption and tokenization.",
      image: "/Assets/lock.png",
    },
    {
      title: "Low Cost",
      description:
        "PayZen ensures secure payment processing through encryption and tokenization.",
      image: "/Assets/bag.png",
    },
    {
      title: "One Solution",
      description:
        "PayZen ensures secure payment processing through encryption and tokenization.",
      image: "/Assets/card.png",
    },
  ];

  return (
    <Box sx={{ padding: { xs: "20px", md: "50px 0" } }}>
      <Grid container alignItems="center" spacing={4}>
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img
            src="/Assets/left_atm.png"
            alt="Hero"
            style={{
              width: "100%",
              maxWidth: "583px",
            }}
          />
        </Grid>

        {/* Right Side: Text and Features */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "28px", md: "50px" },
              color: "#11243F",
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Benefits that make <br /> PayZen unique
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "14px", md: "18px" },
              color: "#11243F",
              textAlign: { xs: "center", md: "left" },
              marginTop: "10px",
            }}
          >
            PayZen is distinguished by robust security features and seamless
            integration, guaranteeing a reliable payment processing experience.
          </Typography>

          {/* Feature Cards */}
          <Grid container spacing={2} sx={{ marginTop: "20px" }}>
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    width: "100%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        alt={card.title}
                        src={card.image}
                        sx={{ width: 56, height: 56 }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {card.title}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ marginTop: "5px" }}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: "10px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "#11243F",
                borderRadius: "30px",
                fontSize: { xs: "1rem", md: "1.25rem" },
                padding: { xs: "6px 12px", md: "12px 24px" },
                border: "1px solid #11243F",
                "&:hover": {
                  backgroundColor: "#11243F",
                  color: "#FFFFFF",
                },
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
                fontSize: { xs: "1rem", md: "1.25rem" },
                padding: { xs: "6px 12px", md: "12px 24px" },
                "&:hover": {
                  backgroundColor: "#0E468A",
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Unique;
