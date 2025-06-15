'use client'

import { useAuth } from '@/hooks/auth'
import { Symbol } from '@/components/atoms/Symbol'

export const LogoutButton = ({ className = '' }) => {
    const { logout } = useAuth()

    return (
        <button className={`button-icon ${className}`} onClick={logout}>
            <Symbol className="w-6 h-6" name="logout-icon" />
            <span>Cerrar session</span>
        </button>
    )
}
