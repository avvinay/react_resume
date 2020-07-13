import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import * as actionCreators from '../../services/Skills/index';

const SkillsDialog = (props) => {
  const [open, setOpen] = useState(props.open);
  const [skill, setSkill] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [skillLevels,setSkillLevels] = useState(['beginner','medium','expert','pro','none']);
  const [totalSkills, setTotalSkills] = useState([]);

  const handleChange = (event) => {
    setSkillLevel(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {

    props.onSubmitSkills(totalSkills);
    
  }

  const handleAdd = () => {
    let skillObj = {
      name: skill.toLowerCase(),
      level: skillLevel
    };
    // add to array if skill not found
    const foundSkill = totalSkills.some(skl => skl.name === skill.toLowerCase());
    if(!foundSkill) {
      const newTotalSkills = [...totalSkills, skillObj];
      setTotalSkills(newTotalSkills);
    }

    setSkill('');
    setSkillLevel('');

  };


  let menuItems = skillLevels.map((menuItem,index) => {
    return (
      <MenuItem value={menuItem} key={index}>{menuItem.charAt(0).toUpperCase() + menuItem.slice(1)}</MenuItem>
    )
  });

  let skillRows = totalSkills.map((tskl,index) => {
      return <p key={index}>{tskl.name} - {tskl.level}</p>
  });

  


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Enter Skill With Level or Not"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
          <Grid container spacing={3}>
            <Grid item xs={4} md={4}>
                <TextField key={1} id="outlined-basic" label="Skill" variant="outlined" onChange={(e) => setSkill(e.target.value)}   />
            </Grid>    
            <Grid item xs={4} md={4}>
              <FormControl variant="outlined" style={{"minWidth":160}}>
                  <InputLabel id="demo-simple-select-outlined-label">Skill Level</InputLabel>
                  <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={skillLevel}
                  onChange={handleChange}
                  label="Skill Level"
                  >
                      <MenuItem value="">
                          <em>None</em>
                      </MenuItem>
                      {menuItems}
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} md={4}>
                <Button style={{"marginTop": 10}} variant="outlined" color="secondary" onClick={handleAdd} >ADD</Button>
            </Grid>        
          </Grid>

          <Grid container>
            <div>
              {/* rows goes here */}
              {skillRows}
            </div>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitSkills: async(skills) => {
      await dispatch(actionCreators.submitSkills(skills));
    }
  }
}



export default connect(null, mapDispatchToProps)(SkillsDialog);