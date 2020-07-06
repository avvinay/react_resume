import React from 'react';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';


const SocialMedia = (props) => {

    console.log("social media", props);
    let icon = null;
    switch(props.type) {
        case 'linkedin': 
            icon = <LinkedInIcon />
            break;
        case 'github': 
            icon = <GitHubIcon />
            break;
        case 'facebook':
            icon = <FacebookIcon />
            break;
        case 'linkedin': 
            icon = <TwitterIcon />
            break;            
    }


    return (
    <Grid item xs={6}>
        <Grid container>
            <Grid item xs={1}>
                {icon}
            </Grid>
            <Grid item xs={5}>
                <Typography style={{"marginTop": 2}} variant='body2' gutterBottom>{props.url}</Typography>
            </Grid>
        </Grid>
    </Grid>
    )
};


export default SocialMedia;