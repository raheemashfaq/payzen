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
      answer: "PayZen serves businesses of all sizes...",
    },
    {
      question: "What should I do if a payment fails?",
      answer: "You should check your payment details...",
    },
    {
      question: "What is the Vision of PayZen?",
      answer: "Our vision is to simplify payments...",
    },
  ];

  return (
    <div>
      <Box sx={{ margin: "20px 0" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: "#1253A4",
              borderRadius: "20px",
              padding: "40px ",
            }}
          >
            <Typography
              variant="bdoy1"
              sx={{
                fontSize: "45px",

                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              Frequently asked <br /> Questions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: 400,

                color: "#ffffff",
                lineHeight: "24px",
              }}
            >
              Our comprehensive FAQ section covers everything you need to <br />{" "}
              know about Pay Zen, from security and fees to integration and{" "}
              <br />
              processing. Find answers to common questions about our <br />
              services, including supported payment methods, transaction <br />
              processing, and technical support.
            </Typography>
          </Grid>
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
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
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
    </div>
  );
};

export default AskQuestions;
