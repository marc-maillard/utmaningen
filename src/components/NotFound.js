import React from "react";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";

import WarningIcon from "@material-ui/icons/Warning";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  warning: {
    color: theme.palette.getContrastText(theme.palette.warning.main),
    backgroundColor: theme.palette.warning.main,
  },
}));

function NotFound() {
  const classes = useStyles();
  return (
    <Box mx={6} mt={3}>
      <Card>
        <CardHeader
          title="404 page not found"
          avatar={
            <Avatar className={classes.warning}>
              <WarningIcon />
            </Avatar>
          }
        />
        <CardContent>
          <Typography>
            We are sorry but the page you are looking for does not exist.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default NotFound;
