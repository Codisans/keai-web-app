import Link from 'next/link'

export const ButtonLink = ({ className = '', ...props }) => (
    <Link
        className={`${className} block text-button text-center font-primary uppercase bg-black border-black border-2 px-3 py-1 rounded text-white`}
        {...props}
    />
)

export const TextLink = ({ className = '', ...props }) => {
    return (
        <Link
            className={`${className} underline font-primary text-button`}
            {...props}
        />
    )
}
