'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

export const NavLink = ({
    href,
    pathname,
    className = '',
    children,
    exactPath = false,
    ...props
}) => {
    const path = usePathname()
    const searchParams = useSearchParams()
    const isCurrent = exactPath ? path === pathname : path.includes(pathname)

    return (
        <Link
            href={
                href ?? {
                    pathname: pathname,
                    query:
                        searchParams.size > 0
                            ? Object.fromEntries(
                                  Array.from(searchParams.entries()).map(
                                      ([key, value]) => [key, value],
                                  ),
                              )
                            : null,
                }
            }
            className={`${className} ${isCurrent ? 'current' : ''}`}
            {...props}>
            {children}
        </Link>
    )
}
