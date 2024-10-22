import { createTheme } from "@mui/material";
import { purple, red } from "@mui/material/colors";

export const purpleTheme = createTheme ({
    palette: {
        primary:{
            main: purple[900]
        },
        secondary:{
            main:'#543884'
        },
        error:{
            main: red.A400
        }
    }
})