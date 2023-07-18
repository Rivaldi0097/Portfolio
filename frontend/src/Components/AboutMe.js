import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import profilePic from '../img/profilePicture.jpg';

function AboutMe(props) {



    return (
        <Box
            sx={{
                p:10
            }}
        >
            <Grid container justifyContent="center" alignItems="center">
                <Grid 
                    item
                    lg={7}
                    xl={7}
                    sx={{p:{sm:5, md:5}}}
                >
                    <Typography variant='h3' align='left'>Hello, I am Rivaldi Kongres,</Typography>
                    <br/>
                    <Typography variant='h4' align='left'>
                        An aspiring Full Stack Developer. This is my poftfolio just for you to get to know me better.
                    </Typography>
                    <br/>
                    <Typography variant='h4' align='left'>
                        I am currently based in Singapore and had just completed my study with Singapore Management Univesity (SMU).
                    </Typography>
                </Grid>

                <Grid 
                    item
                    lg={5}
                    xl={5}
                    sx={{
                        display:{xs:'none', sm:'none', md:'inline'}
                    }}
                >
                    <img src={profilePic} alt='profilePicture' width='70%' height='100%'/>
                </Grid> 
            </Grid>
        </Box>
    );
}

export default AboutMe;