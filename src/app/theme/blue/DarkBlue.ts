import { blue, green, grey, lightBlue, purple, red, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import blueGrey from "@mui/material/colors/blueGrey";
import indigo from "@mui/material/colors/indigo";


export const DarkBlueTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: blue.A400,
            contrastText: '#fff'
        },
        secondary: {
            main: indigo.A100,
            contrastText: '#fff'
        },
        error: {
            main: red[600]
        },
        warning: {
            main: yellow[400]
        },
        info: {
            main: lightBlue[300]
        },
        success: {
            main: green[700]
        },
        background: {
            default: blueGrey[800],
            paper: blueGrey[900]
        },
        action: {
            active: grey[50]
        }
    },
    typography: {
        allVariants: {
            color: "#fff"
        }
    }
});