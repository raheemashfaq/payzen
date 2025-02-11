import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FeatureCard from "../../Components/RepeatedFiles/FeatureCards/FeatureCard";

const Payment = () => {
  return (
    <>
      <Container>
        {" "}
        <Box
          sx={{
            margin: "20px 0",
            width: "100%",
            maxWidth: "1090px",
            minHeight: { xs: "250px", md: "313px" },
            backgroundColor: "#F6F6F6",
            padding: { xs: "10px", md: "30px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "32px", sm: "44px", md: "66px" },
              fontWeight: 700,
              color: "#11243F",
            }}
          >
            Secure Payment Processing
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", color: "#6D6D6D" }}
          >
            Punjab Information Technology Board offers a secure and efficient{" "}
            payment processing system <br /> that ensures your business's
            customers are protected.
          </Typography>
        </Box>
        <FeatureCard />
      </Container>
    </>
  );
};

export default Payment;
