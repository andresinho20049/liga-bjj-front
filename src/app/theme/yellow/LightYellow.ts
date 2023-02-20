import { amber, green, grey, lightBlue, lime, purple, red, yellow } from "@mui/material/colors";
import {createTheme} from "@mui/material";


export const LightYellowTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: amber.A200,
            contrastText: 'black'
        },
        secondary: {
            main: lime[200],
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
            default: yellow[50],
            paper: amber[50]
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