import { Height } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import ProfileImage from './img/pic3.png';
const theme = createTheme({
    palette: {
        primary: {
            main: '#191c24',
        },
        text:
        {
            primary: "#fff",
            secondary: "#fff",
        },
        background:
        {
            default: "#000000",
            paper: "#191c24",
        },
    },
    typography:
    {
        fontFamily: "\"Rubik\", sans-serif",
        fontSize: 14,
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    '&.styledCard': {
                        backgroundColor: '#191c24',
                        borderRadius: '10px',
                        height: '100%',
                        padding: '16px',
                        '.MuiCardContent-root':
                        {
                            padding: 0,
                        }
                    },
                }
            }
        },

        MuiFormControl: {
            styleOverrides: {
                root: {
                    '&.searchInput': {
                        '.MuiInputBase-root': {
                            backgroundColor: '#292B2F',
                            minWidth: '300px',
                            '.MuiInputAdornment-root': {
                                color: '#fff',
                            },
                            '.MuiOutlinedInput-input': {
                                padding: 10,
                                fontSize: 14,
                            },
                        },
                    },
                    '&.styledDropdown': {
                        '.MuiInputBase-root':
                        {
                            '.MuiSelect-select':
                            {
                                padding: '7px 15px',
                                backgroundColor: '#292B2F',
                                borderRadius: '99px',
                                fontSize: '14px',
                            },
                            '.MuiSvgIcon-root': {
                                color: '#fff',
                            },
                            '.MuiOutlinedInput-notchedOutline':
                            {
                                borderRadius: '99px',
                                borderColor: '#595A60',
                            }
                        }
                    },
                }
            }
        },
        MuiRating: {
            styleOverrides: {
                root: {
                    '.MuiRating-iconEmpty':
                    {
                        color: '#fff',
                    }
                }
            }
        }
    },

})
export default theme