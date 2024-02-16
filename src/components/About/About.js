import React from "react";
import { Grid, Typography } from "@mui/material";
import vanorman from "../../assets/vanorman.jpg";

const About = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="center" marginBottom="50px">
          About Me
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        spacing={14}
      >
        <Grid item xs={10} md={4} minWidth="33%">
          <Typography variant="h6" color="white">
            I am a student Web Developer with HTMElephant that is always looking
            to make something new! I love working on projects and I'm always
            looking to start a new one. I have dabbled in music production,
            soldering, game dev, and pc building and enjoy trying out new things.
          </Typography>
        </Grid>
        <Grid item xs={10} md={2}>
          <Typography variant="h4" color="primary">
            Skills
          </Typography>
          <ul display="flex" alignItems="center" justifyContent="center">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MassiveJS</li>
            <li>SQL</li>
          </ul>
        </Grid>
        <Grid item xs={10} md={4}>
          <img src={vanorman} height="350px" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
