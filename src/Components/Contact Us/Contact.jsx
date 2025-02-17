import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Contact = () => {
  const cards = [
    {
      image: "/Assets/phone.png",
      title: "+92 - 42 - 99000000",
    },
    {
      image: "/Assets/email.png",
      title: "support@payzen.pk",
    },
    {
      image: "/Assets/location.png",
      title: "12th Floor Arfa Software Technology Park, 346-B, Lahore",
    },
    {
      image: "/Assets/calendar.png",
      title: "support@payzen.pk",
    },
  ];

  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Contact Us</h2>
          <p>12th Floor, Arfa Software Technology Park, Lahore</p>

          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.75969726447!2d74.33989572430164!3d31.475795899345233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190427303d1d9b%3A0x98af47ff5799036e!2zQXJmYSBJVCBUb3dlciDYp9ix2YHYuSDYotim24wg2bnbjCDZudin2YjYsQ!5e0!3m2!1sen!2s!4v1739266316283!5m2!1sen!2s"
            width="100%"
            height="496"
            style={{ maxWidth: "1160px", margin: "20px 0", border: "none" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Grid container spacing={5}>
              {cards.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    sx={{
                      textAlign: "center",
                      padding: "10px",
                      backgroundColor: "#F5F5F5",
                      borderRadius: "20px",
                      width: "283px",
                      height: "152px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{ width: "50px", margin: "auto", padding: "10px" }}
                    />
                    <CardContent>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#6D6D6D",
                          fontSize: "14px",
                          fontWeight: 400,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "#11243F",
                fontSize: { xs: "35px", md: "45px" },
                fontWeight: 700,
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: 400, color: "#525252" }}
            >
              Our PayZen support team is here to answer your questions and
              assist you. Reach out to us via phone, email, or visit us in
              person at our address (if applicable).
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignItems="center"
          sx={{ margin: "20px 0" }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "#11243F",
                fontSize: { xs: "35px", md: "45px" },
                fontWeight: 700,
              }}
            >
              Lets Talk
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#525252",
                mb: 3,
              }}
            >
              Your feedback is Important to us. We’re here to answer your <br />
              questions and offer personalized support. Stay connected <br />{" "}
              and let us help you with all your needs.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="form"
              sx={{
                maxWidth: "600px",
                margin: "auto",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your name"
                    sx={{
                      borderRadius: "20px",
                      "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="email"
                    variant="outlined"
                    placeholder="Enter Email Address"
                    sx={{
                      borderRadius: "20px",
                      "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your name"
                    sx={{
                      borderRadius: "20px",
                      "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="email"
                    variant="outlined"
                    placeholder="Enter Email Address"
                    sx={{
                      borderRadius: "20px",
                      "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                    }}
                  />
                </Grid>
              </Grid>

              <TextareaAutosize
                minRows={6}
                placeholder="Some text..."
                style={{
                  marginTop: "20px",
                  width: "100%",
                  padding: "12px 20px",
                  boxSizing: "border-box",
                  border: "2px solid #ccc",
                  borderRadius: "4px",
                  backgroundColor: "#f8f8f8",
                  fontSize: "16px",
                }}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: "#1253A4",
                  borderRadius: "30px",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "16px",
                  padding: "12px 24px",
                  "&:hover": { bgcolor: "#0f4688" },
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
