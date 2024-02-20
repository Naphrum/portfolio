import React from "react";
import { Grid, Typography, useTheme, useMediaQuery, Link, Button } from "@mui/material";
import openkitchen from "../../assets/open-kitchen.png";
import cartridgeShelf from "../../assets/cartridge-shelf.png";

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      marginBottom="100px"
    >
      <Grid item>
        <Typography variant="h1" textAlign="center" margin="20px 0px">
          Projects
        </Typography>
      </Grid>
      {isMobile ? (
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          marginBottom="100px"
        >
          <Typography variant="h4" textAlign="center" margin="20px 0px">
            Open Kitchen
          </Typography>
          <Grid item sx={{ width: "77%" }} xs={8} md={3} margin="20px">
            <Typography>
              Open Kitchen, is a great way to create, share, and organize your
              family recipes. Users can also their own "Kitchen" and invite
              other users to it. In Open Kitchen users have the discretion to
              either share recipes publically or privately with their "Kitchen".
              I worked on this project in a group with other HTMElephant
              students and learned about code reviews, creating cards,
              distributing work, and meeting deadlines.
            </Typography>
          </Grid>

          <Grid item xs={8} md={4}>
            <img src={openkitchen} height="180px" margin="20px 0px" />
          </Grid>
          <Grid>
            <Link href="https://github.com/HTMElephant/open-kitchen" underline="none">
              <Button>SEE THE CODE</Button>
            </Link>
          </Grid>
        </Grid>
      ) : (
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          marginBottom="100px"
        >
          <Typography variant="h4" textAlign="center" margin="20px 0px">
            Open Kitchen
          </Typography>
          <Grid item sx={{ width: "30%" }} xs={8} md={3} margin="20px">
            <Typography>
              Open Kitchen, is a great way to create, share, and organize your
              family recipes. Users can also their own "Kitchen" and invite
              other users to it. In Open Kitchen users have the discretion to
              either share recipes publically or privately with their "Kitchen".
              I worked on this project in a group with other HTMElephant
              students and learned about code reviews, creating cards,
              distributing work, and meeting deadlines.
            </Typography>
          </Grid>

          <Grid item xs={8} md={4}>
            <img src={openkitchen} height="400px" margin="20px 0px" />
          </Grid>
          <Grid>
            <Link href="https://github.com/HTMElephant/open-kitchen" underline="none">
              <Button>SEE THE CODE</Button>
            </Link>
          </Grid>
        </Grid>
      )}

      {isMobile ? (
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" textAlign="center" margin="20px 0px">
            Cartridge Shelf
          </Typography>
          <Grid item sx={{ width: "77%" }} xs={8} md={3} margin="20px">
            <Typography>
              Cartridge Shelf, is a way to keep track of your collection of
              games. Users can add games to the their library or if they want to
              remove them they have the option to do so as well. User can also
              assign a star rating to their favorite or least favorite games.
              This helped me learn full CRUD with a back end and client side of
              the app.
            </Typography>
          </Grid>

          <Grid item xs={8} md={4}>
            <img src={cartridgeShelf} height="180px" margin="20px 0px" />
          </Grid>
          <Grid>
            <Link href="https://github.com/Naphrum/Cartridge-Shelf" underline="none">
              <Button>SEE THE CODE</Button>
            </Link>
          </Grid>
        </Grid>
      ) : (
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" textAlign="center" margin="20px 0px">
            Cartridge Shelf
          </Typography>
          <Grid item sx={{ width: "30%" }} xs={8} md={3} margin="20px">
            <Typography>
              Cartridge Shelf, is a way to keep track of your collection of
              games. Users can add games to the their library or if they want to
              remove them they have the option to do so as well. User can also
              assign a star rating to their favorite or least favorite games.
              This helped me learn full CRUD with a back end and client side of
              the app.
            </Typography>
          </Grid>

          <Grid item xs={8} md={4}>
            <img src={cartridgeShelf} height="400px" margin="20px 0px" />
          </Grid>
          <Grid>
            <Link href="https://github.com/Naphrum/Cartridge-Shelf" underline="none">
              <Button>SEE THE CODE</Button>
            </Link>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Projects;
