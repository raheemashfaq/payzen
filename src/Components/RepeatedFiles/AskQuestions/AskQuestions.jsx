import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import React, { useState } from "react";

const AskQuestions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: "What is the Pricing Model of PayZen?",
      answer:
        "PayZen offers a variety of pricing plans tailored to different business needs. Our pricing includes a monthly subscription fee based on the selected plan, which varies by transaction volume and features.",
    },
    {
      question: "Who Does PayZen Serve?",
      answer:
        "PayZen serves businesses of all sizes, from small startups to large enterprises, helping them streamline payment processes with secure and efficient solutions.",
    },
    {
      question: "What should I do if a payment fails?",
      answer:
        "If a payment fails, check your payment details for accuracy. Ensure sufficient funds are available and verify your network connection. If the issue persists, contact our support team.",
    },
    {
      question: "What is the Vision of PayZen?",
      answer:
        "Our vision is to simplify digital payments by providing a seamless, secure, and user-friendly payment experience for businesses and customers alike.",
    },
  ];

  return (
    <Box sx={{ margin: "40px 0", padding: { xs: "20px", md: "40px" } }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section: Introduction */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#1253A4",
            borderRadius: "20px",
            padding: { xs: "30px", md: "50px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "30px", md: "45px" },
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "10px",
            }}
          >
            Frequently Asked <br /> Questions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: "24px",
            }}
          >
            Our comprehensive FAQ section covers everything you need to know
            about PayZen, from security and fees to integration and processing.
            Find answers to common questions about our services, supported
            payment methods, and technical support.
          </Typography>
        </Grid>

        {/* Right Section: Accordion for FAQs */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: "600px", margin: "auto" }}>
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  boxShadow: "none",
                  borderBottom: "1px solid #E0E0E0",
                  "&:before": { display: "none" },
                  "&:hover": { backgroundColor: "#F8F8F8" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#0A68FF" }} />}
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <CheckBoxIcon sx={{ color: "#0A68FF" }} />
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#555" }}>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AskQuestions;
