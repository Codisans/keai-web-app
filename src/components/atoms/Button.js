'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Button = ({
    href,
    className = '',
    icon,
    children,
    active,
    style = icon ? 'icon' : 'regular',
    type = 'submit',
    ...props
}) => {
    const path = usePathname()
    const styles = (function (s) {
        switch (s) {
            case 'icon':
                return 'inline-flex justify-center items-center text-icon px-3 h-10 rounded-button bg-white border border-grey-3 text-black hover:bg-grey-3'
            case 'big':
                return 'w-full flex items-center justify-center h-28 text-big-button rounded-button bg-white border border-grey-3 text-black hover:bg-grey-3'
            case 'regular':
            default:
                return 'inline-flex justify-center items-center text-button px-3 h-10 rounded-button bg-white border border-grey-3 text-black hover:bg-grey-3'
        }
    })(style)

    if (href) {
        return (
            <Link
                href={href}
                className={`${className} ${styles} ${href ? (path == href ? 'active' : '') : ''} active:text-black/20 active:pointer-events-none`}
                {...props}>
                {icon || children}
            </Link>
        )
    }

    return (
        <button
            className={`${className} ${styles} ${active ? 'active' : ''}`}
            type={type}
            {...props}>
            {icon || children}
        </button>
    )
}
