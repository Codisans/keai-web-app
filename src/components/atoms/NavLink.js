'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavLink = ({ href, className = '', children, ...props }) => {
    const path = usePathname()

    return (
        <Link
            href={href}
            className={`${className} ${path == href ? 'active' : ''}`}
            {...props}>
            {children}
        </Link>
    )
}
