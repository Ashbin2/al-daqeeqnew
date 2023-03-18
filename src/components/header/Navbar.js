import {
  AppBar,
  Grid,
  Tabs,
  Toolbar,
  Tab,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Link,
} from "@mui/material";
import { Box } from "@mui/system";
import DrawerComp from "../Drawer/DrawerComp";

import React from "react";

const Navbar = () => {
  const [value, setValue] = React.useState("one");
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <AppBar
        sx={{
          backgroundImage:
            " linear-gradient(to top, #4481eb 0%, #04befe 100%);",
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
               <a href="/"><img src="./images/logo.png" width={"80"} alt="" /></a>
               <Link href="/" underline="none"> {<Typography
                  variant="h4"
                  sx={{ color: "black", fontWeight: "bold" }}
                  
                >
                  AL DAQEEQ
                </Typography>}</Link>
              <DrawerComp />
            </>
          ) : (
            <Grid container sx={{ placeItems: "center" }}>
              <Grid item xs={1}>
                <a href="/"><img src="./images/logo.png" width={"80"} alt="" /></a>
                
              </Grid>
              <Grid item xs={4}>
               <Link href="/" underline="none"> {<Typography
                  variant="h4"
                  sx={{ color: "black", fontWeight: "bold" }}
                  
                >
                  AL DAQEEQ
                </Typography>}</Link>
                
              </Grid>

              <Grid item xs={5}>
                <Tabs value={value} onChange={handleChange} textColor="inherit">
                  <Tab value="one" label="Home" href="/" />
                  <Tab value="two" label="About Us" href="/about" />
                  <Tab value="three" label="Products" href="/Products" />
                  
                  <Tab value="five" label="Contact Us" href="/contact" />
                </Tabs>
              </Grid>
              <Grid item xs={2}>
                <Box display="flex">
                  <Button
                    sx={{
                      marginLeft: "auto",
                      background:
                        "linear-gradient(to right, #24c6dc, #514a9d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */",
                    }}
                    variant="contained"
                    href="/login"
                  >
                    Login
                  </Button>
                  <Button
                    sx={{
                      marginLeft: 1,
                      background:
                        "linear-gradient(to right, #24c6dc, #514a9d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */",
                    }}
                    variant="contained"
                    href="/signup"
                  >
                    SignUp
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
