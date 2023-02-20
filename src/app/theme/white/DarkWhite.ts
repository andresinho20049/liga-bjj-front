import { blue, green, grey, lightBlue, purple, red, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material";


export const DarkWhiteTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff',
            contrastText: '#fff'
        },
        secondary: {
            main: grey.A700,
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