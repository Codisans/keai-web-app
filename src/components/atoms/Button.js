'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Button = ({
    href,
    className = '',
    icon,
    children,
    style = icon ? 'icon' : 'regular',
    type = 'submit',
    ...props
}) => {
    const path = usePathname()
    const styles = (function (s) {
        switch (s) {
            case 'icon':
                return 'inline-flex justify-center items-center text-icon px-3 h-10 rounded-md bg-grey text-black'
            case 'big':
                return 'w-full flex items-center justify-center h-28 text-big-button rounded-md bg-grey text-black'
            case 'regular':
            default:
                return 'inline-flex justify-center items-center text-button px-3 h-10 rounded-md bg-grey text-black'
        }
    })(style)

    if (href) {
        return (
            <Link
                href={href}
                className={`${className} ${styles} ${path == href ? 'active' : ''}`}
                {...props}>
                {icon || children}
            </Link>
        )
    }

    return (
        <button className={`${className} ${styles}`} type={type} {...props}>
            {icon || children}
        </button>
    )
}
