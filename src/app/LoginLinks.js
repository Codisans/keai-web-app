'use client'

import { useAuth } from '@/hooks/auth'
import Link from 'next/link'
import PersonIcon from '@mui/icons-material/Person'

export const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <ul className="w-full flex flex-row justify-center items-center gap-2">
            {user ? (
                <li>
                    <Link className="button-icon alt" href="/perfil">
                        <PersonIcon />
                        <span>Ver perfil</span>
                    </Link>
                </li>
            ) : (
                <>
                    <li>
                        <Link className="button alt" href="/crear-cuenta">
                            Crear usuario
                        </Link>
                    </li>
                    <li>
                        <Link className="button dark" href="/entrar">
                            Ingresar
                        </Link>
                    </li>
                </>
            )}
        </ul>
    )
}
