import { createTheme } from '@mui/material';

const MuiTheme = createTheme({
    typography: {
        'title':{
            'fontFamily':"eurostile",
            'fontSize': "4rem",
            'fontWeight':900,
            'fontWeightRegular': 1.167,
            'color':'whitesmoke',
        },
        'title2':{
            'fontFamily':"eurostile",
            'fontSize': "4rem",
            'fontWeight':900,
            'fontWeightRegular': 1.167,
            'color':'#1d1d20',
        },
        'skillButton':{
            'fontFamily':"MontserRrat-Regular",
            'fontSize': "1.5rem",
            'fontWeight':900,
            'fontWeightRegular': 1.167,
            'color':'#1d1d20',
        },
        'companyName':{
            'fontFamily':"roboto",
            'fontSize': "4rem",
            'fontWeight':900,
            'fontWeightRegular': 1.167,
            'color':'whitesmoke',
        },
        
    },});

export default MuiTheme;