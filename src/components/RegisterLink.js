import Link from 'next/link'

export const RegisterLink = () => {
    return (
        <Link
            href="/crear-cuenta"
            className="text-button font-primary uppercase bg-black px-3 py-1 rounded text-white">
            Crear cuenta
        </Link>
    )
}