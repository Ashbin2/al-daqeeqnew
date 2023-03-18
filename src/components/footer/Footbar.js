import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LoginIcon from "@mui/icons-material/Login";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import BusinessIcon from "@mui/icons-material/Business";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { yellow } from "@mui/material/colors";
const Footbar = () => {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to top, #4481eb 0%, #04befe 100%);",
      }}
    >
      <Grid
        container
        spacing={0}
        display={"flex"}
        justifyContent={"center"}
        color={"white"}
        alignItems={"center"}
        direction={"row"}
      >
        <Grid
          item
          xs={12}
          ms={6}
          md={6}
          lg={3}
          display={"flex"}
          justifyContent={"center"}
          direction={"column"}
          alignItems={"center"}
        >
          <Typography variant="h5" sx={{ color: "black", fontWeight: "bold" }}>
            Contact Us
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Deria, Dubai , UAE" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ContactPhoneIcon />
              </ListItemIcon>
              <ListItemText primary="Call Center: +971-547421416" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Mail:aldaqeeqsales@gmail.com" />
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          xs={12}
          ms={6}
          md={6}
          lg={3}
          display={"flex"}
          justifyContent={"center"}
          direction={"column"}
          alignItems={"center"}
        >
          <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
            Useful Links
          </Typography>
          <List>
            <ListItemButton href="/products">
              <ListItemIcon>
                <ProductionQuantityLimitsIcon />
              </ListItemIcon>
              <ListItemText primary="Product" />
            </ListItemButton>
            <ListItemButton href="/about">
              <ListItemIcon>
                <HomeRepairServiceIcon />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItemButton>

            <ListItemButton href="/login">
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItemButton>
          </List>
        </Grid>
        <Grid
          item
          xs={12}
          ms={6}
          md={6}
          lg={3}
          display={"flex"}
          justifyContent={"center"}
          direction={"column"}
          alignItems={"center"}
        >
          <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
            Business Hours
          </Typography>
          <table>
            <tbody>
              <tr>
                <th>Mon:</th>
                <td>
                  <span>9:00 AM – 5:30 PM</span>
                </td>
              </tr>
              <tr>
                <th>Tue:</th>
                <td>
                  <span>9:00 AM – 5:30 PM</span>
                </td>
              </tr>
              <tr>
                <th>Wed:</th>
                <td>
                  <span>9:00 AM – 5:30 PM</span>
                </td>
              </tr>
              <tr>
                <th>Thu:</th>
                <td>
                  <span>9:00 AM – 5:30 PM</span>
                </td>
              </tr>
              <tr>
                <th>Fri:</th>
                <td>
                  <span>9:00 AM – 5:30 PM</span>
                </td>
              </tr>
              <tr>
                <th>Sat:</th>
                <td>
                  <span>9:00 AM – 5:30 PM</span>
                </td>
              </tr>
              <tr>
                <th>Sun:</th>
                <td>
                  <span>Holiday</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
        <Grid
          item
          xs={12}
          ms={6}
          md={6}
          lg={3}
          display={"flex"}
          justifyContent={"center"}
          direction={"column"}
          alignItems={"center"}
        >
          <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
            Business Hours
          </Typography>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <FacebookTwoToneIcon
                  sx={{ color: yellow[500] }}
                  fontSize="large"
                />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <TwitterIcon sx={{ color: yellow[500] }} fontSize="large" />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <InstagramIcon sx={{ color: yellow[500] }} fontSize="large" />
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footbar;
