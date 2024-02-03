import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Grid
      container
      padding="45px"
      paddingRight="275px"
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      height="88px"
      spacing="10px"
      marginBottom="80px"
    >
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
  );
};

export default Navbar;
