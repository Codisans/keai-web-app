module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss/plugin')(function ({ addVariant }) {
            addVariant('active', ['.active &', '&.active'])
            addVariant('error', ['.error &', '&.error'])
            addVariant('loading', ['.loding &', '&.loding'])
        }),
    ],
    theme: {
        colors: {
            black: '#141301',
            white: '#fff',
            blue: '#212FA1',
            red: '#DA281B',
            grey: { DEFAULT: '#e4e4e4', light: '#e4e4e4' },
        },
        fontFamily: {
            primary: ["'ubuntu'", 'system-ui', '-apple-system', 'sans-serif'],
            secondary: ["'ubuntu'", 'system-ui', '-apple-system', 'sans-serif'],
        },
        fontSize: {
            logo: '2rem',
            h1: '2rem',
        },
        extend: {
            spacing: {
                nav: '4rem',
                header: '4rem',
                main: 'calc(100vh - 8rem)',
                gutter: '0.75rem',
            },
            aspectRatio: {
                '4/5': '4/5',
            },
            height: {
                'screen-small': ['100vh', '100svh'],
                'screen-large': ['100vh', '100lvh'],
                'screen-dynamic': ['100vh', '100dvh'],
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
            },
        },
    },
}
