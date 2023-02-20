import { green, grey, lightBlue, purple, red, yellow } from "@mui/material/colors";
import {createTheme} from "@mui/material";
import deepPurple from "@mui/material/colors/deepPurple";


export const LightPurpleTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: deepPurple.A200,
            contrastText: 'black'
        },
        secondary: {
            main: purple[900],
            contrastText: 'black'
        },
        error: {
            main: red[600]
        },
        warning: {
            main: yellow[900]
        },
        info: {
            main: lightBlue[300]
        },
        success: {
            main: green[700]
        },
        background: {
            default: purple[50],
            paper: deepPurple[100]
        },
        action: {
            active: grey[900]
        }
    },
    typography: {
        allVariants: {
            // fontFamily: "sans-serif",
            // fontWeight: 'lighter',
            color: "#222"
        }
    }
});