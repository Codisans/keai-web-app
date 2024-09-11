'use client'
import '@/app/global.css'
import { AppContextProvider } from './AppContext'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { useEffect } from 'react'

const RootLayout = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 1)
    }, [])
    return (
        <html className="overscroll-none select-none" lang="es">
            <body className="overscroll-none w-full h-screen-small overflow-y-auto font-sans flex flex-col">
                <SpeedInsights />
                <AppContextProvider>{children}</AppContextProvider>
            </body>
        </html>
    )
}

export default RootLayout
