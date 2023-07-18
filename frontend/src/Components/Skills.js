import {useState} from 'react';
import { 
    Box, 
    Grid, 
    Typography, 
    Divider, 
    Button,
    Stack
} from '@mui/material';
import css from '../img/css.png';
import html from '../img/html.png';
import javascript from '../img/javascript.png';
import mongodb from '../img/mongodb.png';
import mysql from '../img/mysql.png';
import nodejs from '../img/nodejs.png';
import python from '../img/python.png';
import reactjs from '../img/reactjs.png';
import typescript from '../img/typescript.png';

function Skills(props) {

    const [skillSelected, setSkillSelected] = useState('Frontend');
    const [buttonFrontendColor, setButtonFrontendColor] = useState('#1d1d20');
    const [buttonBackendColor, setButtonBackendColor] = useState('#1d1d20');
    const skillButtonBorder = 10;
    const minHeightSkill = 300;

    const frontend = [
        {'src': html, 'alt': "html logo"},
        {'src': css, 'alt': 'css logo'},
        {'src': javascript, 'alt': 'javascript logo'},
        {'src': reactjs, 'alt': 'reactjs logo'},
        {'src': typescript, 'alt': 'typescript logo'},
    ]

    const backend = [
        {'src': nodejs, 'alt': 'nodejs logo'},
        {'src': mysql, 'alt': 'my sql logo'},
        {'src': mongodb, 'alt': 'mongodb logo'},
        {'src': python, 'alt': 'python logo'},
    ]

    const boxProps = {
        display:'flex',
        flexGrow:1,
        flexDirection:'column',
        justifyContent:'center',
        minHeight:minHeightSkill,
        p:5,
    }



    const changeSkill = (skillName) => {
        setSkillSelected(skillName)
    }

    return (
        <Box
            sx={{
                //m:5,
                bgcolor:'whitesmoke',
                minHeight:minHeightSkill,
                //borderRadius:5,
                mr:5,
                ml:5,
                pb:5
            }}
        >

            <Grid container justifyContent="center" alignItems="center">
                <Grid item sm={12} md={12} lg={9}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography variant='title2' sx={{fontSize:{xs:'2.5rem', sm:'3rem', md:'4rem'}}}>Skills Acquired Over Time</Typography>

                        <Grid container justifyContent="center" alignItems="center">
                            {skillSelected === 'Frontend'?
                                frontend.map( (obj, i) => {
                                    return(
                                        <Grid item key={i}>
                                            <img src={obj.src} alt={obj.alt} />
                                        </Grid>
                                    )
                                })
                            :
                                backend.map( (obj, i) => {
                                    return(
                                        <Grid item key={i}>
                                            <img src={obj.src} alt={obj.alt} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid> 
                    </Stack>
                </Grid>

                <Grid item xs={12} md={12} lg={3}>
                    <Box
                        sx={boxProps}
                    >
                        <Button 
                            variant='text' 
                            sx={{
                                borderTop: skillButtonBorder, 
                                borderLeft: skillButtonBorder, 
                                pt:10,
                                borderColor:'#1d1d20',
                                letterSpacing: '0.18px',
                                '&:hover': {
                                    backgroundColor: '#1d1d20',
                                    color:'black'
                                }
                            }} 
                            onClick={()=>{changeSkill('Frontend')}}
                            onMouseOver={()=>{setButtonFrontendColor('white')}}
                            onMouseLeave={()=>{setButtonFrontendColor('#1d1d20')}}
                        >
                            <Typography sx={{color:buttonFrontendColor, textDecoration:skillSelected === 'Frontend'? 'underline':''}} variant='skillButton'>Frontend</Typography>
                        </Button>

                        <Button 
                            variant='text' 
                            sx={{
                                borderBottom: skillButtonBorder, 
                                borderRight: skillButtonBorder, 
                                borderColor:'#1d1d20',
                                pb:10,
                                '&:hover': {
                                    backgroundColor: '#1d1d20',
                                    color:'black'
                                }
                            }} 
                            onClick={()=>{changeSkill('Backend')}}
                            onMouseOver={()=>{setButtonBackendColor('white')}}
                            onMouseLeave={()=>{setButtonBackendColor('#1d1d20')}}
                        >
                        <Typography sx={{color:buttonBackendColor, textDecoration:skillSelected === 'Backend'? 'underline':''}} variant='skillButton'>Backend</Typography>
                        </Button>

                    </Box>
                </Grid>
            </Grid>



        </Box>
    );
}

export default Skills;
