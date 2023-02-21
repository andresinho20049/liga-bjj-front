import { blueGrey, green, grey, lightBlue, purple, red, yellow } from "@mui/material/colors";
import {createTheme} from "@mui/material";


export const LightBlackTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: grey[800],
            contrastText: 'black'
        },
        secondary: {
            main: blueGrey[500],
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
            default: grey.A400,
            paper: grey[200]
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