import React from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function FabAddButton(props) {
  const classes = props.className;
  return (
    <Fab className={classes} color="secondary" aria-label="add">
      <AddIcon />
    </Fab>
  );
}

export default FabAddButton;
