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
                <Typography variant='h6' gutterBottom>PROJECTS</Typography>
            </Grid>
        </Grid>
        <Grid>
            <Grid container>
                <Grid item>
                    <Typography variant='body1' gutterBottom>Fantasy Game (12/2019 – 05/2020)</Typography>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={1}>
                    <LensIcon color="primary" style={{fontSize: 10}} />
                </Grid>
                <Grid item xs={11}>
                    <Typography  variant='body2' gutterBottom>
                        <Box>
                        Technology: Reactjs,Nodejs,Mongodb,AWS,Flutter.
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <LensIcon color="primary" style={{fontSize: 10}} />
                </Grid>
                <Grid item xs={11}>
                    <Typography  variant='body2' gutterBottom>
                        <Box>
                        Fantasy website like dream11.
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <br/>
        <Grid>
            <Grid container>
                <Grid item>
                    <Typography variant='body1' gutterBottom>Fantasy Game (12/2019 – 05/2020)</Typography>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={1}>
                    <LensIcon color="primary" style={{fontSize: 10}} />
                </Grid>
                <Grid item xs={11}>
                    <Typography  variant='body2' gutterBottom>
                        <Box>
                        Technology: Reactjs,Nodejs,Mongodb,AWS,Flutter.
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <LensIcon color="primary" style={{fontSize: 10}} />
                </Grid>
                <Grid item xs={11}>
                    <Typography  variant='body2' gutterBottom>
                        <Box>
                        Fantasy website like dream11.
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <br/>
        <Grid>
            <Grid container>
                <Grid item>
                    <Typography variant='body1' gutterBottom>Fantasy Game (12/2019 – 05/2020)</Typography>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={1}>
                    <LensIcon color="primary" style={{fontSize: 10}} />
                </Grid>
                <Grid item xs={11}>
                    <Typography  variant='body2' gutterBottom>
                        <Box>
                        Technology: Reactjs,Nodejs,Mongodb,AWS,Flutter.
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <LensIcon color="primary" style={{fontSize: 10}} />
                </Grid>
                <Grid item xs={11}>
                    <Typography  variant='body2' gutterBottom>
                        <Box>
                        Fantasy website like dream11.
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <br/>
        <Grid>
            <Grid container>
                <Grid item>
                    <Typography variant='body1' gutterBottom>Fantasy Game (12/2019 – 05/2020)</Typography>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={1}>
                    <LensIcon color="primary" style={{fontSize: 10}} />
                </Grid>
                <Grid item xs={11}>
                    <Typography  variant='body2' gutterBottom>
                        <Box>
                        Technology: Reactjs,Nodejs,Mongodb,AWS,Flutter.
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <LensIcon color="primary" style={{fontSize: 10}} />
                </Grid>
                <Grid item xs={11}>
                    <Typography  variant='body2' gutterBottom>
                        <Box>
                        Fantasy website like dream11.
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
      </Paper>
      
    </div>
  );
}