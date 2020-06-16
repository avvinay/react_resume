import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LensIcon from '@material-ui/icons/Lens';
import LensOutlinedIcon from '@material-ui/icons/LensOutlined';



const useStyles = makeStyles((theme) => ({
   root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'white',
    border: 0,
    borderRadius: 0,
    margin: 'auto',
    boxShadow: 0,
  },
  chip: {
      padding: 10,
      margin: 2,
  }
  
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
            <Grid item>
                <Typography variant='h6' gutterBottom>LANGUAGES</Typography>
            </Grid>
        </Grid>
        <Grid>
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>English</Typography>
                </Grid>
                <Grid item xs={8}>
                    <LensIcon />
                    <LensIcon />
                    <LensIcon />
                    <LensIcon />
                    <LensOutlinedIcon />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>English</Typography>
                </Grid>
                <Grid item xs={8}>
                    <LensIcon />
                    <LensIcon />
                    <LensIcon />
                    <LensIcon />
                    <LensOutlinedIcon />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>English</Typography>
                </Grid>
                <Grid item xs={8}>
                    <LensIcon />
                    <LensIcon />
                    <LensIcon />
                    <LensIcon />
                    <LensOutlinedIcon />
                </Grid>
            </Grid>
        </Grid>
        
        
      </Paper>
      
    </div>
  );
}