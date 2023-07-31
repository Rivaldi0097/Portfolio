import {useRef, useEffect, useState} from 'react';
import { Box, Grid, Typography } from '@mui/material';
import profilePic from '../img/profilePicture.jpg';

function AboutMe(props) {

    const aboutMeRef = useRef();
    const [isVisibility, setIsVisibility] = useState();

    useEffect(()=>{
        console.log(aboutMeRef.current);
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setIsVisibility(entry.isIntersecting);
        })
        observer.observe(aboutMeRef.current)
    }, [])

    return (
        <Box
            sx={{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p:10,
                minHeight: "100vh",
            }}
            ref={aboutMeRef}
            className={isVisibility?"show":"hidden"}
        >
            <Box sx={{p:{sm:5, md:5}}}>
                <Typography variant='h1' align='center'>Hello 👋, I am Rivaldi Kongres.</Typography>
                <br/>
                <Typography variant='h4' align='center' sx={{fontSize:{xs:'2rem', sm:'2rem', md:'2rem'}}}>
                    An aspiring Full Stack Developer. This is a simple poftfolio just for you to get to know me better.
                </Typography>
                <br/>
                <Typography variant='h4' align='center' sx={{fontSize:{xs:'2rem', sm:'2rem', md:'2rem'}}}>
                    I am currently based in Singapore and had just completed my study with Singapore Management Univesity (SMU).
                </Typography>
            </Box>
        </Box>
    );
}

export default AboutMe;