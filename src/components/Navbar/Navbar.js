import React from "react";
import { Grid, Button } from "@mui/material";

const Navbar = () => {
  return (
    <Grid
    container
    padding="20px"
    direction="row"
    justifyContent="flex-end"
    alignItems="center"
    height="88px"
    >
      <Grid item>
        <Button>About Me</Button>
      </Grid>
      <Grid item>
        <Button>Projects</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" >Contact</Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
