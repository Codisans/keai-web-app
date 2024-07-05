import { Nunito } from 'next/font/google'
import '@/app/global.css'

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="w-screen h-screen">{children}</body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
