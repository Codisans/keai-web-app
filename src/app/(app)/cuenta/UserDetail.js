'use client'

import { useAuth } from '@/hooks/auth'

export const UserDetail = () => {
    const { user } = useAuth()

    return <div>Usuario: {user.name}!</div>
}