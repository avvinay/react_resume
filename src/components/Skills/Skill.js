import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import SignalWifi1BarIcon from '@material-ui/icons/SignalWifi1Bar';
import SignalWifi2BarIcon from '@material-ui/icons/SignalWifi2Bar';
import SignalWifi3BarIcon from '@material-ui/icons/SignalWifi3Bar';
import SignalWifi4BarIcon from '@material-ui/icons/SignalWifi4Bar';


const useStyles = makeStyles((theme) => ({
   chip: {
       padding: 10,
       margin: 2,
   }
 }));


const Skill = (props) => {

    const classes = useStyles();

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    let level = null;
    
    switch(props.level) {
        case 'beginner': 
          level = <SignalWifi1BarIcon />;
          break;
        case 'medium': 
          level = <SignalWifi2BarIcon />;
          break;
        case 'expert': 
          level = <SignalWifi3BarIcon />;
          break;
        case 'pro': 
          level = <SignalWifi4BarIcon />;
          break;
        default:
          level = null;
          break;
    }

    return (
        <Grid item>
          {props.level === 'none' ? <Chip 
                className={classes.chip}  
                color="primary" 
                label={props.name} 
                
            /> 
            :
            <Chip 
                className={classes.chip}  
                color="primary" 
                label={props.name} 
                onDelete={handleDelete}
                deleteIcon={level}
            />
            }
            
        </Grid>
    )
}


export default Skill;