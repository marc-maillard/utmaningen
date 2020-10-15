import React, {useState, useEffect} from "react";

import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { format } from "date-fns";
import {sv} from "date-fns/locale"
import axios from "axios";

import ChallengeCard from "./ChallengeCard";
import SkeletonCard from "./SkeletonCard";
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

function formatSubheader(cardItem) {
  if (cardItem && cardItem.date_start && cardItem.date_end){
    
    return format(new Date(cardItem.date_start), 'PPP', {locale: sv}) + " - " + format(new Date(cardItem.date_end), 'PPP', {locale: sv});
  }
  return "";
}

function Boxngrids(props) {
  const classes = useStyles();

  const [cardItems, setCardItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardItems = async () => {

      const result = await axios(process.env.REACT_APP_API_URL + "challenges");
      setCardItems(result.data);
      setLoading(false);
    };
    fetchCardItems();
  }, []);

  return (
    <React.Fragment>
      <Box mx={3} mt={3}>
        <Grid container direction={"column"} spacing={2}>
          {loading? <React.Fragment><SkeletonCard/><SkeletonCard/><SkeletonCard/></React.Fragment> : cardItems.map((cardItem) => (
            <ChallengeCard
            key={cardItem._id}
            onClick={() => handleClick(cardItem._id)}
            avatar={cardItem.shortTitle}
            title={cardItem.title}
            subheader= {formatSubheader(cardItem)} />
          ))}
        </Grid>
      </Box>
      <FabAddButton className={classes.Fab} />
    </React.Fragment>
  );
}

export default Boxngrids;
