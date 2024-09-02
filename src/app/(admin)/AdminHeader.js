'use client'
import { Button } from '@/components/atoms/Button'
import { LogoutButton } from '@/components/atoms/LogoutButton'
import { Logo } from '@/components/atoms/Logo'
import Link from 'next/link'
import { NavLink } from '@/components/atoms/NavLink'

export const AdminHeader = () => {
    return (
        <header className="w-full h-min bg-white-alt grid-cols-12 grid">
            <div className="col-start-1 col-end-4 flex items-center px-gutter">
                <Link className="text-h2" href="/eventos" target="_blank">
                    <Logo />
                </Link>
            </div>
            <nav className="col-start-4 col-end-13 h-full">
                <ul className="flex items-end">
                    <li className="">
                        <AdminNavLink href="/admin" label="Admin" />
                    </li>
                    <li className="">
                        <AdminNavLink
                            href="/admin/webscraper"
                            label="Webscraper"
                        />
                    </li>
                    <li className="">
                        <AdminNavLink href="/admin/events" label="Events" />
                    </li>
                    <li className="">
                        <AdminNavLink href="/admin/tags" label="Tags" />
                    </li>
                    <li className="">
                        <AdminNavLink href="/admin/users" label="Users" />
                    </li>
                    <li className="">
                        <AdminNavLink
                            href="/admin/dashboard"
                            label="Dashboard"
                        />
                    </li>
                    <li className="p-gutter ml-auto">
                        <LogoutButton className="w-full" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export const AdminNavLink = ({ label, href }) => {
    return (
        <NavLink
            className="relative block hover:underline px-6 py-1.5 relative active:before:bg-white before:rounded-t before:-skew-x-12 before:absolute before:inset-y-0 before:left-0 before:right-1/4 active:after:bg-white after:rounded-t after:skew-x-12 after:absolute after:inset-y-0 after:right-0 after:left-1/4"
            href={href}>
            <span className="z-10 relative">{label}</span>
        </NavLink>
    )
}
