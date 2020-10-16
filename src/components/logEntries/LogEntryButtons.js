import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Box, Chip, Grid, Typography } from "@material-ui/core";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import HotelIcon from "@material-ui/icons/Hotel";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

const useStyles = makeStyles((theme) => ({
  ToggleButton: {
    height: 80,
  },
  ToggleButtonIcon: {
    marginRight: 5,
  },
}));

function LogEntryButtons(props) {
  const classes = useStyles();
  const [entries, setEntries] = useState(() => []);
  const [superPowerDisabled, setSuperPowerAsDisabled] = useState(true);
  const [resting, setResting] = useState("");
  const [score, setScore] = useState(0);

  const handleEntries = (event, newEntries) => {
    setResting(null);

    // here come the rules
    if (!newEntries.includes("main") || !newEntries.includes("xtra")) {
      setSuperPowerAsDisabled(true);
      if (newEntries.includes("superPower")) {
        for (var i = 0; i < newEntries.length; i++) {
          if (newEntries[i] === "superPower") {
            newEntries.splice(i, 1);
          }
        }
      }
    } else {
      setSuperPowerAsDisabled(false);
    }

    setEntries(newEntries);
  };

  const handleRestingDay = (event, value) => {
    setSuperPowerAsDisabled(true);
    setEntries([]);
    setResting(value);
  };

  useEffect(() => {
    if (resting) {
      setScore(2);
    } else if (entries.length > 0) {
      setScore(entries.length);
    } else {
      setScore(0);
    }
  }, [entries, resting]);

  return (
    <React.Fragment>
      <Box mx={3} mt={3}>
        <Grid container alignItems="center" direction={"column"} spacing={2}>
          <Grid item>
            <ToggleButtonGroup
              className={classes.ToggleButton}
              value={entries}
              onChange={handleEntries}
            >
              <ToggleButton value="main">
                <DirectionsWalkIcon className={classes.ToggleButtonIcon} />
                <Typography>30'</Typography>
              </ToggleButton>
              <ToggleButton value="xtra">
                <SentimentVerySatisfiedIcon
                  className={classes.ToggleButtonIcon}
                />
                <Typography>New healthy habit</Typography>
              </ToggleButton>
              <ToggleButton value="superPower" disabled={superPowerDisabled}>
                <DirectionsWalkIcon className={classes.ToggleButtonIcon} />
                <Typography>60'</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item>
            <ToggleButtonGroup
              className={classes.ToggleButton}
              exclusive
              value={resting}
              onChange={handleRestingDay}
            >
              <ToggleButton value="sickDay">
                <HotelIcon className={classes.ToggleButtonIcon} />
                <Typography>Sick day</Typography>
              </ToggleButton>
              <ToggleButton value="dayOff">
                <BeachAccessIcon className={classes.ToggleButtonIcon} />
                <Typography>Day off</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item>
            <Chip label={score} />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default LogEntryButtons;
