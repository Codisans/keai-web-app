import Link from 'next/link'

export const TextLink = ({ className = '', ...props }) => {
    return (
        <Link
            className={`${className} underline font-primary text-button`}
            {...props}
        />
    )
}
