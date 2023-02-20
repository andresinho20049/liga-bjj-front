import { green, grey, lightBlue, purple, red, yellow } from "@mui/material/colors";
import {createTheme} from "@mui/material";
import blueGrey from "@mui/material/colors/blueGrey";
import blue from "@mui/material/colors/blue";
import cyan from "@mui/material/colors/cyan";


export const LightBlueTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: lightBlue.A400,
            contrastText: 'black'
        },
        secondary: {
            main: cyan.A200,
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
            default: blueGrey.A200,
            paper: blueGrey[100]
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