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
                <Typography variant='h6' gutterBottom>WORK EXPERIENCE</Typography>
            </Grid>
        </Grid>
        <Grid>
            <Grid container>
                <Grid item>
                    <Typography variant='h6' gutterBottom>Liquidlab</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={10}>
                    <Typography color="primary"  variant='body2' gutterBottom><Box fontStyle="italic">06/2017 - 05/2020</Box></Typography>
                </Grid>
              
                <Grid item xs={2}>
                    <Typography color="primary"  variant='body2' gutterBottom><Box fontStyle="italic">Bangalore</Box></Typography>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item >
                    <Typography color="primary"  variant='body2' gutterBottom><Box fontStyle="italic">Achievements/Tasks</Box></Typography>
                </Grid>
            </Grid>
            <Grid container>
            <Grid item xs={1}>
                <LensIcon color="primary" style={{fontSize: 10}} />
            </Grid>
            <Grid item xs={11}>
                <Typography  variant='body2' gutterBottom>
                    <Box>
                      Develop and implement new software programs using Laravel php framework.
                    </Box>
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <LensIcon color="primary" style={{fontSize: 10}} />
            </Grid>
            <Grid item xs={11}>
                <Typography  variant='body2' gutterBottom>
                    <Box>
                      Develop and implement new software programs using Laravel php framework.
                    </Box>
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <LensIcon color="primary" style={{fontSize: 10}} />
            </Grid>
            <Grid item xs={11}>
                <Typography  variant='body2' gutterBottom>
                    <Box>
                      Develop and implement new software programs using Laravel php framework.
                    </Box>
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <LensIcon color="primary" style={{fontSize: 10}} />
            </Grid>
            <Grid item xs={11}>
                <Typography  variant='body2' gutterBottom>
                    <Box>
                      Develop and implement new software programs using Laravel php framework.
                    </Box>
                </Typography>
            </Grid>
        </Grid>
        </Grid>
        <br/>
        <Grid>
            <Grid container>
                <Grid item>
                    <Typography variant='h6' gutterBottom>Liquidlab</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={10}>
                    <Typography color="primary"  variant='body2' gutterBottom><Box fontStyle="italic">06/2017 - 05/2020</Box></Typography>
                </Grid>
              
                <Grid item xs={2}>
                    <Typography color="primary"  variant='body2' gutterBottom><Box fontStyle="italic">Bangalore</Box></Typography>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item >
                    <Typography color="primary"  variant='body2' gutterBottom><Box fontStyle="italic">Achievements/Tasks</Box></Typography>
                </Grid>
            </Grid>
            <Grid container>
            <Grid item xs={1}>
                <LensIcon color="primary" style={{fontSize: 10}} />
            </Grid>
            <Grid item xs={11}>
                <Typography  variant='body2' gutterBottom>
                    <Box>
                      Develop and implement new software programs using Laravel php framework.
                    </Box>
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <LensIcon color="primary" style={{fontSize: 10}} />
            </Grid>
            <Grid item xs={11}>
                <Typography  variant='body2' gutterBottom>
                    <Box>
                      Develop and implement new software programs using Laravel php framework.
                    </Box>
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <LensIcon color="primary" style={{fontSize: 10}} />
            </Grid>
            <Grid item xs={11}>
                <Typography  variant='body2' gutterBottom>
                    <Box>
                      Develop and implement new software programs using Laravel php framework.
                    </Box>
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <LensIcon color="primary" style={{fontSize: 10}} />
            </Grid>
            <Grid item xs={11}>
                <Typography  variant='body2' gutterBottom>
                    <Box>
                      Develop and implement new software programs using Laravel php framework.
                    </Box>
                </Typography>
            </Grid>
        </Grid>
        </Grid>
        
        
      </Paper>
      
    </div>
  );
}