import React from "react";
import { Grid, Button, IconButton, useTheme, useMediaQuery } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import CollapsedNavbar from "../CollapsedNavbar";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? (
        <CollapsedNavbar />
      ) : (
        <Grid
          container
          padding="45px 275px"
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          height="88px"
          spacing="10px"
          marginBottom="80px"
          xs={{ paddingRight: "25px"}}
        >
          <Grid item justifyContent="flex-start">
            <Link to="/">
              <IconButton aria-label="home">
                <HomeIcon color="primary" />
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/about-me">
              <Button>About Me</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/projects">
              <Button>Projects</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/contact">
              <Button variant="outlined">Contact</Button>
            </Link>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Navbar;
