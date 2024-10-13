import '@/app/global.css'
import { AppContextProvider } from './AppContext'
import { SpeedInsights } from '@vercel/speed-insights/next'

const RootLayout = ({ children }) => {
    return (
        <html className="overscroll-none select-none h-screen-small" lang="es">
            <body className="overscroll-none w-full h-screen-small overflow-y-auto font-sans flex flex-col">
                <SpeedInsights />
                <AppContextProvider>{children}</AppContextProvider>
            </body>
        </html>
    )
}

export default RootLayout
