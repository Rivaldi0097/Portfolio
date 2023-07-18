import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import profileImage from '../img/profilePicture.jpg';

function AppHeader(props) {

    const pages = ['About me', 'Experience', 'Contact Me'];
    

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
        <AppBar 
          position="static"
          elevation={0}
          sx={{
            background:'linear-gradient(to right, #000000 0%, #04619f 74%)',
            pt:5
          }}
        >
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/* this is for name when the page gets smaller */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'sans-serif',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Rivaldi Kongres
            </Typography>

            {/* this is for the profile image */}
            <IconButton sx={{ p: 0, display:{md:'none'} }}>
              <Avatar alt="Remy Sharp" src={profileImage} sx={{width:100, height:100}}/>
            </IconButton>

            {/* this is for the menu when the page is bigger */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml:10 }}>
            <Typography
                variant="h4"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'sans-serif',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Rivaldi Kongres
              </Typography>

            </Box>
            
            {/* this is for the name when page is bigger */}
            <Box sx={{ display:{ xs: 'none', md: 'flex' }, flexDirection:'row', alignItems:'center', flexGrow: 0 }}>

                  <Button
                    variant='outlined'
                    onClick={handleCloseNavMenu}
                    href='mailto:rivaldi1997@hotmail.com'
                    sx={{ my: 2, color: 'white', borderColor:'whitesmoke' }}
                  >
                    <Typography variant='body1'>
                      Contact Me
                    </Typography>
                  </Button>

              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default AppHeader;