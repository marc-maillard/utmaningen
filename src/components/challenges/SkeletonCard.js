import React from 'react';

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton"

function SkeletonCard(props) {
    return (
        <Grid item>
      <Card>
          <CardHeader
            avatar={<Skeleton animation="wave" variant="circle" width={40} height={40} />}
            title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
            subheader={<Skeleton animation="wave" height={10} width="40%" />}
          />
      </Card>
    </Grid>
    );
}

export default SkeletonCard;