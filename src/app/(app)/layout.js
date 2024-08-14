// 'use client'

// import { useAuth } from '@/hooks/auth'
import { Navigation } from '@/components/organisms/Navigation'
import { AppContext } from '../AppContext'
import { CategoryBar } from '@/components/molecules/CategoryBar'
import { MainMenu } from '@/components/organisms/MainMenu'

const AppLayout = ({ children }) => {
    // const { user } = useAuth({ middleware: 'auth' })

    // if (!user) {
    //     return <Loading />
    // }

    return (
        <AppContext>
            <div className="flex flex-col h-full w-full">
                <CategoryBar />
                <main className="grow relative overflow-hidden">
                    {children}
                </main>
                <Navigation />
                <MainMenu />
            </div>
        </AppContext>
    )
}

export default AppLayout
