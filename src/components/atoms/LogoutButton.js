'use client'

import { useAuth } from '@/hooks/auth'
import LogoutIcon from '@mui/icons-material/Logout'
import { Button } from './Button'

export const LogoutButton = ({ className = '' }) => {
    const { logout } = useAuth()

    return (
        <Button className={className} onClick={logout}>
            <LogoutIcon />
            <span className="sr-only">Cerrar session</span>
        </Button>
    )
}
