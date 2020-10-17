import React from "react";

import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

function DrawerMenu(props) {
  const menuItems = [
    {
      id: 1,
      title: "Challenges",
      route: "challenges",
      icon: FilterHdrIcon,
      iconColor: props.theme.palette.primary.main,
    },
    {
      id: 2,
      title: "Log book",
      route: "log",
      icon: NoteAddIcon,
      iconColor: props.theme.palette.secondary.main,
    },
    {
      id: 3,
      title: "Login",
      route: "login",
      icon: NoteAddIcon,
      iconColor: props.theme.palette.secondary.main,
    },
    {
      id: 4,
      title: "Logout",
      route: "logout",
      icon: NoteAddIcon,
      iconColor: props.theme.palette.secondary.main,
    },
  ];

  return (
    <SwipeableDrawer
      anchor="left"
      open={props.open}
      onClose={props.toggleDrawer(false)}
      onOpen={props.toggleDrawer(true)}
    >
      <List>
        {menuItems.map((menuItem) => (
          <ListItem
            key={menuItem.id}
            button
            onClick={props.toggleDrawer(false, {
              route: menuItem.route,
              title: menuItem.title,
            })}
          >
            <ListItemIcon>
              <menuItem.icon htmlColor={menuItem.iconColor} />
            </ListItemIcon>
            <ListItemText primary={menuItem.title} />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );
}

export default DrawerMenu;
