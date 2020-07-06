import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import SignalWifi1BarIcon from '@material-ui/icons/SignalWifi1Bar';
import SignalWifi2BarIcon from '@material-ui/icons/SignalWifi2Bar';
import SignalWifi3BarIcon from '@material-ui/icons/SignalWifi3Bar';
import SignalWifi4BarIcon from '@material-ui/icons/SignalWifi4Bar';
import DoneIcon from '@material-ui/icons/Done';

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
  },
  chip: {
      padding: 10,
      margin: 2,
  }
  
}));

export default function Header() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
            <Grid item>
                <Typography variant='h6' gutterBottom>SKILLS</Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item>
                <Chip 
                    className={classes.chip}  
                    color="primary" 
                    label="Javascript" 
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<SignalWifi1BarIcon />}/>
            </Grid>
            <Grid item>
                <Chip 
                    className={classes.chip}  
                    color="primary" 
                    label="Javascript" 
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<SignalWifi2BarIcon />}/>
            </Grid>
            <Grid item>
                <Chip 
                    className={classes.chip}  
                    color="primary" 
                    label="Javascript" 
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<SignalWifi3BarIcon />}/>
            </Grid>
            <Grid item>
                <Chip 
                    className={classes.chip}  
                    color="primary" 
                    label="Javascript" 
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<SignalWifi4BarIcon />}/>
            </Grid>

            <Grid item>
                {/* <Chip className={classes.chip} color="primary" label="Reactjs" /> */}
               
            </Grid>
            <Grid item>
                <Chip className={classes.chip} color="primary" label="Nodejs" />
            </Grid>
            <Grid item>
                <Chip className={classes.chip} color="primary" label="Mongodb" />
            </Grid>
            <Grid item>
                <Chip className={classes.chip} color="primary" label="AWS" />
            </Grid>
            <Grid item>
                <Chip className={classes.chip} color="primary" label="CSS" />
            </Grid>
            <Grid item>
                <Chip className={classes.chip} color="primary" label="Laravel" />
            </Grid>
            <Grid item>
                <Chip className={classes.chip} color="primary" label="Php" />
            </Grid>
            <Grid item>
                <Chip className={classes.chip} color="primary" label="MySql" />
            </Grid>
        </Grid>
      </Paper>
      
    </div>
  );
}