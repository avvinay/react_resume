import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import * as actionCreators from '../../services/Header/index';

const HeaderDialog = (props) => {
  const [open, setOpen] = React.useState(props.open);

  const [name, setName] = useState(props.name);
  const [profession, setProfession] = useState(props.profession);
  const [brief, setBrief] = useState(props.brief);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
      console.log(name,profession,brief);
      let headerObj = {
          name,
          profession,
          brief
      };
      props.onSubmitHeader(headerObj);
      setOpen(false);
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Enter Header Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
          </DialogContentText>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
                <TextField key={1} id="outlined-basic" label="Enter Name" variant="outlined"  onChange={(e) => setName(e.target.value)} value={name}  />
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField key={2} id="outlined-basic" label="Enter Profession" variant="outlined" onChange={(e) => setProfession(e.target.value)} value={profession} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
                <TextField key={3} id="outlined-basic" label="Enter Brief" variant="outlined" onChange={(e) => setBrief(e.target.value)} fullWidth value={brief} />
            </Grid>
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


const mapStateToProps = state => {
    return {
        name: state.headerState.name,
        profession: state.headerState.profession,
        brief: state.headerState.brief
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitHeader: async(headerObj) => {
            await dispatch(actionCreators.submitHeader(headerObj));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HeaderDialog);