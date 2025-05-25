'use client'

import { NavLink } from "./NavLink"
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from "@/hooks/auth";

export const ProfileButton = ({ ...props }) => {
    const { user } = useAuth()

    return user ? (        
            <NavLink {...props} href="/perfil">
                <PersonIcon />
            </NavLink> 
        ) : ( 
            <NavLink {...props} href="/entrar">
                <LoginIcon />
            </NavLink>
        )
}