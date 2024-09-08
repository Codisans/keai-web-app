import '@/app/global.css'
import { AppContextProvider } from './AppContext'
import { SpeedInsights } from '@vercel/speed-insights/next'

const RootLayout = ({ children }) => {
    return (
        <html className="overscroll-none select-none" lang="es">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, minimal-ui"
                />
            </head>
            <body className="overscroll-none w-full h-screen-small overflow-y-auto font-sans flex flex-col">
                <SpeedInsights />
                <AppContextProvider>{children}</AppContextProvider>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'KEAI',
}

export default RootLayout
