import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#374458',
    border: 0,
    borderRadius: 0,
    marginTop: 10,
    margin: 'auto',
    // maxWidth: 500,
  },
  nameColor: {
      color: 'white'
  },
  briefColor: {
      color: 'black',
  },
  professionColor: {
      color: '#4f90cd'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container >
            <Grid item>
                <Typography className={classes.nameColor} variant='h4' gutterBottom>Venkata Vinay Allaka</Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item>
                <Typography className={classes.professionColor} variant='h6' gutterBottom>Software Developer</Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item>
                <Typography className={classes.nameColor} variant='subtitle2' gutterBottom>To strive for excellence in the field of software development – with dedication, focus, proactive approach, positive attitude and passion.</Typography>
            </Grid>
        </Grid>
      </Paper>
      
    </div>
  );
}