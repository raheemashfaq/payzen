import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const FeatureCard = () => {
  const serviceImages = [
    {
      image: "/Assets/serImg1.png",
      title: "Mobile Banking",
    },
    {
      image: "/Assets/serImg2.png",
      title: "Internet Banking",
    },
    {
      image: "/Assets/serImg3.png",
      title: "Over the Counter (OTC) at \n any branch",
    },
    {
      image: "/Assets/serImg4.png",
      title: "Retail Merchants \nNetwork",
    },
    {
      image: "/Assets/serImg5.png",
      title: "Credit/Debit Card",
    },
    {
      image: "/Assets/serImg6.png",
      title: "ATM",
    },
  ];
  return (
    <div>
      {" "}
      <Grid container>
        {serviceImages.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              key={index}
              sx={{
                width: "300",
                margin: "20px",
                borderRadius: "10px",
                border: "4px solid #F3F3F3",
              }}
            >
              <CardContent
                sx={{
                  border: "2px solid #F3F3F3",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px",

                  alignItems: "center",
                }}
              >
                <img src={service.image} alt="" />
                <Typography
                  sx={{ whiteSpace: "pre-line", textAlign: "center" }}
                >
                  {service.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeatureCard;
