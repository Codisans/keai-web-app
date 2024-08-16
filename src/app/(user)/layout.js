// 'use client'

// import { useAuth } from '@/hooks/auth'
import { MainMenu } from '@/components/molecules/MainMenu'
import { UserHeader } from './UserHeader'
import { UserFooter } from './UserFooter'

const AppLayout = ({ children }) => {
    // const { user } = useAuth({ middleware: 'auth' })

    // if (!user) {
    //     return <Loading />
    // }

    return (
        <div className="w-full flex flex-col min-h-screen">
            <UserHeader />
            <MainMenu />
            <main className="w-full grow relative flex flex-col">
                {children}
            </main>
            <UserFooter />
        </div>
    )
}

export default AppLayout
