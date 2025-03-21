'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Button = ({
    href,
    className = '',
    icon,
    children,
    active = null,
    style = icon ? 'icon' : 'regular',
    type = 'button',
    disabled = false,
    ...props
}) => {
    const path = usePathname()
    const styles = (function (s) {
        switch (s) {
            case 'none':
                return ''
            case 'icon':
                return 'inline-flex justify-center items-center text-icon px-3 py-1.5 h-10 rounded-button bg-white text-black active:bg-grey'
            case 'big':
                return 'w-full flex items-center justify-center h-28 text-big-button rounded-button bg-white border border-grey-3 text-black active:bg-grey'
            case 'regular':
            default:
                return 'inline-flex justify-center items-center text-button px-3 h-10 rounded-button bg-white border border-grey-3 text-black active:bg-grey'
        }
    })(style)

    if (href) {
        return (
            <Link
                href={href}
                className={`${className} ${styles} ${active != null ? (active ? 'active' : '') : path == href ? 'active' : ''} dark:bg-black dark:text-white select-none active:bg-black/10 active:pointer-events-none`}
                {...props}>
                {icon || children}
            </Link>
        )
    }

    return (
        <button
            className={`${className} ${styles} ${active ? 'active' : ''} ${disabled ? 'disabled' : ''} dark:bg-black dark:text-white disabled:text-grey-dark disabled:pointer-events-none`}
            type={type}
            disabled={disabled}
            {...props}>
            {icon || children}
        </button>
    )
}
