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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import React, { useState } from "react";
import "./Home.css";
import { TextFields } from "@mui/icons-material";

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
  const cards = [
    {
      title: "Easy To Setup",
      description:
        "PayZen ensures secure payment processing through encryption and tokenization.",
      image: "/Assets/box.png",
    },
    {
      title: "Secure",
      description:
        "PayZen ensures secure payment processing through encryption and tokenization.",
      image: "/Assets/lock.png",
    },
    {
      title: "Low Cost",
      description:
        "PayZen ensures secure payment processing through encryption and tokenization.",
      image: "/Assets/bag.png",
    },
    {
      title: "One Solution",
      description:
        "PayZen ensures secure payment processing through encryption and tokenization.",
      image: "/Assets/card.png",
    },
  ];
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
    <>
      <Container sx={{ padding: "0 70px" }}>
        {/* Hero Section */}
        <Box
          style={{
            backgroundImage: `url(/Assets/bg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            minHeight: "100vh",
            padding: "20px 0",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} md={6} className="left">
              <h1 style={{ fontSize: "60px", color: "#11243F" }}>
                Safe & Hassle-Free
                <br /> Payment Collections
              </h1>
              <p
                style={{
                  padding: "16px",
                  lineHeight: "25px",
                  color: "#11243F",
                }}
              >
                PayZen Provides Streamlined Payment Management with a Unified{" "}
                <br />
                Dashboard, Enabling Businesses to Collect Payments Effortlessly
                by <br />
                Creating Digital Invoices and Facilitating both online and
                in-person <br /> Payment Collection.
              </p>
              <Box className="buttons">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "transparent",
                    color: "#11243F",
                    borderRadius: "30px",
                    fontSize: "1.25rem",
                    padding: "12px 24px",
                    marginRight: 1,
                    border: "1px solid #11243F",
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#1253A4",
                    color: "#FFFFFF",
                    borderRadius: "30px",
                    fontSize: "1.25rem",
                    padding: "12px 24px",
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                style={{
                  width: "100%",
                  maxWidth: "583px",
                  height: "auto",
                }}
                src="/Assets/left_hero.png"
                alt="Hero"
              />
            </Grid>
          </Grid>
        </Box>
        {/* Features Section */}
        <Box sx={{ padding: "20px 0", backgroundColor: "#EFF2F773" }}>
          <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} md={6} className="left">
              <Card sx={{ maxWidth: 300, mx: "auto" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h2>10k+ Exclusive Users</h2>
                  <Stack
                    direction="row"
                    sx={{
                      "& > *": { marginLeft: -1.5 },
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/Assets/testimonial-3.jpg.png"
                    />
                    <Avatar alt="Travis Howard" src="/Assets/profile.jpg" />
                    <Avatar
                      alt="Cindy Baker"
                      src="/Assets/testimonial-1.jpg.png"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="/Assets/testimonial-2.jpg.png"
                    />
                  </Stack>
                </CardContent>
              </Card>
              <img
                style={{ width: "100%", maxWidth: "587px", height: "auto" }}
                src="/Assets/Apple iMac Retina.png"
                alt="Screen"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <h1
                className="right_heading"
                style={{ fontSize: "60px", color: "#11243F" }}
              >
                Collect Any <br /> Payment, Anytime,
                <br /> Anywhere
              </h1>
              <p
                style={{
                  fontSize: "20px",
                  color: "#6F6F6F",
                  lineHeight: "30px",
                }}
              >
                With PayZen conduct transaction seamlessly through <br /> Any
                bank, using Any medium, at Any time. PayZen <br /> provides the
                flexibility you need for your Business..
              </p>
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
        <Box>
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <img
                style={{
                  width: "80%",
                  maxWidth: "583px",
                }}
                src="/Assets/left_atm.png"
                alt="Hero"
              />
            </Grid>
            <Grid item xs={12} md={6} className="left">
              <h1
                style={{
                  fontSize: "50px",
                  color: "#11243F",
                  marginBottom: "0",
                }}
              >
                Benefits that make <br /> PayZen unique
              </h1>
              <p
                style={{
                  padding: "16px",
                  lineHeight: "25px",
                  color: "#11243F",
                }}
              >
                PayZen is distinguished by robust security features and seamless{" "}
                <br />
                integration, guaranteeing a reliable payment processing
                experience.
              </p>
              <Grid container spacing={2}>
                {cards.map((card, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card
                      key={index}
                      sx={{
                        width: "100%",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        "&:hover": {
                          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                        },
                      }}
                    >
                      <CardContent>
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            alt="Remy Sharp"
                            src={card.image}
                            sx={{ width: 56, height: 56 }}
                          />
                          <Typography variant="h5">{card.title}</Typography>
                        </Stack>
                        <Typography variant="body2">
                          {card.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Box className="buttons" sx={{ padding: "20px 0" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "transparent",
                    color: "#11243F",
                    borderRadius: "30px",
                    fontSize: "1.25rem",
                    padding: "12px 24px",
                    marginRight: 1,
                    border: "1px solid #11243F",
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#1253A4",
                    color: "#FFFFFF",
                    borderRadius: "30px",
                    fontSize: "1.25rem",
                    padding: "12px 24px",
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
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
            sx={{ color: "#000", textAlign: "center", color: "#11243F" }}
          >
            PayZen allows you to effortlessly collect payments through a wide
            range of (ADC) <br />
            Alternative Delivery Channels, ensuring a smooth experience.
          </Typography>
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
        </Box>
        {/* About Us  */}
        <Box
          sx={{
            padding: "20px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "linear-gradient(to right, #11243F, #2D5EA5)",
          }}
        >
          <Typography variant="h2" sx={{ color: "#ffffff", margin: "20px 0" }}>
            About Us
          </Typography>
          <Typography
            variant="body1 "
            sx={{
              color: "#ffffff",
              textAlign: "center",
              margin: "20px 0",
              lineHeight: "30px",
              fontSize: "17px",
            }}
          >
            PayZen is backed by the Punjab Information Technology Board ,
            ensuring top-notch security and reliability. <br />
            Our platform combines cutting-edge technology with robust support to
            deliver an exceptional payment experience.
            <br /> where we provide an all-encompassing solution empowering your
            business to effortlessly generate digital invoices,
            <br /> to facilitate seamless digital payments, and efficiently
            oversee cash flows - all through a streamlined <br /> and convenient
            web based solution.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              padding: "12px 24px",
              marginTop: "20px",
              borderRadius: "30px",
              color: "white",
              borderColor: "white",
            }}
          >
            Get Started
          </Button>
        </Box>
        {/* RealTime Reporting  */}
        <Box sx={{ padding: "20px 0", backgroundColor: "#EFF2F773" }}>
          <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} md={6} className="left">
              <Typography
                variant="body"
                sx={{ fontSize: "50px", color: "#11243F", fontWeight: "700" }}
              >
                Real-time reporting to <br /> help you grow your <br /> Business
              </Typography>
              <Card
                sx={{
                  margin: "40px 0",
                  maxWidth: 400,
                  mx: "auto",
                  padding: "20px",
                  backgroundColor: "#11243F",
                  borderRadius: "17px",
                  position: "relative",
                  overflow: "visible",
                }}
              >
                <img
                  src="/Assets/realimeCard.png"
                  alt=""
                  style={{
                    position: "absolute",
                    width: "60%",
                    top: "-90px",
                    right: "-30px",
                    transition: "right 0.3s ease-in-out",
                  }}
                  className="responsive_img"
                />
                <img
                  src="/Assets/realimeCard1.png"
                  alt=""
                  style={{
                    position: "absolute",
                    width: "40%",
                    bottom: "-100px",
                    right: "10px",
                    transition: "right 0.3s ease-in-out",
                  }}
                />

                <CardContent>
                  <img
                    src=""
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "#00A556",
                      width: "60px",
                      height: "60px",
                      border: "none",
                    }}
                    alt=""
                  />

                  <Typography
                    variant="body1"
                    sx={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}
                  >
                    Real Time Payment Intimation
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "400", color: "#fff" }}
                  >
                    Stay informed with real-time updates on all transactions.{" "}
                    <br />
                    Our system provides instant notifications, ensuring you’re{" "}
                    <br />
                    always aware of your financial activity as it happens.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              {Array(4)
                .fill()
                .map((_, index) => (
                  <Card
                    key={index}
                    sx={{ width: 400, borderRadius: "20px", mb: 2 }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <img
                        alt=""
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "20px",
                          backgroundColor: "#1253A4",
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ fontSize: "20px", fontWeight: "600" }}
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
        <Box
          sx={{
            padding: "20px 0",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} className="left">
              <h1
                style={{ fontSize: "45px", color: "#11243F", marginBottom: 0 }}
              >
                Join Hands with Payzen for <br /> seamless Business <br />{" "}
                Transactions
              </h1>
              <p
                style={{
                  padding: "16px",
                  color: "#11243F",
                  fontWeight: "400",
                }}
              >
                Experience the most cost-effective and secure payment solution
                in Pakistan, <br /> backed by the Punjab Information Technology
                Board. Our platform ensures <br /> seamless transactions with
                both digital and traditional payment channels
              </p>

              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#1253A4",
                  color: "#FFFFFF",
                  borderRadius: "30px",
                  fontSize: "1.25rem",
                  padding: "12px 24px",
                }}
              >
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
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
            padding: "20px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "linear-gradient(to right, #2D5EA5, #11243F)",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              fontSize: "45px",
              fontWeight: 700,
              margin: "20px 0",
            }}
          >
            Choose Pricing Plan
          </Typography>
          <Typography
            variant="body1 "
            sx={{
              color: "#ffffff",
              textAlign: "center",
              margin: "20px 0",
              fontWeight: 400,
              fontSize: "20px",
            }}
          >
            Contact Us for Customised Pricing Plan For your Business
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              padding: "12px 24px",
              marginTop: "20px",
              borderRadius: "30px",
              color: "white",
              borderColor: "white",
            }}
          >
            Get Pricing
          </Button>
        </Box>
        {/* Our Clients About Us  */}
        <Box
          sx={{
            padding: "20px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "45px",
              fontWeight: 700,
              margin: "20px 0",
            }}
          >
            What Our Clients Say About Us
          </Typography>
          <Grid container spacing={2}>
            {clientCards.map((client, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    position: "relative",
                    maxWidth: 300,
                    padding: "20px",
                    borderRadius: "20px",
                    backgroundColor: index % 2 === 0 ? "#11243F" : "#1253A4", // Alternate background color
                    boxShadow:
                      index % 2 === 0
                        ? "20px 20px 15px rgba(17, 36, 63, 1)"
                        : "10px 10px 15px rgba(18, 83, 164, 1)", // Alternate shadow
                    transform:
                      index % 2 === 0 ? "rotate(15deg)" : "rotate(-10deg)", // Rotate alternating cards
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "rotate(0deg) scale(1.05)", // Reset rotation and scale on hover
                      boxShadow: "15px 15px 20px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  {/* Background Shadow Effect */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      backgroundColor: "#FAFAFA", // Dark blue shadow effect
                      top: "10px",
                      left: "10px",
                      zIndex: -1,
                      transform: "rotate(2deg)", // Slight tilt for depth effect
                    }}
                  />

                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
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
            steps={5}
            position="static"
            activeStep={0}
            sx={{
              mt: 7,
              maxWidth: 300,
              flexGrow: 1,
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
            padding: "20px 0",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: "40px", fontWeight: "bold", color: "#11243F" }}
          >
            Payment Method
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#000", textAlign: "center", color: "#11243F" }}
          >
            Accept payments with confidence. PayZen ensures a smooth and secure
            experience <br /> for everyone.
          </Typography>
          <Box sx={{ width: "100%", margin: "20px 0" }}>
            <Stepper activeStep={0} alternativeLabel>
              {steps.map((label) => (
                <Step key={label} sx={{ fontSize: "50px" }}>
                  <StepLabel
                    sx={{
                      whiteSpace: "pre-line",
                      "& .MuiStepIcon-root": {
                        width: "40px",
                        height: "40px",
                        fontSize: "20px",
                      },
                      "& .MuiStepConnector-line": {
                        minHeight: "5px",
                      },
                      "& .MuiStepLabel-label": {
                        fontSize: "18px",
                        fontWeight: "bold",
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
          <Grid container alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                backgroundColor: "#11243F",
                padding: 4,
                borderRadius: "0 50px 50px 0",
                maxWidth: "900px",
                height: "450px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              <h3
                style={{ fontSize: "32px", fontWeight: 700, color: "#ffffff" }}
              >
                Coming Soon....
              </h3>
              <h3
                style={{ fontSize: "32px", fontWeight: 700, color: "#ffffff" }}
              >
                Download Our Mobile App <br /> To Get All Features Of <br />
                PAYZEN
              </h3>
              <Box
                sx={{
                  display: "flex",
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
                    padding: "12px 24px",
                    border: "1px solid #11243F",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textTransform: "none",
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
                    padding: "12px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textTransform: "none",
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
              sx={{ position: "relative", maxWidth: "900px", height: "450px" }}
            >
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
              <img
                src="/Assets/iPhone 13 Pro.png"
                alt="Hero"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "450px",
                  position: "relative",
                  zIndex: 3,
                }}
              />
            </Grid>
          </Grid>
        </Box>
        {/* FAQ'S  */}
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
        {/* Secutity Checkup  */}
        <Box
          sx={{
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
                  className="wrapping"
                  sx={{
                    maxWidth: 400,
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
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    Welcome New Digital <br /> ERA
                  </Typography>

                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image="/Assets/blog2.png"
                    sx={{ maxWidth: "100px", padding: 0 }}
                  />
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      PayZen launching ceremony in collaboration with
                      Mastercard, marking a new era of seamless and secure
                      payment solutions.
                    </Typography>

                    <CardActions>
                      <Button size="small" sx={{ textTransform: "none" }}>
                        Get Started {">"}
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
              </Box>
              <Card
                className="wrapping"
                sx={{
                  maxWidth: 610,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                  backgroundColor: "#F5F5F5",
                  mt: 1,
                  flexWrap: "nowrap",
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image="/Assets/blog3.png"
                  sx={{ maxWidth: "165px", padding: 0 }}
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
                  sx={{ height: 250, width: "100%", maxWidth: 340 }}
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
