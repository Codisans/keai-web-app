'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({ active = false, children, className, href, ...props }) {
    const path = usePathname()
    return (
        <Link
            {...props}
            href={href}
            className={`${className} ${path == href ? 'active' : ''}`}>
            {children}
        </Link>
    )
}

export default NavLink
