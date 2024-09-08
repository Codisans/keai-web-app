import '@/app/global.css'
import { AppContextProvider } from './AppContext'

const RootLayout = ({ children }) => {
    return (
        <html className="overscroll-none" lang="es">
            <body className="w-full h-screen overflow-y-auto font-sans">
                <AppContextProvider>{children}</AppContextProvider>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'KEAI',
}

export default RootLayout
