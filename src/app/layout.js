import '@/app/global.css'
import { AppContextProvider } from './AppContext'
import { SpeedInsights } from '@vercel/speed-insights/next'

const RootLayout = ({ children }) => {
    return (
        <html className="overscroll-none" lang="es">
            <body className="w-full h-screen overflow-y-auto font-sans">
                <AppContextProvider>{children}</AppContextProvider>
                <SpeedInsights />
            </body>
        </html>
    )
}

export const metadata = {
    title: 'KEAI',
}

export default RootLayout
