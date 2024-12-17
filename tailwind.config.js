// import { CATEGORIES } from './src/constants/categories'

// const categoryColors = Object.values(CATEGORIES).reduce((acc, category) => {
//     acc[category] = category.color
//     return acc
// }, {})

const { FontSizes, font, rem } = require('./src/tailwind/font.plugin.mjs')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    plugins: [
        FontSizes,
        require('@tailwindcss/forms'),
        require('tailwindcss/plugin')(function ({ addVariant }) {
            addVariant('active', ['.active &', '&.active'])
            addVariant('primary', ['.primary &', '&.primary'])
            addVariant('active-slide', [
                '.swiper-slide-active &',
                '&.swiper-slide-active',
            ])
            addVariant('disabled', ['.disabled &', '&.disabled'])
            addVariant('error', ['.error &', '&.error'])
            addVariant('loading', ['.loading &', '&.loading'])
            addVariant('open', ['.open &', '&.open'])
            addVariant('filter-open', ['.filter-open &', '&.filter-open'])
            addVariant('header-open', ['.header-open &', '&.header-open'])
            addVariant('header-visible', [
                '.header-visible &',
                '&.header-visible',
            ])
            addVariant('page-scrolled', ['.page-scrolled &', '&.page-scrolled'])
        }),
    ],
    corePlugins: {
        fontSize: false,
        container: false,
    },
    darkMode: 'selector',
    safeList: ['bg-deporte'],
    theme: {
        colors: {
            // ...categoryColors,
            theme: {
                DEFAULT: '#faac4a',
                accent: '#fff',
            },
            category: 'var(--category-color,#faac4a)',
            primary: '#faac4a',
            secondary: '#f8ac4c',
            canvas: '#fff',
            'canvas-alt': '#e4e4e4',
            black: { DEFAULT: '#2B2B2B', true: '#000' },
            white: { DEFAULT: '#fff', alt: '#ededed' },
            blue: {
                DEFAULT: '#31285b',
                dark: '#31285b',
            },
            yellow: {
                DEFAULT: '#f8ac4c',
                dark: '#f8ac4c',
            },
            red: { DEFAULT: '#FF4A5C' },
            error: '#e34a4a',
            green: {
                DEFAULT: '#115748',
                1: '#24B595',
                2: '#24B595',
                3: '#115748',
            },
            grey: {
                light: '#ebebeb',
                DEFAULT: '#DDDDDD',
                dark: '#797979',
                1: '#F5F5F5',
                2: '#ebebeb',
                3: '#DDDDDD',
                4: '#797979',
                5: '#535353',
            },
            pink: {
                DEFUALT: '#F2ABAB',
            },
            transparent: 'transparent',
        },
        fontFamily: {
            tenorite: ['Tenorite', 'system-ui', '-apple-system', 'sans-serif'],
            sans: ['Opens Sans', 'system-ui', '-apple-system', 'sans-serif'],
        },
        fontSize: {
            body: {
                base: font(16, {
                    lineHeight: 18,
                    letterSpacing: 0,
                }),
            },
            button: {
                base: font(14, {
                    lineHeight: 14,
                    letterSpacing: 0,
                    textTransform: 'uppercase',
                }),
            },
            radio: {
                base: font(12, {
                    lineHeight: 12,
                    letterSpacing: 0,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                }),
            },
            'big-button': {
                base: font(32, {
                    lineHeight: 32,
                    letterSpacing: 0,
                    textTransform: 'uppercase',
                }),
            },
            caps: {
                base: font(16, {
                    lineHeight: 16,
                    letterSpacing: 0,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                }),
            },
            'caps-sm': {
                base: font(12, {
                    lineHeight: 12,
                    letterSpacing: 0,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                }),
            },
            'caps-lg': {
                base: font(20, {
                    lineHeight: 20,
                    letterSpacing: 0,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                }),
            },
            h1: {
                base: font(32, {
                    lineHeight: 32,
                    letterSpacing: 0,
                }),
            },
            h2: {
                base: font(24, {
                    lineHeight: 16,
                    letterSpacing: 0,
                }),
            },
            h3: {
                base: font(20, {
                    lineHeight: 21,
                    letterSpacing: 0,
                }),
            },
            icon: {
                base: font(32, {
                    lineHeight: 16,
                    letterSpacing: 0,
                }),
            },
            'icon-lg': {
                base: font(48, {
                    lineHeight: 24,
                    letterSpacing: 0,
                }),
            },
            indicator: {
                base: font(12, {
                    lineHeight: 12,
                    letterSpacing: 0,
                    textTransform: 'uppercase',
                }),
            },
            logo: {
                base: font(32),
            },
            small: {
                base: font(12, {
                    lineHeight: 12,
                    letterSpacing: 0,
                }),
            },
        },
        extend: {
            aspectRatio: {
                '16/9': '16 / 9',
            },
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
                gutter: 'var(--gutter, 1rem)',
                gg: 'var(--grid-gap, 0.75rem)',
            },
            aspectRatio: {
                cover: '16 / 9',
            },
            zIndex: {
                filters: 20,
                controls: 10,
                info: 30,
                'main-menu': 60,
                header: 50,
                filter: 49,
                footer: 50,
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
            screens: {
                ios: { raw: '@supports (-webkit-touch-callout: none)' },
                'not-ios': {
                    raw: '@supports not (-webkit-touch-callout: none)',
                },
            },
        },
    },
}
