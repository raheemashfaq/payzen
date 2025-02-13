import {
  Button,
  Container,
  Grid,
  Box,
  CardContent,
  Card,
  Avatar,
  Stack,
  Typography,
  CardMedia,
  MobileStepper,
  styled,
  Stepper,
  Step,
  StepLabel,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  useMediaQuery,
} from "@mui/material";

import React, { useState } from "react";
import "./Home.css";
import { TextFields } from "@mui/icons-material";
import HeroSec from "../../Components/RepeatedFiles/HeroSec/HeroSec";
import FeatureCard from "../../Components/RepeatedFiles/FeatureCards/FeatureCard";
import Unique from "../../Components/RepeatedFiles/UniqueBenefit/Unique";
import SecuritySupport from "../../Components/RepeatedFiles/SecuritySupport/SecuritySupport";
import AskQuestions from "../../Components/RepeatedFiles/AskQuestions/AskQuestions";

const CustomMobileStepper = styled(MobileStepper)(({ theme }) => ({
  "& .MuiMobileStepper-dots": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .MuiMobileStepper-dot": {
    width: 8,
    height: 8,
    margin: "0 4px",
  },
  "& .MuiMobileStepper-dotActive": {
    width: 16,
    height: 16,
    margin: "0 4px",
  },
}));

const Home = () => {
  const clientCards = [
    {
      title: "Qaiser Iqbal",
      description:
        "We at University Of Education are \n currently using paZen and the results are \n phenomenal. We have also \n recommended paZen to other universities.",
    },
    {
      title: "Zahra Hashim",
      description:
        "As an Entrepreneur I took my business to \n payZen and I think I made the best choice ",
    },
    {
      title: "Haroon Naseer",
      description:
        "Punjab Model Bazar is curently using \n paZen and its a wonderful experience all \n our financial transaction are digitized and \n we can see whenever we want report for \n our business.",
    },
  ];
  const steps = [
    "Log in to your Online \n Banking portal",
    "Select Payment \n option",
    "Enter PSID \n Number",
    "Confirm details and \n Payment is done",
  ];
  const isLargeScreen = useMediaQuery("(min-width: 900px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Container>
        <HeroSec />
        {/* Features Section */}
        <Box
          sx={{
            padding: { xs: "40px 20px", md: "20px 0" },
            backgroundColor: "#EFF2F773",
          }}
        >
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <Card sx={{ maxWidth: 300, mx: "auto", mb: { xs: 4, md: 0 } }}>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    10k+ Exclusive Users
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={-1.5}
                    sx={{
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Avatar alt="User 1" src="/Assets/testimonial-3.jpg.png" />
                    <Avatar alt="User 2" src="/Assets/profile.jpg" />
                    <Avatar alt="User 3" src="/Assets/testimonial-1.jpg.png" />
                    <Avatar alt="User 4" src="/Assets/testimonial-2.jpg.png" />
                  </Stack>
                </CardContent>
              </Card>
              <img
                style={{
                  width: "100%",
                  maxWidth: "587px",
                  height: "auto",
                  marginTop: "20px",
                }}
                src="/Assets/Apple iMac Retina.png"
                alt="Screen"
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ textAlign: { xs: "start", md: "left" } }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "32px", md: "60px" },
                  color: "#11243F",
                  fontWeight: "bold",
                }}
              >
                Collect Any <br /> Payment, Anytime, <br /> Anywhere
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  color: "#6F6F6F",
                  lineHeight: "30px",
                  marginTop: 2,
                }}
              >
                With PayZen, conduct transactions seamlessly through <br />
                any bank, using any medium, at any time. PayZen <br />
                provides the flexibility you need for your business.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* Payment Partners */}
        <Box sx={{ padding: "0 0" }}>
          <Box
            sx={{
              bgcolor: "#11243F",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px 0",
            }}
          >
            <Typography>
              <img src="/Assets/coin.png" alt="" />
            </Typography>
            <Typography variant="h5" sx={{ color: "#fff" }}>
              Our Payment Partners
            </Typography>
            <hr style={{ fontSize: "20px", width: "80%" }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {[
                "jazz.png",
                "ubl.png",
                "MasterCard.png",
                "one.png",
                "union.png",
                "visa-logo.png",
                "hbl.png",
                "mcb.png",
                "omni.png",
                "easypaisa.png",
              ].map((partner, index) => (
                <Card
                  key={index}
                  sx={{
                    width: "140px",
                    height: "90px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={`/Assets/${partner}`}
                    alt={partner.split(".")[0]}
                    sx={{ width: "80%", height: "80%", objectFit: "contain" }}
                  />
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
        {/* Unique Benefits */}
        <Unique />
        {/* Features Services */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px 0",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: "40px", fontWeight: "bold", color: "#11243F" }}
          >
            Our Featured Services
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#000",
              textAlign: { xs: "start", md: "center" },
              color: "#11243F",
            }}
          >
            PayZen allows you to effortlessly collect payments through a wide
            range of (ADC) <br />
            Alternative Delivery Channels, ensuring a smooth experience.
          </Typography>
          <FeatureCard />
        </Box>
        {/* About Us  */}
        <Box
          sx={{
            padding: { xs: "40px 20px", md: "60px 0" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "linear-gradient(to right, #11243F, #2D5EA5)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#ffffff",
              marginBottom: "20px",
              fontSize: { xs: "28px", md: "40px" }, // Adjust heading size for mobile
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              maxWidth: "800px",
              lineHeight: "28px",
              fontSize: { xs: "14px", md: "17px" }, // Smaller font on mobile
              paddingX: { xs: 2, md: 0 }, // Padding for mobile readability
              textAlign: { sm: "start", md: "center" },
            }}
          >
            PayZen is backed by the Punjab Information Technology Board,
            ensuring top-notch security and reliability. Our platform combines
            cutting-edge technology with robust support to deliver an
            exceptional payment experience. We provide an all-encompassing
            solution empowering your business to effortlessly generate digital
            invoices, facilitate seamless digital payments, and efficiently
            oversee cash flows - all through a streamlined and convenient
            web-based solution.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              padding: { xs: "8px 16px", md: "12px 24px" },
              marginTop: "20px",
              borderRadius: "30px",
              color: "white",
              borderColor: "white",
              fontSize: { xs: "14px", md: "16px" }, // Adjust button text size
            }}
          >
            Get Started
          </Button>
        </Box>
        {/* RealTime Reporting  */}
        <Box
          sx={{
            padding: { xs: "40px 20px", md: "20px 0" },
            backgroundColor: "#EFF2F773",
          }}
        >
          <Grid container spacing={5} alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              sx={{ textAlign: { xs: "start", md: "left" } }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "32px", md: "50px" },
                  color: "#11243F",
                  fontWeight: "700",
                }}
              >
                {isLargeScreen ? (
                  <>
                    Real-time reporting to <br /> help you grow your <br />{" "}
                    Business
                  </>
                ) : (
                  "Real-time reporting to  help you grow your  Business"
                )}
              </Typography>

              <Card
                sx={{
                  margin: { xs: "30px auto", md: "40px 0" },
                  maxWidth: 400,
                  padding: "20px",
                  backgroundColor: "#11243F",
                  borderRadius: "17px",
                  position: "relative",
                  overflow: "visible",
                  textAlign: "left",
                }}
              >
                <img
                  src="/Assets/realimeCard.png"
                  alt=""
                  style={{
                    position: "absolute",
                    width: "60%",
                    top: "-80px",
                    right: "-20px",
                  }}
                />
                <img
                  src="/Assets/realimeCard1.png"
                  alt=""
                  style={{
                    position: "absolute",
                    width: "40%",
                    bottom: "-90px",
                    right: "10px",
                  }}
                />

                <CardContent>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: "#00A556",
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src=""
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#fff",
                      mt: 2,
                    }}
                  >
                    Real Time Payment Intimation
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "400",
                      color: "#fff",
                      lineHeight: "24px",
                      mt: 1,
                    }}
                  >
                    Stay informed with real-time updates on all transactions.
                    Our system provides instant notifications, ensuring you’re
                    always aware of your financial activity as it happens.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {Array(4)
                .fill()
                .map((_, index) => (
                  <Card
                    key={index}
                    sx={{
                      width: { xs: "100%", sm: 400 }, // Full width on small screens
                      borderRadius: "20px",
                      mb: 2,
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "20px",
                          backgroundColor: "#1253A4",
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: "18px", md: "20px" },
                          fontWeight: "600",
                        }}
                      >
                        Transactions Analytics
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
            </Grid>
          </Grid>
        </Box>
        {/* Join Hands  */}
        <Box sx={{ padding: { xs: "40px 20px", md: "20px 0" } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "25px", md: "45px" },
                  color: "#11243F",
                  fontWeight: "bold",
                  textAlign: { xs: "start", md: "left" },
                  marginBottom: { xs: 2, md: 0 },
                }}
              >
                {isLargeScreen ? (
                  <>
                    Join Hands with Payzen for <br /> seamless Business <br />{" "}
                    Transactions
                  </>
                ) : (
                  "Join Hands with Payzen for seamless Business Transactions"
                )}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  color: "#11243F",
                  fontWeight: "400",
                  lineHeight: "26px",
                  textAlign: { xs: "start", md: "left" },
                  paddingX: { xs: 0, md: 0 },
                  marginBottom: 3,
                }}
              >
                Experience the most cost-effective and secure payment solution
                in Pakistan, backed by the Punjab Information Technology Board.
                Our platform ensures seamless transactions with both digital and
                traditional payment channels.
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#1253A4",
                  color: "#FFFFFF",
                  borderRadius: "30px",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  padding: { xs: "8px 16px", md: "12px 24px" },
                  textAlign: "center",
                }}
              >
                Get Started
              </Button>
            </Grid>

            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <img
                style={{
                  width: "100%",
                  maxWidth: "589px",
                  height: "auto",
                  borderRadius: "40px",
                }}
                src="/Assets/join_hand_right.png"
                alt="Hero"
              />
            </Grid>
          </Grid>
        </Box>
        {/* Chossing Pricing Plan  */}
        <Box
          sx={{
            padding: { xs: "40px 20px", md: "20px 0" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "linear-gradient(to right, #2D5EA5, #11243F)",
            textAlign: "center", // Ensures text is centered on mobile
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "30px", md: "45px" }, // Adjust heading size for mobile
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            Choose Pricing Plan
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "16px", md: "20px" }, // Adjust font size dynamically
              fontWeight: 400,
              maxWidth: "600px", // Limits text width for readability
              lineHeight: "28px",
            }}
          >
            Contact Us for a Customized Pricing Plan for Your Business
          </Typography>

          <Button
            variant="outlined"
            size="large"
            sx={{
              padding: { xs: "10px 20px", md: "12px 24px" }, // Responsive padding
              marginTop: "20px",
              borderRadius: "30px",
              color: "white",
              borderColor: "white",
              fontSize: { xs: "14px", md: "16px" }, // Adjust button font size
            }}
          >
            Get Pricing
          </Button>
        </Box>
        {/* Our Clients About Us  */}
        <Box
          sx={{
            padding: { xs: "40px 20px", md: "20px 0" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "30px", md: "45px" },
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            What Our Clients Say About Us
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {clientCards.map((client, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    position: "relative",
                    maxWidth: 300,
                    padding: "20px",
                    borderRadius: "20px",
                    backgroundColor: index % 2 === 0 ? "#11243F" : "#1253A4",
                    boxShadow:
                      index % 2 === 0
                        ? "10px 10px 15px rgba(17, 36, 63, 0.7)"
                        : "10px 10px 15px rgba(18, 83, 164, 0.7)",
                    transform:
                      index % 2 === 0 ? "rotate(8deg)" : "rotate(-8deg)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "rotate(0deg) scale(1.05)",
                      boxShadow: "15px 15px 20px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      backgroundColor: "#FAFAFA",
                      top: "10px",
                      left: "10px",
                      zIndex: -1,
                      transform: "rotate(2deg)",
                    }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                      {client.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        color: "#0F2244",
                        margin: "5px 0",
                      }}
                    >
                      “
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#555",
                        lineHeight: "1.5",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {client.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <CustomMobileStepper
            variant="dots"
            steps={clientCards.length}
            position="static"
            activeStep={0}
            sx={{
              mt: 4,
              maxWidth: 300,
              flexGrow: 1,
              display: { xs: "flex", md: "none" }, // Only show on mobile
            }}
          />
        </Box>
        {/* Payment Methods  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "28px", md: "40px" },
              fontWeight: "bold",
              color: "#11243F",
              marginBottom: "10px",
            }}
          >
            Payment Method
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#11243F",
              fontSize: { xs: "14px", md: "18px" },
              maxWidth: "600px",
              lineHeight: "26px",
              marginBottom: "20px",
            }}
          >
            Accept payments with confidence. PayZen ensures a smooth and secure
            experience for everyone.
          </Typography>

          <Box
            sx={{
              width: "100%",
              overflowX: isSmallScreen ? "auto" : "visible",
              paddingX: "10px",
            }}
          >
            <Stepper activeStep={0} alternativeLabel sx={{ flexWrap: "wrap" }}>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel
                    sx={{
                      whiteSpace: "pre-line",
                      "& .MuiStepIcon-root": {
                        width: { xs: "30px", md: "40px" },
                        height: { xs: "30px", md: "40px" },
                      },
                      "& .MuiStepConnector-line": {
                        minHeight: "3px",
                      },
                      "& .MuiStepLabel-label": {
                        fontSize: { xs: "14px", md: "18px" },
                        fontWeight: "bold",
                        textAlign: "center",
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
        {/* Apps Downloads  */}
        <Box
          sx={{ position: "relative", overflow: "hidden", padding: "50px 0" }}
        >
          <Grid container alignItems="center" justifyContent="center">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                backgroundColor: "#11243F",
                padding: { xs: 3, md: 4 },
                borderRadius: { xs: "20px", md: "0 50px 50px 0" },
                maxWidth: "900px",
                height: { xs: "auto", md: "450px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                position: "relative",
                zIndex: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "10px",
                }}
              >
                Coming Soon....
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                Download Our Mobile App <br /> To Get All Features Of <br />
                PAYZEN
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: "16px",
                  marginTop: "20px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffff",
                    color: "#000",
                    borderRadius: "30px",
                    padding: { xs: "8px 16px", md: "12px 24px" },
                    border: "1px solid #11243F",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textTransform: "none",
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  <img
                    src="/Assets/apple.png"
                    alt="Apple Store"
                    style={{ width: "20px" }}
                  />
                  Download Now
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffff",
                    color: "#000",
                    borderRadius: "30px",
                    padding: { xs: "8px 16px", md: "12px 24px" },
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textTransform: "none",
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  <img
                    src="/Assets/playstore.png"
                    alt="Play Store"
                    style={{ width: "20px" }}
                  />
                  Download Now
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                maxWidth: "900px",
                height: { xs: "auto", md: "450px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: { xs: "30px", md: 0 },
              }}
            >
              {!isLargeScreen && (
                <Box
                  sx={{
                    position: "absolute",
                    right: "-80px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "700px",
                    height: "100%",
                    background:
                      "radial-gradient(circle at center, #ffffff 0%, #F3F3F3 100%)",
                    clipPath: "ellipse(50% 70% at 50% 50%)",
                  }}
                ></Box>
              )}

              <img
                src="/Assets/iPhone 13 Pro.png"
                alt="Hero"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "auto",
                  position: "relative",
                  zIndex: 3,
                }}
              />
            </Grid>
          </Grid>
        </Box>
        {/* FAQ'S  */}
        <AskQuestions />
        {/* Secutity Checkup  */}
        <SecuritySupport />
        {/* News and Blogs  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: "40px", fontWeight: "bold", color: "#11243F" }}
          >
            News and Blogs
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#000", textAlign: "center", color: "#11243F", mb: 2 }}
          >
            Stay updated with the latest announcements, partnerships, and
            industry developments <br /> as PayZen continues to revolutionize
            digital payments.
          </Typography>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Card
                  sx={{
                    maxWidth: { md: 400 },
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    padding: 0,
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image="/Assets/blog1.png"
                    sx={{ maxWidth: "165px", padding: 0 }}
                  />
                  <Box>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        PayZen launching ceremony with <br /> master card
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        PayZen launching ceremony in collaboration with
                        Mastercard, marking a new era of seamless and secure
                        payment solutions.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" sx={{ textTransform: "none" }}>
                        Get Started {">"}
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
                <Card
                  sx={{
                    maxWidth: 200,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",

                    padding: 0,
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{ fontWeight: "bold", padding: "10px" }}
                    component="div"
                  >
                    Welcome New Digital <br /> ERA
                  </Typography>

                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image="/Assets/blog2.png"
                    sx={{ width: "100%", padding: "10px" }}
                  />
                  <Box>
                    <CardActions>
                      <Button size="small" sx={{ textTransform: "none" }}>
                        Get Started {">"}
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
              </Box>
              <Card
                sx={{
                  maxWidth: 610,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                  backgroundColor: "#F5F5F5",
                  mt: 1,
                  flexWrap: { xs: "wrap", md: "nowrap" },
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image="/Assets/blog3.png"
                  sx={{
                    // maxWidth: { md: "165px" },
                    width: { xs: "100%", md: "100%" },
                    padding: 0,
                  }}
                />
                <Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="bdoy1"
                      component="div"
                      sx={{ fontSize: "20px" }}
                    >
                      PayZen join hands with Jazz Cash for digital payments i
                      pakistan
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      PayZen has partnered with JazzCash to expand digital
                      payment options across Pakistan, making secure and
                      convenient transactions more accessible than ever.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{ textTransform: "none" }}>
                      Get Started {">"}
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  sx={{ height: 298, width: "100%", maxWidth: 400 }}
                  image="/Assets/blog4.jpeg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    sx={{ fontsize: "20px", fontWeight: 700 }}
                  >
                    PayZen has officially signed <br /> MOU with Visa Card and
                    HBL
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This partnership will allow PayZen to <br /> integrate
                    Visa's extensive network and <br /> HBL's robust banking
                    services, bringing <br /> secure and accessible.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
        {/* Follow Us  */}
      </Container>
    </>
  );
};
export default Home;
