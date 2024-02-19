import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const CollapsedNavbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route);
    setOpenDrawer(false);
  };
  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        width="100vw"
      >
        <List>
          <ListItem onClick={() => handleNavigate("")}>
            <ListItemText>
              <Typography textAlign="center">HOME</Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => handleNavigate("about-me")}>
            <ListItemText>
              <Typography textAlign="center">ABOUT ME</Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => handleNavigate("projects")}>
            <ListItemText>
              <Typography textAlign="center">PROJECTS</Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => handleNavigate("contact")}>
            <ListItemText>
              <Typography textAlign="center">CONTACT</Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Typography textAlign="center" >
                <CloseIcon />
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Grid
        container
        padding="45px 50px"
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
