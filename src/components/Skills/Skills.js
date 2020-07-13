import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Skill from './Skill';
import SkillsDialog from './SkillsDialog';
import {connect} from 'react-redux';



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
    cursor: 'pointer'
  },  

}));





const Skills = (props) => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);

  let dialog = null;
  if(dialogOpen) {
      dialog = <SkillsDialog open={dialogOpen} />
  }  

  let skills = null;
  if(props.skills.length) {
    skills = props.skills.map((skill,index) => {
      return <Skill key={index} name={skill.name.charAt(0).toUpperCase() + skill.name.slice(1)} level={skill.level} />;
    })
  }


  return (
    <div className={classes.root}>
      <Paper className={classes.paper} onClick={() => setDialogOpen(!dialogOpen)}>
        <Grid container>
            <Grid item>
                <Typography variant='h6' gutterBottom>SKILLS</Typography>
            </Grid>
        </Grid>
        <Grid container>
          {skills}
        </Grid>
      </Paper>
      {dialog}
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    skills: state.skillsState.skills
  }
}



export default connect(mapStateToProps, null)(Skills);