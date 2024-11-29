import '@/app/global.css'
import { AppContextProvider } from './AppContext'
import { Suspense } from 'react'

const RootLayout = ({ children }) => {
    return (
        <html className="select-none overscroll-none h-screen-small" lang="es">
            <body className="flex flex-col w-full overflow-y-auto font-sans overscroll-none h-screen-small">
                <AppContextProvider>
                    <Suspense>{children}</Suspense>
                </AppContextProvider>
            </body>
        </html>
    )
}

export default RootLayout
