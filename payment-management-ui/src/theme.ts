import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#455a64',
        },
        secondary: {
            main: '#78909c',
        },
        background: {
            default: '#f4f5f7',
            paper: '#ffffff',
        },
        text: {
            primary: '#212121',
            secondary: '#546e7a',
        },
    },
    shape: {
        borderRadius: 4,
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h4: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
        subtitle1: {
            color: '#546e7a',
        },
        subtitle2: {
            color: '#546e7a',
        },
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
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    flexWrap: 'wrap',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                },
            },
        },
        MuiCard: {
            defaultProps: {
                variant: 'outlined',
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0,
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
