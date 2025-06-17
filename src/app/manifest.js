export default function manifest() {
    return {
        name: 'Keai',
        short_name: 'Keai',
        description:
            'Descubre la vida de tu ciudad. Encuentra panoramas y enterate de todo lo que pasa cerca de ti.',
        start_url: '/eventos',
        display: 'standalone',
        background_color: '#f7f7f7',
        theme_color: '#f7f7f7',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
