import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#2b343f',
    border: 0,
    borderRadius: 0,
    margin: 'auto',
    color: 'white'
  },
  textTop: {
      marginTop: 3,
  }
}));

export default function PersonalInfo() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
            <Grid container>
                <Grid item xs={1}>
                    <MailOutlineIcon />
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.textTop} variant='body2'>allakavenkatvinay@gmail.com</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={6}>
            <Grid container>
                <Grid item xs={1}>
                    <PhoneAndroidIcon />
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.textTop} variant='body2' gutterBottom>+91-9739289525</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={6}>
            <Grid container>
                <Grid item xs={1}>
                    <LocationOnIcon />
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.textTop} variant='body2'>Bangalore, IN</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={6}>
            <Grid container>
                <Grid item xs={1}>
                    <LinkedInIcon />
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.textTop} variant='body2' gutterBottom>www.linkedin.com</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={6}>
            <Grid container>
                <Grid item xs={1}>
                    <GitHubIcon />
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.textTop} variant='body2'>www.github.com</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={6}>
            <Grid container>
                <Grid item xs={1}>
                    <FacebookIcon />
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.textTop} variant='body2' gutterBottom>www.facebook.com</Typography>
                </Grid>
            </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container >
            <FormRow />
         </Grid>
      </Paper>
    </div>
  );
}