import { Email, LocationOn, Phone } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container>
        <Box sx={{ padding: "40px 0" }}>
          <Grid
            container
            spacing={{ sm: 0, md: 0 }}
            sx={{
              minHeight: "300px",
              backgroundImage: `url('/Assets/footer_bg.png')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "#fff",
              padding: { xs: "30px", md: "50px" },
              borderRadius: "10px",
              margin: "0 auto",
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "22px", md: "24px" },
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "16px",
                }}
              >
                Follow Us
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                {["insta", "facebook", "twitter", "linkedin", "youtube"].map(
                  (icon) => (
                    <Box
                      key={icon}
                      component="img"
                      src={`/Assets/${icon}.png`}
                      alt={`${icon} icon`}
                      sx={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "0.3s",
                        backgroundColor: "#fff",
                        padding: "4px",
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                    />
                  )
                )}
              </Box>
            </Grid>

            {/* Subscription Box */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "22px", md: "28px" },
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                Join Hands with PayZen
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: 400,
                  color: "#ffffff",
                  marginBottom: "20px",
                }}
              >
                Your Gateway to Financial Success
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: "600px",
                  background: "#fff",
                  borderRadius: "50px",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
              >
                <TextField
                  placeholder="Enter Email Address"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    sx: {
                      borderRadius: "50px",
                      background: "#fff",
                      "& fieldset": { border: "none" },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    background: "linear-gradient(135deg, #2A6FD4, #1A4E96)",
                    color: "#fff",
                    height: "48px",
                    px: 3,
                    "&:hover": {
                      background: "linear-gradient(135deg, #1A4E96, #2A6FD4)",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Footer Links & Contact Info */}
        <Box sx={{ background: "#fff", padding: "40px 0" }}>
          <Grid
            container
            spacing={2}
            sx={{ maxWidth: "1200px", margin: "auto", position: "relative" }}
          >
            {[
              {
                content: (
                  <>
                    <Link to="/">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <img
                          src="/Assets/coin.png"
                          alt="logo"
                          style={{ width: "40px", height: "40px" }}
                        />
                        <img
                          style={{ height: "30px" }}
                          src="/Assets/plogo.png"
                          alt="PayZen"
                        />
                      </Box>
                    </Link>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#555",
                        marginTop: "8px",
                      }}
                    >
                      SAFE | HASSLE-FREE PAYMENT COLLECTIONS
                    </Typography>
                  </>
                ),
              },
              {
                title: "Quick Links",
                links: ["About Us", "Vision", "Payment Channels"],
              },
              {
                title: "Support",
                links: ["Contact Us", "Terms and Conditions", "FAQs"],
              },
              {
                title: "Reach Us",
                contact: [
                  {
                    icon: <Phone sx={{ color: "#555", fontSize: "20px" }} />,
                    text: "+92-42-99000000 | Ext: 1209",
                  },
                  {
                    icon: <Email sx={{ color: "#555", fontSize: "20px" }} />,
                    text: "info@payzen.pk",
                  },
                  {
                    icon: (
                      <LocationOn sx={{ color: "#555", fontSize: "20px" }} />
                    ),
                    text: "12th Floor, Arfa Software Technology Park, Lahore, Punjab 54000",
                  },
                ],
              },
            ].map((section, index) => (
              <Grid
                item
                xs={12}
                md={3}
                sx={{ pr: 2, position: "relative" }}
                key={index}
              >
                {section.title && (
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "16px", fontWeight: "600", color: "#333" }}
                  >
                    {section.title}
                  </Typography>
                )}
                {section.links &&
                  section.links.map((link, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      sx={{ color: "#555", cursor: "pointer", mt: 1 }}
                    >
                      {link}
                    </Typography>
                  ))}
                {section.contact &&
                  section.contact.map((item, idx) => (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        mt: 1,
                      }}
                      key={idx}
                    >
                      {item.icon}
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                {section.content && section.content}

                {/* Horizontal Divider for Small Screens */}
                {index < 3 && (
                  <Divider
                    sx={{ display: { xs: "block", md: "none" }, my: 2 }}
                  />
                )}

                {/* Vertical Divider for Large Screens */}
                {index < 3 && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      right: 0,
                      top: 0,
                      height: "100%",
                    }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          py: 2,
          backgroundColor: "#1253A4",
          color: "#fff",
          fontWeight: 700,
          fontSize: "14px",
        }}
      >
        © 2025 - Powered by Punjab Information Technology Board
      </Typography>
    </>
  );
};

export default Footer;
