import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // minWidth: 155,
    background:"#d3d3d3"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function UserCard({title,appointments}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {title}
          <hr></hr>
        </Typography>
        <Typography component="h6">
          Total :
        </Typography>
        <Typography component="h6">
          Corporate :
        </Typography>
        <Typography component="h6">
          Pending :
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
        </Typography> */}
      </CardContent>
    </Card>
  );
}
