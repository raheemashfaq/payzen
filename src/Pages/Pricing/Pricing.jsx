import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FeatureCard from "../../Components/RepeatedFiles/FeatureCards/FeatureCard";
import Unique from "../../Components/RepeatedFiles/UniqueBenefit/Unique";
import SecuritySupport from "../../Components/RepeatedFiles/SecuritySupport/SecuritySupport";

const Pricing = () => {
  return (
    <div>
      <Container>
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
            Our Featured Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#6D6D6D",
              fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Text scaling
            }}
          >
            PayZen allows you to effortlessly collect payments through a wide
            range of alternative delivery channels,
            <br /> ensuring a smooth experience.
          </Typography>
        </Box>

        <FeatureCard />
        <Unique />

        <SecuritySupport />
      </Container>
    </div>
  );
};

export default Pricing;
