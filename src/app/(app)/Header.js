'use client'

import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import { useAuth } from '@/hooks/auth'
import { usePathname } from 'next/navigation'

function Header({ user }) {
    const { logout } = useAuth()

    return (
        <header className="h-nav flex-none relative z-50 bg-white relative flex items-center justify-between px-6">
            <nav>
                <ul className="flex">
                    <li className="flex-shrink-0 flex items-center">
                        <Link href="/dashboard">
                            <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                        </Link>
                    </li>

                    <li className="space-x-8 sm:-my-px sm:ml-10 flex">
                        <NavLink
                            href="/dashboard"
                            active={usePathname() === '/dashboard'}>
                            Dashboard
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center gap-6">
                <div>{user?.name}</div>
                <button
                    className="bg-black px-4 py-1 text-white rounded"
                    onClick={logout}>
                    Logout
                </button>
            </div>
        </header>
    )
}

export default Header
