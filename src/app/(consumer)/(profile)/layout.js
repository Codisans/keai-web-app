'use client'

import { ProfileHeader } from './ProfileHeader'
import { ConsumerFooter } from '../ConsumerFooter'
import { ConsumerMenu } from './ConsumerMenu'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const UserLayout = ({ children }) => {
    const { user, error } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (error?.response?.status === 401) {
            router.push('/entrar')
        }
    }, [user, error])

    return (
        <>
            <ProfileHeader />
            <ConsumerMenu />
            <main className="w-full grow min-h-[calc(100svh-1.75rem)]">
                {children}
            </main>
            <ConsumerFooter />
        </>
    )
}

export default UserLayout
