import '@/app/global.css'
import { AppContextProvider } from './AppContext'
import { Suspense } from 'react'
import Head from 'next/head'

const RootLayout = ({ children }) => {
    return (
        <html className="select-none overscroll-none h-screen-small" lang="es">
            <Head>
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-96x96.png"
                    sizes="96x96"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <meta name="apple-mobile-web-app-title" content="KEAI" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <body className="flex flex-col w-full overflow-y-auto font-sans overscroll-none h-screen-small">
                <AppContextProvider>
                    <Suspense>{children}</Suspense>
                </AppContextProvider>
            </body>
        </html>
    )
}

export default RootLayout
