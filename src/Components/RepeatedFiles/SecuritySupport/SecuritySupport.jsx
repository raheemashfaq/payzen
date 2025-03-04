import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const SecuritySupport = () => {
  const securityCards = [
    { image: "/Assets/securityLock.png", title: "End to End Encryption" },
    { image: "/Assets/securityBox.png", title: "Easy To Setup" },
    { image: "/Assets/securityHead.png", title: "Dedicated 24/7 Support" },
  ];

  return (
    <Box
      sx={{
        margin: "20px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: { xs: "30px", md: "50px" },
        backgroundColor: "#F8F8F8",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "30px", md: "40px" },
            fontWeight: "bold",
            color: "#11243F",
            textAlign: "center",
          }}
        >
          Security and Support
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#11243F",
            fontSize: { xs: "14px", md: "18px" },
            marginBottom: "20px",
          }}
        >
          Secure Transactions & Dedicated Support. Pay with peace of mind.
          PayZen is your trusted payment partner.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {securityCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  width: { xs: "100%", sm: 280 },
                  borderRadius: "40px",
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: "80px" }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#11243F",
                      fontWeight: "bold",
                      marginTop: "10px",
                      fontSize: { xs: "16px", md: "18px" },
                    }}
                  >
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SecuritySupport;
