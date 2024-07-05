module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss/plugin')(function ({ addVariant }) {
            addVariant('active', ['.active &', '&.active'])
        }),
    ],
    theme: {
        fontFamily: {
            sans: [
                "'ubuntu'",
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                "'Segoe UI'",
                ' Roboto',
                'Oxygen',
                'Ubuntu',
                'Cantarell',
                "'Open Sans'",
                "'Helvetica Neue'",
                'sans-serif',
            ],
        },
        fontSize: {
            h1: '2rem',
        },
        extend: {
            spacing: {
                nav: '4rem',
                header: '4rem',
                main: 'calc(100vh - 8rem)',
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
