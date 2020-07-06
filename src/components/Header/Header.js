import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HeaderDialog from './HeaderDialog';
import {connect} from 'react-redux';

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
    cursor: 'pointer'
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

const Header = (props) => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);

  let dialog = null;
  if(dialogOpen) {
    dialog = <HeaderDialog open={dialogOpen} />;
  }

  return (
    <div className={classes.root}>
        <Paper className={classes.paper} onClick={() => setDialogOpen(!dialogOpen)}>
          
          <Grid container >
              <Grid item>
                  <Typography className={classes.nameColor} variant='h4' gutterBottom>{props.name}</Typography>
              </Grid>
          </Grid>
          <Grid container>
              <Grid item>
                  <Typography className={classes.professionColor} variant='h6' gutterBottom>{props.profession}</Typography>
              </Grid>
          </Grid>
          <Grid container>
              <Grid item>
                  <Typography className={classes.nameColor} variant='subtitle2' gutterBottom>{props.brief}</Typography>
              </Grid>
          </Grid>
        </Paper> 
        {dialog}     
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.headerState.name,
    profession: state.headerState.profession,
    brief: state.headerState.brief,
  }
}

export default connect(mapStateToProps,null)(Header);