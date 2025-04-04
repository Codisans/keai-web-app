import '@/css/main.css'
import { AppContextProvider } from './AppContext'
import { GoogleAnalytics } from '@next/third-parties/google'

const RootLayout = ({ children }) => {
    return (
        <html className="select-none overscroll-none h-svh" lang="es">
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
            <body className="flex flex-col w-full overflow-y-auto font-sans overscroll-none h-svh">
                <AppContextProvider>{children}</AppContextProvider>
                <GoogleAnalytics gaId="G-YKTP4XWEGV" />
            </body>
        </html>
    )
}

export default RootLayout
