import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#455a64',
        },
        text: {
            secondary: '#546e7a',
        },
    },
    typography: {
        h4: {fontWeight: 600},
        h5: {fontWeight: 600},
        h6: {fontWeight: 600},
        subtitle1: {color: '#546e7a'},
        subtitle2: {color: '#546e7a'},
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {textTransform: 'none'},
            },
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {flexWrap: 'wrap'},
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {fontWeight: 500},
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingTop: 32,
                    paddingBottom: 32,
                },
            },
        },
    },
});

export default theme;
