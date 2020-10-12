import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import history from "../History";
import DrawerMenu from "./DrawerMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  offset: {
    ...theme.mixins.toolbar,
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const [openState, setOpenState] = useState(false);
  const [title, setTitle] = useState("Challenges");

  const toggleDrawer = (open, target) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenState(open);
    console.log("target: ", target);
    console.log("new togglestate: ", open);
    if (
      target &&
      target.route &&
      target.title &&
      target.route !== "" &&
      target.title !== ""
    ) {
      setTitle(target.title);
      const newTarget = "/" + target.route;
      console.log("new target: ", newTarget);
      history.push(newTarget);
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerMenu
        open={openState}
        toggleDrawer={toggleDrawer}
        theme={props.theme}
      />
      <div className={classes.offset} theme={props.theme} />
    </div>
  );
}
