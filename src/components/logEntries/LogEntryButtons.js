import React, { useEffect, useState } from "react";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Chip, Typography } from "@material-ui/core";

function LogEntryButtons(props) {
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
      <ToggleButtonGroup value={entries} onChange={handleEntries}>
        <ToggleButton value="main">
          <Typography>30'</Typography>
        </ToggleButton>
        <ToggleButton value="xtra">
          <Typography>Xtra</Typography>
        </ToggleButton>
        <ToggleButton value="superPower" disabled={superPowerDisabled}>
          <Typography>60'</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup exclusive value={resting} onChange={handleRestingDay}>
        <ToggleButton value="sickDay">
          <Typography>Sick day</Typography>
        </ToggleButton>
        <ToggleButton value="dayOff">
          <Typography>Day off</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      <Chip label={score} />
    </React.Fragment>
  );
}

export default LogEntryButtons;
