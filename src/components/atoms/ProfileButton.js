'use client'

import { NavLink } from './NavLink'
import PersonIcon from '@mui/icons-material/Person'
import { useAuth } from '@/hooks/auth'

export const ProfileButton = ({ ...props }) => {
    const { user } = useAuth()

    return (
        <NavLink {...props} href={user ? '/perfil' : '/entrar'}>
            <PersonIcon />
        </NavLink>
    )
}
