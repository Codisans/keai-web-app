'use client'

import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/atoms/Logo'
import { IconButton } from '@/components/atoms/IconButton'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

function Header({ user }) {
    const { logout } = useAuth()

    return (
        <header className="h-nav flex-none relative z-50 bg-white relative">
            <nav className="flex justify-between items-center h-full gap-x-gutter px-gutter">
                <Link href="/">
                    <Logo />
                </Link>
                <ul className="flex items-center justify-between gap-x-gutter">
                    <li>
                        <IconButton href="/cuenta" icon={<SettingsIcon />} />
                    </li>
                    <li>
                        <IconButton href="/perfil" icon={<PersonIcon />} />
                    </li>
                    <li>
                        <IconButton onClick={logout} icon={<LogoutIcon />} />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
