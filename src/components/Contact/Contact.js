import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  Icon,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qj4e52c", "template_uugzqz1", form.current, {
        publicKey: "RsUOXh8exREpjN1CL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED..", error.text);
        }
      );
  };

  return (
    <Grid
      container
      spacing={{ xs: 3, md: 6 }}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
        overflow: "hidden",
      }}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <form ref={form} onSubmit={sendEmail}>
        <Grid item>
          <Typography variant="h2" marginBottom="50px" textAlign="center">
            Contact
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="name"
            name="user_name"
            color="primary"
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="email"
            name="user_email"
            color="primary"
          />
        </Grid>
        <Grid item>
          <TextField
            multiline
            rows={6}
            label="message"
            name="message"
            color="primary"
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" value="Send">
            Submit
          </Button>
        </Grid>
      </form>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginTop="70px"
      >
        <Grid item>
          <Typography variant="h4">Social Links</Typography>
        </Grid>
        <Grid item justifyContent="center" alignItems="center" margin="10px">
          <Link href="https://github.com/Naphrum" underline="none">
            <IconButton size="large">
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/nathan-van-orman-6a309b167/" underline="none">
          <IconButton size="large">
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
