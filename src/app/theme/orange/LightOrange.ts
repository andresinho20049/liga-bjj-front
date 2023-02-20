import { green, grey, lightBlue, purple, red, yellow } from "@mui/material/colors";
import {createTheme} from "@mui/material";
import orange from "@mui/material/colors/orange";
import deepOrange from "@mui/material/colors/deepOrange";


export const LightOrangeTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: orange.A400,
            contrastText: 'black'
        },
        secondary: {
            main: deepOrange.A700,
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
            default: orange[100],
            paper: orange[50]
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