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
                        <Link className="button" href="/perfil">
                            Perfil
                        </Link>
                    </li>
                    <li>
                        <Link className="button" href="/eventos">
                            Eventos
                        </Link>
                    </li>
                    <li>
                        <Link className="button" href="/mapa">
                            Mapa
                        </Link>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link className="button" href="/crear-cuenta">
                            Registrar
                        </Link>
                    </li>
                    <li>
                        <Link className="button" href="/entrar">
                            Ingresar
                        </Link>
                    </li>
                </>
            )}
        </ul>
    )
}
