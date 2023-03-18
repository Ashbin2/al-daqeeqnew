import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography, CardMedia, Card, CardContent } from "@mui/material";
import about from "../image/about.jpg";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="ab">
        <Box
          sx={{
            backgroundImage: `url(${about})`,
            height: "auto",
            backgroundSize: "cover",
          }}
        >
          <Grid container>
            <Grid item  xs={12} justify="space-between">
              <Typography
                textAlign={"center"}
                sx={{
                  color: "white",
                  fontSize: 74,
                  paddingTop: 40,
                  fontWeight: "bold",
                }}
              >
                About Us
              </Typography>
              <Typography
                textAlign={"center"}
                justifyContent="center"
                sx={{
                  color: "white",
                  fontSize: 20,
                  paddingTop: 3,
                  fontWeight: "bold",
                }}
              >
                It is with great pleasure that we would like to introduce our
                company AL DAQEEQ Industrial Plant Equipment and spare parts
                trading. We provide specialized services in the field of
                industrial automation ranging from Oil & Gas,construction,
                medicine, production to manufacturing facilities in UAE .
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Grid
        container
        spacing={5}
        padding={8}
        justifyContent={"center"}
        alignContent={"center"}
        display={"flex"}
      >
        <Grid item xs={12} md={6} lg={4} sm={6}>
          <Card
            sx={{
              maxWidth: 345,
              maxHeight: 300,
              ":hover": {
                boxShadow: "20px 20px 20px #12c2eb",
                background:
                  " linear-gradient(to right top, #f8f9fc, #dae8fc, #b2dafb, #7dcef6, #12c2eb);",
              },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              sx={{ width: "auto", paddingLeft: 15 }}
              image="./images/vision.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"#5d2f92;"}
                fontWeight={"bold"}
              >
                Our Vision
              </Typography>
              <Typography variant="body2" color="black">
                To be recognised as a leading contributor to the Middle East’s
                progressive and evolving IT and security solutions landscape,
                applying innovation and skill through our tailored solutions
                that continually boost business efficiency and performance.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sm={6}>
          <Card
            sx={{
              maxWidth: 345,
              maxHeight: 300,
              ":hover": {
                boxShadow: "20px 20px 20px #12c2eb",
                background:
                  " linear-gradient(to right top, #f8f9fc, #dae8fc, #b2dafb, #7dcef6, #12c2eb);",
              },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              sx={{ width: "auto", paddingLeft: 15 }}
              image="./images/ourm.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"#5d2f92;"}
                fontWeight={"bold"}
              >
                Our Mission
              </Typography>
              <Typography variant="body2" color="black">
                To provide reliable advice, outstanding expertise and a
                dedicated service that harnesses the potential of security and
                proximity technology to meet the complex and diverse
                requirements of our customers.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sm={6}>
          <Card
            sx={{
              maxWidth: 345,
              maxHeight: 300,
              ":hover": {
                boxShadow: "20px 20px 20px #12c2eb",
                background:
                  " linear-gradient(to right top, #f8f9fc, #dae8fc, #b2dafb, #7dcef6, #12c2eb);",
              },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              sx={{ width: "auto", paddingLeft: 15 }}
              image="./images/ourv.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"#5d2f92;"}
                fontWeight={"bold"}
              >
                Our Values
              </Typography>
              <Typography variant="body2" color="black">
                Innovative: Continually abreast of new and emerging
                technologies, products and services that provide customers with
                a state of the art solution. Customer-centric: A dedicated focus
                on providing turn-key projects that meet the current and future
                needs of our customers and in turn, their customers t.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
