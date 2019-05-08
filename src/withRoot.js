import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import grey from '@material-ui/core/colors/grey';
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: cyan[200]
        },
        secondary: {
            main: grey[200]
        }
    },

    typography: {
        fontFamily: 'Rubik'
    },

    overrides: {
        title: {
            fontSize: '50px',
            color: cyan[200],
        },

        subtitle: {
            display: 'inline-block',
            fontSize: '21.32px',
            color: '#5b5b5b',
            fontWeight: 300,
            marginTop: '0.7rem',
        },

        image: {
            display: 'inline-block',
            width: '338px',
            overflow: 'hidden',
            marginTop: '2rem'
        },

        image_img: {
            width: '100%',
            height: 'auto'
        },

        button: {
            display: 'inline-block',
            width: '351px',
            height: '58px',
            backgroundColor: cyan[200],
            fontSize: '21px',
            marginTop: '3rem',

            '&:hover': {
                backgroundColor: cyan[100],
                color: '#0097A7',
                transition: '0.5s'
            },

            '&:disabled': {
                backgroundColor: grey[200],
            }

        },

        authors: {
            display: 'inline-block',
            fontSize: '12.19px',
            color: grey[400],
            fontWeight: 300,
            marginTop: '3rem',

        }


    }
});

function withRoot(Component) {
    function withRoot(props){
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...props}/>
            </MuiThemeProvider>
        )
    }

    return withRoot
}

export default withRoot;