'use client'

import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/blocks/Logo'
import { ButtonLink } from '@/components/partials/Link'
import { Button } from '@/components/partials/Button'

function Header({ user }) {
    const { logout } = useAuth()

    return (
        <header className="h-nav flex-none relative z-50 bg-white relative border-b">
            <nav className="flex justify-between items-center h-full gap-x-gutter px-gutter">
                <Link href="/dashboard">
                    <Logo />
                </Link>
                <ul className="flex items-center justify-between gap-x-gutter">
                    <li>
                        <ButtonLink href="/dashboard">Dashboard</ButtonLink>
                    </li>
                    <li>
                        <Button onClick={logout}>Logout</Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
