module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    plugins: [require('@tailwindcss/forms')],
    theme: {
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
