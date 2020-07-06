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
import * as actionCreators from '../../services/PersonalInfo/index';

const PersonalInfoDialog = (props) => {
  const [open, setOpen] = useState(props.open);
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [socialMedia, setSocialMedia] = useState([]);
  const [media, setMedia] = useState('');
  const [url, setUrl] = useState('');
  const [totalMedia,setTotalMedia] = useState(['linkedin','github','facebook','twitter']);

  const handleChange = (event) => {
    setMedia(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
     let personalInfoObj = {
       email,
       mobile_number: mobileNumber,
       location,
       social_media: socialMedia
     };

     props.onSubmitPersonalInfo(personalInfoObj);
     setOpen(false);
  }

  const handleAdd = () => {

    if(media !== "" & url !== "") {
      let socialObject = {
        type: media,
        url
      };
      setSocialMedia([...socialMedia, socialObject]);
      // newTotalMedia = [...totalMedia.slice(0, removeIndex),...totalMedia.slice(removeIndex+1, totalMedia.length)];
      const newTotalMedia = totalMedia.filter(m => m !== media);
      setTotalMedia(newTotalMedia);
      setUrl('');
    }
    

  };


  let menuItems = totalMedia.map((menuItem,index) => {
    return (
      <MenuItem value={menuItem} key={index}>{menuItem.charAt(0).toUpperCase() + menuItem.slice(1)}</MenuItem>
    )
  });

  let socialTableRows = socialMedia.map((row, index) => {
    return (
        <p key={index}>{row.type}-{row.url}</p>
    )
  });

  


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Enter Personal Info Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
          <Grid container spacing={3}>
            <Grid item xs={4} md={4}>
                <TextField key={1} id="outlined-basic" label="Email Address" variant="outlined" onChange={(e) => setEmail(e.target.value)}   />
            </Grid>
            <Grid item xs={4} md={4}>
                <TextField key={2} id="outlined-basic" label="Mobile Number" variant="outlined" onChange={(e) => setMobileNumber(e.target.value)}  />
            </Grid>
            <Grid item xs={4} md={4}>
                <TextField key={3} id="outlined-basic" label="Location" variant="outlined" onChange={(e) => setLocation(e.target.value)} />
            </Grid>
            
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4} md={4}>
              <FormControl variant="outlined" style={{"minWidth":160}}>
                  <InputLabel id="demo-simple-select-outlined-label">Social Media Links</InputLabel>
                  <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={media}
                  onChange={handleChange}
                  label="Social Media"
                  >
                      <MenuItem value="">
                          <em>None</em>
                      </MenuItem>
                      {menuItems}
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} md={4}>
                <TextField  id="outlined-basic" label="Url" variant="outlined" onChange={(e) => setUrl(e.target.value)} value={url} />
            </Grid>
            <Grid item xs={4} md={4}>
                <Button style={{"marginTop": 10}} variant="outlined" color="secondary" onClick={handleAdd} >ADD</Button>
            </Grid>
          </Grid>
          <Grid container>
            <div>
              {socialTableRows}
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
    onSubmitPersonalInfo: async(personalInfo) => {
      await dispatch(actionCreators.submitPersonalInfo(personalInfo));
    }
  }
}


export default connect(null, mapDispatchToProps)(PersonalInfoDialog);