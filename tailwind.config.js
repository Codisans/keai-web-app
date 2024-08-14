const { default: zIndex } = require('@mui/material/styles/zIndex')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss/plugin')(function ({ addVariant }) {
            addVariant('active', ['.active &', '&.active'])
            addVariant('error', ['.error &', '&.error'])
            addVariant('loading', ['.loading &', '&.loading'])
            addVariant('open', ['.open &', '&.open'])
        }),
    ],
    theme: {
        colors: {
            primary: '#31285b',
            secondary: '#f8ac4c',
            accent: '#fff',
            canvas: '#fff',
            'canvas-alt': '#e4e4e4',
            black: '#141301',
            white: '#fff',
            blue: {
                DEFAULT: '#31285b',
                dark: '#31285b',
            },
            yellow: {
                DEFAULT: '#f8ac4c',
                dark: '#f8ac4c',
            },
            red: '#DA281B',
            grey: { DEFAULT: '#ebebeb', light: '#ebebeb' },
        },
        fontFamily: {
            primary: ["'ubuntu'", 'system-ui', '-apple-system', 'sans-serif'],
            secondary: ["'ubuntu'", 'system-ui', '-apple-system', 'sans-serif'],
        },
        fontSize: {
            body: ['1rem', '1.1rem'],
            button: ['1rem', '1rem'],
            'big-button': '2rem',
            caps: ['0.75rem', '0.75rem'],
            h1: ['2rem', '2.25rem'],
            h2: ['1.5rem', '1.7rem'],
            h3: ['1.25rem', '1.4rem'],
            icon: ['2rem', '1rem'],
            'icon-lg': ['3rem', '1.5rem'],
            logo: '1.75rem',
            small: ['0.75rem', '0.75rem'],
            sm: '0.75rem',
            md: '1rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        },
        extend: {
            borderRadius: {
                DEFAULT: '0.5rem',
                card: '0.5rem',
                button: '0.5rem',
                ui: '0.5rem',
            },
            spacing: {
                nav: '4rem',
                header: '4rem',
                main: 'calc(100vh - 8rem)',
                gutter: '0.75rem',
            },
            aspectRatio: {
                '4/5': '4/5',
            },
            zIndex: {
                filters: 20,
                controls: 10,
                info: 30,
                'main-menu': 50,
                nav: 50,
            },
            height: {
                'screen-small': ['100vh', '100svh'],
                'screen-large': ['100vh', '100lvh'],
                'screen-dynamic': ['100vh', '100dvh'],
                main: 'calc(100vh - 8rem)',
            },
            minHeight: {
                'screen-small': ['100vh', '100svh'],
                'screen-large': ['100vh', '100lvh'],
                'screen-dynamic': ['100vh', '100dvh'],
            },
            maxHeight: {
                'screen-small': ['100vh', '100svh'],
                'screen-large': ['100vh', '100lvh'],
                'screen-dynamic': ['100vh', '100dvh'],
                main: 'calc(100vh - 8rem)',
                0: '0px',
            },
            transitionProperty: {
                maxHeight: 'max-height',
            },
        },
    },
}
