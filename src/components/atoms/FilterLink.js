'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

export const FilterLink = ({
    href,
    className = '',
    children,
    preserveParams = false,
    ...props
}) => {
    const path = usePathname()
    const searchParams = useSearchParams()

    return (
        <Link
            href={{
                pathname: href,
                query: preserveParams ? searchParams : null,
            }}
            className={`${className} ${path == href ? 'current' : ''}`}
            {...props}>
            {children}
        </Link>
    )
}
