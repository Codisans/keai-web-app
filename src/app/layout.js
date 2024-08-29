import '@/app/global.css'
import Head from 'next/head'
import { AppContext } from './AppContext'

const RootLayout = ({ children }) => {
    return (
        <html lang="es">
            <body className="w-full h-screen overflow-y-auto">
                <AppContext>{children}</AppContext>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
