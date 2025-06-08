'use client'

import { useAuth } from '@/hooks/auth'
import LogoutIcon from '@mui/icons-material/Logout'

export const LogoutButton = ({ className = '' }) => {
    const { logout } = useAuth()

    return (
        <button className={`button-icon ${className}`} onClick={logout}>
            <LogoutIcon />
            <span>Cerrar session</span>
        </button>
    )
}
