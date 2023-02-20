import { deepOrange, green, grey, lightBlue, purple, red, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import orange from "@mui/material/colors/orange";


export const DarkOrangeTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: deepOrange.A400,
            contrastText: '#fff'
        },
        secondary: {
            main: orange[400],
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
            default: '#202124',
            paper: '#303134'
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