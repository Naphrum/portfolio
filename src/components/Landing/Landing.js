import React from "react";
import { Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import Typewriter from "typewriter-effect";
import logo from "../../assets/logo.svg";

const Landing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
    >
      {isMobile ? (
        <Grid item>
        <Typography variant="h2" textAlign="center" width>
          Nathan
        </Typography>
        <Typography variant="h2" textAlign="center" width>
          Van Orman
        </Typography>
      </Grid>
      ):(
        <Grid item>
        <Typography variant="h1" textAlign="center" width>
          Nathan Van Orman
        </Typography>
      </Grid>
      )}
      <Grid item marginBottom="60px">
        <Typography variant="h4" color="white">
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "Student",
                "CAD PV Engineer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
      </Grid>
      {isMobile ? (
        <Grid item>
          <img src={logo} height="300px" />
        </Grid>
      ) : (
        <Grid item>
          <img src={logo} height="400px" />
        </Grid>
      )}
    </Grid>
  );
};

export default Landing;
