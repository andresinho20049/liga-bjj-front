import { green, grey, lightBlue, purple, red, yellow } from "@mui/material/colors";
import {createTheme} from "@mui/material";
import lightGreen from "@mui/material/colors/lightGreen";
import lime from "@mui/material/colors/lime";
import teal from "@mui/material/colors/teal";


export const LightGreenTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: teal[300],
            contrastText: 'black'
        },
        secondary: {
            main: teal.A400,
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
            default: green[100],
            paper: teal[100]
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