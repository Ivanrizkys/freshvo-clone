// import { createTheme } from "@mui/system";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            primary: "#FAFAFA",
            secondary: "rgb(255, 255, 255)",
            white: "#FFFF"
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "#4E5356",
            gray: "#808080",
            green: "#00A739"
        },
        buttonPrimay: {
            main: "rgb(0, 167, 57)",
            contrastText: "#FFFF"
        },
        buttonTransparant: {
            main: "#FFFFF",
        },
        buttonDisable: {
            main: "rgb(173, 173, 173)",
            contrastText: "#FFFF"
        }
    },
    typography: {
        fontFamily: "Montserrat",
    },
})

export default theme;