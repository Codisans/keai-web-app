'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/components/organisms/Navigation'
import Loading from '@/app/(consumer)/(browse)/Loading'
import Header from './Header'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <>
            <Header />
            <main className="h-main relative">{children}</main>
            <Navigation user={user} />
        </>
    )
}

export default AppLayout
