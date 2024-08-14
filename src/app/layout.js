import '@/app/global.css'
import Head from 'next/head'

const RootLayout = ({ children }) => {
    return (
        <html lang="es">
            <body className="w-screen h-screen overflow-y-auto">
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
