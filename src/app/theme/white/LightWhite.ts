import { blueGrey, green, grey, lightBlue, purple, red, yellow } from "@mui/material/colors";
import {createTheme} from "@mui/material";


export const LightWhiteTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: blueGrey.A400,
            contrastText: 'black'
        },
        secondary: {
            main: grey[800],
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
            default: grey[200],
            paper: grey[50]
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