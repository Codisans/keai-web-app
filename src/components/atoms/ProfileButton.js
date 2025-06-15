'use client'

import { NavLink } from './NavLink'
import { useAuth } from '@/hooks/auth'
import { Symbol } from '@/components/atoms/Symbol'

export const ProfileButton = ({ ...props }) => {
    const { user } = useAuth()

    return (
        <NavLink {...props} href={user ? '/perfil' : '/entrar'}>
            <Symbol className="w-6 h-6" name="profile-icon" />
        </NavLink>
    )
}
