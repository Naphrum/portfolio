import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const CollapsedNavbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer 
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        width="100vw"
      >
        <List justifyContent='center' alignItems='center'>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={{textDecoration: "none", color: "#fff"}} path="/">HOME</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={{textDecoration: "none", color: "#fff"}} path="/about-me">ABOUT ME</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={{textDecoration: "none", color: "#fff"}} path="/projects">PROJECTS</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={{textDecoration: "none", color: "#fff"}} path="/contact">CONTACT</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <CloseIcon />
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Grid
        container
        padding="45px 75px"
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        height="88px"
        spacing="10px"
        marginBottom="15px"
      >
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon color="primary" />
        </IconButton>
      </Grid>
    </>
  );
};

export default CollapsedNavbar;
