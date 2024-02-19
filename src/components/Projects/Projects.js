import React from "react";
import {
  Grid,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
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
    >
      <Grid item>
        <Typography variant="h2" textAlign="center" margin="20px 0px">
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
            <img src={cartridgeShelf} height="180px" margin="20px 0px" />
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
            <img src={cartridgeShelf} height="400px" margin="20px 0px" />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Projects;
