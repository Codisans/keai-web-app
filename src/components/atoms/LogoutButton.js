'use client'

import { useAuth } from '@/hooks/auth'
import LogoutIcon from '@mui/icons-material/Logout'

export const LogoutButton = ({ className = '' }) => {
    const { logout } = useAuth()

    return (
        <button className={`button ${className}`} onClick={logout}>
            <LogoutIcon />
            <span className="sr-only">Cerrar session</span>
        </button>
    )
}
