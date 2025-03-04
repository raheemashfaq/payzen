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
// import TestimonialCarousel from "./TestimonialCarousel";
import SlickSlider from "./SlickSlider";
// import TestimonialCarousel from "./TestimonialCarousel";

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
  const transCards = [
    {
      title: "Transactions Analytics",
      image: "/Assets/trans_pic.png",
    },
    {
      title: "Account Login at Different \n Organization levels",
      image: "/Assets/wallet_pic.png",
    },
    {
      title: "Real Time Payment Intimation",
      image: "/Assets/login_pic.png",
    },
    {
      title: "Excel Sheets (Download data)",
      image: "/Assets/excel_pic.png",
    },
  ];
  const Steps = [
    { id: 1, text: "Log in to your Online <br /> Banking portal" },
    { id: 2, text: "Select Payment <br /> option" },
    { id: 3, text: "Enter PSID <br /> Number" },
    { id: 4, text: "Confirm details and Payment <br /> is done" },
  ];
  return (
    <>
      <HeroSec />
      {/* Features Section */}
      <Container>
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
      </Container>
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
          <Typography variant="h5" sx={{ color: "#fff", mb: 3 }}>
            Our Payment Partners
          </Typography>
          <hr style={{ fontSize: "20px", width: "80%" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              mt: 3,
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
      <Container>
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
            sx={{
              fontSize: { xs: "30px", md: "40px" },
              fontWeight: "bold",
              color: "#11243F",
            }}
          >
            Our Featured Services
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#000",
              textAlign: { xs: "center", md: "center" },
              color: "#11243F",
            }}
          >
            {isLargeScreen ? (
              <>
                PayZen allows you to effortlessly collect payments through a
                wide range of (ADC) <br />
                Alternative Delivery Channels, ensuring a smooth experience.
              </>
            ) : (
              "PayZen allows you to effortlessly collect payments through a wide range of (ADC) Alternative Delivery Channels, ensuring a smooth experience."
            )}
          </Typography>
          <FeatureCard />
        </Box>
      </Container>
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
          PayZen is backed by the Punjab Information Technology Board, ensuring
          top-notch security and reliability. Our platform combines cutting-edge
          technology with robust support to deliver an exceptional payment
          experience. We provide an all-encompassing solution empowering your
          business to effortlessly generate digital invoices, facilitate
          seamless digital payments, and efficiently oversee cash flows - all
          through a streamlined and convenient web-based solution.
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
      <Container>
        <Box
          sx={{
            padding: { xs: "40px 20px", md: "20px 0" },
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
                  fontSize: { xs: "28px", sm: "32px", md: "50px" },
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

              <Box
                component="img"
                src="/Assets/left_card.png"
                alt="Description"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  // marginTop: "20px",
                }}
              />
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
              {transCards.map((item, index) => (
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
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src={item.image} alt="" />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "16px", md: "18px" },
                        fontWeight: "600",
                      }}
                    >
                      {item.title}
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
                    Join Hands with Payzen <br /> for seamless Business <br />{" "}
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
      </Container>
      {/* Chossing Pricing Plan  */}
      <Box
        sx={{
          padding: { xs: "40px 20px", md: "40px 0" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
          backgroundImage: "url(/Assets/price_plan_bg.png)",
          backgroundPosition: "center",
          backgroundSize: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          width: "100%",
          height: "607px",
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
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: 400,
            maxWidth: "600px",
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
      <Container>
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

          <SlickSlider />
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
            gap: "20px",
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
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ position: "relative" }}
            >
              {Steps.map((step, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={step.id}
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Numbered Circle */}
                  <Box
                    sx={{
                      border: "20px solid #D9D9D9",
                      background: "#1253A4",
                      borderRadius: "50%",
                      width: "161px",
                      height: "157px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                      fontSize: "55px",
                      fontWeight: "700",
                    }}
                  >
                    {step.id}
                  </Box>

                  {/* Step Description */}
                  <Typography
                    dangerouslySetInnerHTML={{ __html: step.text }}
                    sx={{ textAlign: "center", mt: 1 }}
                  />

                  {index !== steps.length - 1 && (
                    <img
                      src="/Assets/aroow.png"
                      alt="Arrow"
                      style={{
                        position: "absolute",
                        right: "-70px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "119px",
                        height: "auto",
                        display: window.innerWidth < 768 ? "none" : "block",
                        zIndex: 1,
                      }}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
      {/* Apps Downloads  */}
      <Box
        sx={{
          padding: { xs: "30px 0", sm: "40px 0", md: "50px 0" }, // Responsive padding
          backgroundImage: "url(/Assets/bg_left_right.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: { xs: "cover", md: "contain" }, // Responsive background
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {" "}
          {/* Added responsive spacing */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box sx={{ marginLeft: { xs: "8px", md: "45px" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "24px", md: "32px" }, // More responsive font sizes
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: { xs: "8px", sm: "10px" }, // Responsive margin
                }}
              >
                Coming Soon....
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "24px", md: "32px" }, // More responsive font sizes
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: { xs: 1.4, md: 1.5 }, // Added responsive line height
                }}
              >
                Download Our Mobile App{" "}
                <Box
                  component="br"
                  sx={{ display: { xs: "none", sm: "block" } }}
                />
                To Get All Features Of{" "}
                <Box
                  component="br"
                  sx={{ display: { xs: "none", sm: "block" } }}
                />
                PAYZEN
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: { xs: "12px", sm: "16px" }, // Responsive gap
                  marginTop: { xs: "16px", sm: "20px" }, // Responsive margin
                  width: { xs: "100%", sm: "auto" }, // Full width on mobile
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffff",
                    color: "#000",
                    borderRadius: "30px",
                    padding: {
                      xs: "8px 16px",
                      sm: "10px 20px",
                      md: "12px 24px",
                    }, // More responsive padding
                    border: "1px solid #11243F",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textTransform: "none",
                    fontSize: { xs: "14px", sm: "15px", md: "16px" }, // More responsive font
                    width: { xs: "100%", sm: "auto" }, // Full width on mobile
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  <img
                    src="/Assets/apple.png"
                    alt="Apple Store"
                    style={{ width: "20px", height: "20px" }}
                  />
                  Download Now
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffff",
                    color: "#000",
                    borderRadius: "30px",
                    padding: {
                      xs: "8px 16px",
                      sm: "10px 20px",
                      md: "12px 24px",
                    }, // More responsive padding
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textTransform: "none",
                    fontSize: { xs: "14px", sm: "15px", md: "16px" }, // More responsive font
                    width: { xs: "100%", sm: "auto" }, // Full width on mobile
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  <img
                    src="/Assets/playstore.png"
                    alt="Play Store"
                    style={{ width: "20px", height: "20px" }}
                  />
                  Download Now
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative", // Added for proper image positioning
              minHeight: { xs: "400px", md: "600px" }, // Ensure minimum height
              overflow: "hidden", // Prevent image overflow
            }}
          >
            <Box
              component="img"
              src="/Assets/iPhone 13 Pro.png"
              alt="Hero"
              sx={{
                position: { md: "absolute" },
                right: { md: "-5%" },
                bottom: { sm: "0", md: "45px" },
                height: { xs: "auto", md: "557px" },
                maxWidth: { md: "550px" },
                width: { sm: "100%" },
                objectFit: "contain",
                transform: { md: "translateX(0)" },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* FAQ'S  */}
      <Container>
        <AskQuestions />
      </Container>
      {/* Secutity Checkup  */}
      <SecuritySupport />
      {/* News and Blogs  */}
      <Container>
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
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="stretch"
          >
            {/* Left Side - Multiple Cards */}
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  width: "100%",
                }}
              >
                {/* First Card */}
                <Card
                  sx={{
                    flex: "1 1 66%",
                    maxWidth: { xs: "100%", md: "66%" },
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/Assets/blog1.png"
                    sx={{ width: "165px", padding: 0 }}
                  />
                  <Box>
                    <CardContent>
                      <Typography gutterBottom variant="h5">
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
                      <Button size="small">Get Started {">"}</Button>
                    </CardActions>
                  </Box>
                </Card>

                {/* Second Card */}
                <Card
                  sx={{
                    flex: "1 1 32%",
                    maxWidth: { xs: "100%", md: "32%" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{ fontWeight: "bold", padding: "10px" }}
                  >
                    Welcome New Digital <br /> ERA
                  </Typography>
                  <CardMedia
                    component="img"
                    image="/Assets/blog2.png"
                    sx={{ width: "100%", padding: "10px" }}
                  />
                  <CardActions>
                    <Button size="small">Get Started {">"}</Button>
                  </CardActions>
                </Card>
              </Box>

              {/* Full-width card */}
              <Card
                sx={{
                  width: "99.5%",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#F5F5F5",
                  mt: 1,
                  flexWrap: { xs: "wrap", md: "nowrap" },
                }}
              >
                <CardMedia
                  component="img"
                  image="/Assets/blog3.png"
                  sx={{ width: { xs: "100%", md: "40%" }, padding: 0 }}
                />
                <Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      PayZen join hands with Jazz Cash for digital payments in
                      Pakistan
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      PayZen has partnered with JazzCash to expand digital
                      payment options across Pakistan, making secure and
                      convenient transactions more accessible.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Get Started {">"}</Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>

            {/* Right Side - Single Large Card with Full Height */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    sx={{ height: 298, width: "100%" }}
                    image="/Assets/blog4.jpeg"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "20px", fontWeight: 700 }}
                    >
                      PayZen has officially signed <br /> MOU with Visa Card and
                      HBL
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      This partnership will allow PayZen to integrate Visa's
                      extensive network and HBL's robust banking services,
                      bringing secure and accessible payments.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* Follow Us  */}
    </>
  );
};
export default Home;
