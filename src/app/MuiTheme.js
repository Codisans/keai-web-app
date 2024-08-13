'use client'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: '1rem',
                },
            },
        },
        MuiSvgIcon: {
            defaultProps: {
                fontSize: 'inherit',
            },
        },
    },
})

const MuiTheme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MuiTheme
