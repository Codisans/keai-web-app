import MuiTheme from '@/app/MuiTheme'
import Link from 'next/link'

export const IconButton = ({
    href,
    className = '',
    icon,
    children,
    ...props
}) => {
    if (href) {
        return (
            <MuiTheme>
                <Link
                    href={href}
                    className={`${className} block text-center text-icon px-3 py-1 rounded bg-blue text-white hover:text-yellow`}
                    {...props}>
                    {icon || children}
                </Link>
            </MuiTheme>
        )
    }

    return (
        <MuiTheme>
            <button
                className={`${className} block text-center text-icon px-3 py-1 rounded bg-blue text-white hover:text-yellow`}
                {...props}>
                {icon || children}
            </button>
        </MuiTheme>
    )
}
