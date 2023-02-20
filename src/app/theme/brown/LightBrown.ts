import { green, grey, lightBlue, purple, red, yellow } from "@mui/material/colors";
import {createTheme} from "@mui/material";
import brown from "@mui/material/colors/brown";


export const LightBrownTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: brown.A400,
            contrastText: 'black'
        },
        secondary: {
            main: brown[800],
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
            default: brown[100],
            paper: brown[200]
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