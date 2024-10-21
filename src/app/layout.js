import '@/app/global.css'
import { AppContextProvider } from './AppContext'

const RootLayout = ({ children }) => {
    return (
        <html className="overscroll-none select-none h-screen-small" lang="es">
            <body className="overscroll-none w-full h-screen-small overflow-y-auto font-sans flex flex-col">
                <AppContextProvider>{children}</AppContextProvider>
            </body>
        </html>
    )
}

export default RootLayout
