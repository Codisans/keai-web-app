import '@/app/global.css'
import Head from 'next/head'
import { AppContext } from './AppContext'
import { getCategories } from '@/api/getCategories'
import { MenuPullout } from '@/components/molecules/MenuPullout'
import { MainMenu } from '@/components/molecules/MainMenu'

const RootLayout = async ({ children }) => {
    const categories = await getCategories()

    return (
        <html lang="es">
            <body className="w-full h-screen overflow-y-auto">
                <AppContext>
                    {children}
                    <MenuPullout>
                        <MainMenu categories={categories} />
                    </MenuPullout>
                </AppContext>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
