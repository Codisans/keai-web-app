'use client'

import { useAuth } from '@/hooks/auth'
import { Button } from '@/components/atoms/Button'

export const RootMenu = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <ul className="w-full flex flex-col items-center gap-gg my-auto">
            {user ? (
                <>
                    <li>
                        <Button href="/perfil">Perfil</Button>
                    </li>
                    <li>
                        <Button href="/eventos">Eventos</Button>
                    </li>
                    <li>
                        <Button href="/mapa">Mapa</Button>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Button href="/crear-cuenta">Registrar</Button>
                    </li>
                    <li>
                        <Button href="/entrar">Ingresar</Button>
                    </li>
                </>
            )}
        </ul>
    )
}
