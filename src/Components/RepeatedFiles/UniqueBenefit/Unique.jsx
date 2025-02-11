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
    <div>
      <Box>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              style={{
                width: "80%",
                maxWidth: "583px",
              }}
              src="/Assets/left_atm.png"
              alt="Hero"
            />
          </Grid>
          <Grid item xs={12} md={6} className="left">
            <h1
              style={{
                fontSize: "50px",
                color: "#11243F",
                marginBottom: "0",
              }}
            >
              Benefits that make <br /> PayZen unique
            </h1>
            <p
              style={{
                padding: "16px",
                lineHeight: "25px",
                color: "#11243F",
              }}
            >
              PayZen is distinguished by robust security features and seamless{" "}
              <br />
              integration, guaranteeing a reliable payment processing
              experience.
            </p>
            <Grid container spacing={2}>
              {cards.map((card, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    key={index}
                    sx={{
                      width: "100%",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <CardContent>
                      <Stack direction="row" spacing={2}>
                        <Avatar
                          alt="Remy Sharp"
                          src={card.image}
                          sx={{ width: 56, height: 56 }}
                        />
                        <Typography variant="h5">{card.title}</Typography>
                      </Stack>
                      <Typography variant="body2">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box className="buttons" sx={{ padding: "20px 0" }}>
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
        </Grid>
      </Box>
    </div>
  );
};

export default Unique;
