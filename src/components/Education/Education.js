import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LensIcon from '@material-ui/icons/Lens';


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
                <Typography variant='h6' gutterBottom>EDUCATION</Typography>
            </Grid>
        </Grid>
        <Grid>
            <Grid container>
                <Grid item>
                    <Typography variant='h6' gutterBottom>B.Tech - Computer Science</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <Typography variant='h6' gutterBottom>RGUKT - IIIT</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={10}>
                    <Typography color="primary"  variant='body2' gutterBottom><Box fontStyle="italic">07/2011 - 04/2015</Box></Typography>
                </Grid>
              
                <Grid item xs={2}>
                    <Typography color="primary"  variant='body2' gutterBottom><Box fontStyle="italic">CGPA 7.94</Box></Typography>
                </Grid>
            </Grid>
        </Grid>
        <br/>
        <Grid>
            <Grid container>
                <Grid item>
                    <Typography variant='h6' gutterBottom>B.Tech - Computer Science</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <Typography variant='h6' gutterBottom>RGUKT - IIIT</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={10}>
                    <Typography color="primary"  variant='body2' gutterBottom><Box fontStyle="italic">07/2011 - 04/2015</Box></Typography>
                </Grid>
              
                <Grid item xs={2}>
                    <Typography color="primary"  variant='body2' gutterBottom><Box fontStyle="italic">CGPA 7.94</Box></Typography>
                </Grid>
            </Grid>
        </Grid>
        <br/>
        <Grid>
            <Grid container>
                <Grid item>
                    <Typography variant='h6' gutterBottom>B.Tech - Computer Science</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <Typography variant='h6' gutterBottom>RGUKT - IIIT</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={10}>
                    <Typography color="primary"  variant='body2' gutterBottom><Box fontStyle="italic">07/2011 - 04/2015</Box></Typography>
                </Grid>
              
                <Grid item xs={2}>
                    <Typography color="primary"  variant='body2' gutterBottom><Box fontStyle="italic">CGPA 7.94</Box></Typography>
                </Grid>
            </Grid>
        </Grid>
        <br/>
               
        
      </Paper>
      
    </div>
  );
}