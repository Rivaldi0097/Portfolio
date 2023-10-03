import { Box, Link, Typography } from '@mui/material';
import React from 'react';

function Projects(props) {


    return (
        <Box
            sx={{
                bgcolor:'#1d1d20',
                minHeight: 300
            }}
        >
            <Box
                sx={{
                    display:'flex',
                    justifyContent: 'center',
                    pt:5
                }}
            >
                <Typography variant='title'>My Projects</Typography>
            </Box>

            <Box                    
                sx={{
                    pl:10,
                    mt:10,
                    pb:10,
                    pr:10
                }}
            >
                <Box>
                    <Typography variant='button' sx={{fontSize:{xs:'1.5rem', sm:'2.0rem', md:'2.0rem'}}}>Final Year Project</Typography>
                    <Typography variant='body1' sx={{fontSize:'1rem'}}>
                        - Partner with an external sponsor Friday.AI to design and build an automatic work schedule generation which saves doctors and nurses time.
                        <br/>
                        - In charge of developing the frontend and backend using languages such as ReactJs, NodeJs and MySQL.
                        <br/>
                        - Reponsible for integrating the analytic feature of the project as I have background in analytics too.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        mt:5
                    }}
                >
                    <Typography variant='button' sx={{fontSize:{xs:'1.5rem', sm:'2.0rem', md:'2.0rem'}}}>E-Commerce project (Full Stack)</Typography>
                    <Typography variant='body1' sx={{fontSize:'1rem'}}>
                        - Build a responsive E-commerce web application using MongoDB, Express, ReactJs, NodeJs (MERN), Redux and Typescript.
                        <br/>
                        - Deployed using Vercel(frontend) and AWS services(backend) such as EC2, Certificate Manager(ACM) and Cloudfront.
                        <br/>
                        <Box
                            sx={{
                                mt:2
                            }}
                        >
                            <Link 
                                variant='button' 
                                rel="noopener noreferrer" 
                                target="_blank"  
                                href="https://e-commerce-frontend-chi-fawn.vercel.app/"
                            >
                                View Website
                            </Link>
                        </Box>

                    </Typography>
                </Box>

            </Box>

        </Box>
    );
}

export default Projects;