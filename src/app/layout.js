import '@/app/global.css'
import Head from 'next/head'

const RootLayout = ({ children }) => {
    return (
        <html lang="en font-primary">
            <body className="w-screen h-screen overflow-hidden">
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
