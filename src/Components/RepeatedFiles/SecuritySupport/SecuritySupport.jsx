import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const SecuritySupport = () => {
  const securityCards = [
    {
      image: "/Assets/securityLock.png",
      title: "End to End Dncryption",
    },
    {
      image: "/Assets/securityBox.png",
      title: "Easy To Step",
    },
    {
      image: "/Assets/securityHead.png",
      title: "Dedicated 24/7 Support",
    },
  ];
  return (
    <div>
      <Box
        sx={{
          margin: "20px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "50px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontSize: "40px", fontWeight: "bold", color: "#11243F" }}
        >
          Security and support
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#000", textAlign: "center", color: "#11243F", mb: 2 }}
        >
          Secure Transactions & Dedicated Support. Pay with peace of <br />{" "}
          mind. PayZen is your trusted payment partner.
        </Typography>
        <Grid container spacing={2}>
          {securityCards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  width: 300,
                  borderRadius: "40px",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <img src={card.image} alt="" />
                  <Typography
                    variant="body1"
                    sx={{ color: "#11243F", fontWeight: "bold" }}
                  >
                    End to End Dncryption
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default SecuritySupport;
