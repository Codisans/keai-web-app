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
            <main className="w-full grow relative flex flex-col mx-auto max-w-2xl pt-20 min-h-svh">
                {children}
            </main>
            <ConsumerFooter />
        </>
    )
}

export default UserLayout
