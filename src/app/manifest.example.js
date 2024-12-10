export default function manifest() {
    return {
        name: 'Keai App',
        short_name: 'Keai',
        description: 'Keai App',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
