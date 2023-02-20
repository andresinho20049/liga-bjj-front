import { blue, green, grey, lightBlue, purple, red, yellow, lightGreen } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import teal from "@mui/material/colors/teal";
import blueGrey from "@mui/material/colors/blueGrey";


export const DarkGreenTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: teal.A700,
            contrastText: '#fff'
        },
        secondary: {
            main: lightGreen[600],
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
            default: blueGrey[700],
            paper: blueGrey[800]
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