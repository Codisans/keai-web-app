'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'
import Header from './Header'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="h-screen w-full bg-gray-100">
            <Header />
            <main className="h-main relative">{children}</main>
            <Navigation user={user} />
        </div>
    )
}

export default AppLayout
