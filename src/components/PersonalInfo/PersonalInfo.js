import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { connect } from 'react-redux';
import SocialMedia from './SocialMedia/SocialMedia';
import PersonalInfoDialog from './PersonalInfoDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    cursor: 'pointer'
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
  },

}));




const PersonalInfo = (props) => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);

  let dialog = null;
  if(dialogOpen) {
      dialog = <PersonalInfoDialog open={dialogOpen} />
  }

  let socialMedia = props.social_media.length > 0 ? props.social_media.forEach((s_media) => {
    return (
      <SocialMedia type={s_media.type} url={s_media.url} />
    )
  }) : console.log("its empty");

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
            <Grid container>
                <Grid item xs={1}>
                    <MailOutlineIcon />
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.textTop} variant='body2'>{props.email}</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={6}>
            <Grid container>
                <Grid item xs={1}>
                    <PhoneAndroidIcon />
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.textTop} variant='body2' gutterBottom>{props.mobile_number}</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={6}>
            <Grid container>
                <Grid item xs={1}>
                    <LocationOnIcon />
                </Grid>
                <Grid item xs={5}>
                    <Typography className={classes.textTop} variant='body2'>{props.location}</Typography>
                </Grid>
            </Grid>
        </Grid>
        {/* looping through  social media */}
        {socialMedia}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root} >
      <Paper className={classes.paper} onClick={() => setDialogOpen(!dialogOpen)}>
        <Grid container >
            <FormRow />
         </Grid>
      </Paper>
      {dialog}
    </div>
  );
}


const mapStateToProps = state => {
    return {
        email: state.personalInfoState.email,
        mobile_number: state.personalInfoState.mobile_number,
        location: state.personalInfoState.location,
        social_media: state.personalInfoState.social_media
    }
}

export default connect(mapStateToProps, null)(PersonalInfo);