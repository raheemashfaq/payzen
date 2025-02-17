import React from "react";
import AskQuestions from "../RepeatedFiles/AskQuestions/AskQuestions";
import { Box, Container, Typography } from "@mui/material";

const Faq = () => {
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
            Frequently asked questions
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", color: "#6D6D6D" }}
          >
            Our comprehensive FAQ section covers everything you need to know
            about PayZen, from security and fees to <br /> integration and
            processing. Find answers to common questions about our services,
            including supported <br /> payment methods, transaction processing,
            and technical support.
          </Typography>
        </Box>
        <AskQuestions />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "40px 0",
          }}
        >
          <Box
            component="img"
            src="/Assets/image1.webp"
            alt="About Payzen"
            sx={{
              width: "100%",
              maxWidth: "589px",
              height: "496px",
            }}
          />
        </Box>
      </Container>
    </div>
  );
};

export default Faq;
