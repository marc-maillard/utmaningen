import React from "react";

import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ChallengeCard from "./ChallengeCard";
import FabAddButton from "./FabAddButton";

const useStyles = makeStyles((theme) => ({
  Fab: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
}));

function handleClick(itemKey) {
  console.log("item clicked ", itemKey);
}

function Boxngrids(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box mx={3} mt={3}>
        <Grid container direction={"column"} spacing={2}>
          <ChallengeCard
            onClick={() => handleClick("1")}
            avatar={"MA"}
            title={"Marc och Anna sept-okt 2020"}
            subheader={"September 14, 2020 - October 31 2020"}
          ></ChallengeCard>
          <ChallengeCard
            onClick={() => handleClick("2")}
            avatar={"MA"}
            title={"Marc och Anna sept-okt 2020"}
            subheader={"September 14, 2020 - October 31 2020"}
          ></ChallengeCard>
          <ChallengeCard
            onClick={() => handleClick("3")}
            avatar={"MA"}
            title={"Marc och Anna sept-okt 2020"}
            subheader={"September 14, 2020 - October 31 2020"}
          ></ChallengeCard>
        </Grid>
      </Box>
      <FabAddButton className={classes.Fab} />
    </React.Fragment>
  );
}

export default Boxngrids;
