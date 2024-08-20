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
    type = 'button',
    disabled = false,
    ...props
}) => {
    const path = usePathname()
    const styles = (function (s) {
        switch (s) {
            case 'icon':
                return 'inline-flex justify-center items-center text-icon px-3 h-10 rounded-button bg-white border border-grey-3 text-black active:bg-black/10'
            case 'big':
                return 'w-full flex items-center justify-center h-28 text-big-button rounded-button bg-white border border-grey-3 text-black active:bg-black/10'
            case 'regular':
            default:
                return 'inline-flex justify-center items-center text-button px-3 h-10 rounded-button bg-white border border-grey-3 text-black active:bg-black/10'
        }
    })(style)

    if (href) {
        return (
            <Link
                href={href}
                className={`${className} ${styles} ${href ? (path == href ? 'active' : '') : ''} active:bg-black/10 active:pointer-events-none`}
                {...props}>
                {icon || children}
            </Link>
        )
    }

    return (
        <button
            className={`${className} ${styles} ${active ? 'active' : ''} ${disabled ? 'disabled' : ''} disabled:text-black/10 disabled:-pointer-events-none ring-black/80 active:ring-2`}
            type={type}
            disabled={disabled}
            {...props}>
            {icon || children}
        </button>
    )
}
