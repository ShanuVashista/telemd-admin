import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles({
  root: {
    // minWidth: 155,
    background: "#d3d3d3"
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

export default function UserCard({ title, appointments, Titleicon }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid className={classNames("p-2 border")}>
      <Grid container className='p-2-all' wrap='nowrap' >
        <Grid>{Titleicon}</Grid>
        <Typography variant="h6" component={Grid} item xs>
          {title}
        </Typography>
      </Grid>
      <Grid container className='p-2-all' wrap='nowrap'>
        <Typography component="h6">
          Total : 
        </Typography>
        <Typography>
          5
        </Typography>
      </Grid>

      <Grid container className='p-2-all' wrap='nowrap'>
        <Typography component="h6">
          Corporate : 
        </Typography>
        <Typography>
          10
        </Typography>
      </Grid>
      
      <Grid container className='p-2-all' wrap='nowrap'>
        <Typography component="h6">
          Pending : 
        </Typography>
        <Typography>
          10
        </Typography>
      </Grid>
    </Grid>
  );
}
