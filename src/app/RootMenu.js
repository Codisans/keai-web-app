'use client'

import { useAuth } from '@/hooks/auth'
import Link from 'next/link'

export const RootMenu = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <ul className="w-full flex flex-col items-center gap-grid my-auto">
            {user ? (
                <>
                    <li>
                        <Link href="/perfil">Perfil</Link>
                    </li>
                    <li>
                        <Link href="/eventos">Eventos</Link>
                    </li>
                    <li>
                        <Link href="/mapa">Mapa</Link>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link href="/crear-cuenta">Registrar</Link>
                    </li>
                    <li>
                        <Link href="/entrar">Ingresar</Link>
                    </li>
                </>
            )}
        </ul>
    )
}
