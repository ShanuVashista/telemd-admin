import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles({
  root: {
    // minWidth: 155,
    background: "#d3d3d3",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ title, appointments, Titleicon }) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid className={classNames("p-2 border")}>
      <Grid container className="p-2-all" wrap="nowrap">
        <Grid>{Titleicon}</Grid>
        <Typography variant="h6" component={Grid} item xs>
          {title}
        </Typography>
      </Grid>

      <Typography variant="h5" component="h2">
        {appointments}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Appointments
      </Typography>
    </Grid>
  );
}
