import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { CardActionArea, Grid } from "@material-ui/core";

function ChallengeCard(props) {
  console.log();
  return (
    <Grid item>
      <Card>
        <CardActionArea onClick={props.onClick}>
          <CardHeader
            avatar={<Avatar aria-label="recipe">{props.avatar}</Avatar>}
            title={props.title}
            subheader={props.subheader}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default ChallengeCard;
