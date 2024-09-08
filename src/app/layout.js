import '@/app/global.css'
import { AppContextProvider } from './AppContext'
import { SpeedInsights } from '@vercel/speed-insights/next'

const RootLayout = ({ children }) => {
    return (
        <html className="overscroll-none select-none" lang="es">
            <body className="w-full max-h-screen-small h-screen-small overflow-y-auto font-sans">
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
