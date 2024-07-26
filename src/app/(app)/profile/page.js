'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'
import { useRouter } from 'next/router'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    const router = useRouter()

    if (!user) {
        red
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
