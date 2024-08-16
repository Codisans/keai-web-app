'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { Logo } from '@/components/atoms/Logo'
import { Button } from '@/components/atoms/Button'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import { useContext, useEffect } from 'react'
import { UiContext } from '@/app/AppContext'
import CloseIcon from '@mui/icons-material/Close'
import { usePathname } from 'next/navigation'

export const MainMenu = () => {
    const { logout } = useAuth()
    const path = usePathname()
    const { menuIsOpen, setMenuIsOpen } = useContext(UiContext)

    useEffect(() => {
        setMenuIsOpen(false)
    }, [path])

    return (
        <div
            className={`fixed inset-0 overflow-hidden z-main-menu invisible open:visible transition-visibility duration-500 ${menuIsOpen ? 'open' : ''}`}>
            <button
                onClick={() => setMenuIsOpen(false)}
                className="absolute inset-0 block bg-black/40 transition-opacity duration-500 ease-in-out opacity-0 open:opacity-100">
                <span className="sr-only">Cerrar</span>
            </button>
            <div className="relative h-full w-max bg-white ml-auto z-1 flex flex-col items-end justify-center gap-gutter p-gutter translate-x-full transition-transform duration-500 ease-in-out open:translate-x-0">
                <div className="py-gutter">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <nav className="pl-12">
                    <ul className="flex flex-col items-end justify-center gap-gutter">
                        <li>
                            <Button className="gap-2" href="/cuenta">
                                <SettingsIcon />
                                <span>Cuenta</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="gap-2" href="/perfil">
                                <PersonIcon />
                                <span>Perfil</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="gap-2" onClick={logout}>
                                <LogoutIcon />
                                <span>Cerrar session</span>
                            </Button>
                        </li>
                    </ul>
                </nav>
                <button
                    className="absolute top-gutter left-gutter text-icon"
                    onClick={() => setMenuIsOpen(false)}>
                    <CloseIcon />
                </button>
            </div>
        </div>
    )
}
