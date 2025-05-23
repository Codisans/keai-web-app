import '@/css/main.css'
import { AppContextProvider } from './AppContext'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { Open_Sans } from 'next/font/google'
 
const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '600'],
    preload: true,
    display: 'swap',
    variable: '--google-font-sans',
})

const RootLayout = ({ children }) => {
    return (
        <html className={`${openSans.className} select-none overscroll-none`} style={{ "--google-font-sans": openSans.style.fontFamily }} lang="es">
            <head>
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-96x96.png"
                    sizes="96x96"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <meta name="apple-mobile-web-app-title" content="KEAI" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className="bg-white font-sans overscroll-none min-h-svh">
                <AppContextProvider>{children}</AppContextProvider>
                <GoogleAnalytics gaId="G-YKTP4XWEGV" />
                <Analytics />
            </body>
        </html>
    )
}

export default RootLayout
