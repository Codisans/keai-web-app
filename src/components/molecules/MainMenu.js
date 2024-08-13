'use client'

import { useAuth } from '@/hooks/auth'
import { Button } from '@/components/atoms/Button'

export const MainMenu = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return user ? (
        <ul className="w-full grid grid-cols-2 gap-gutter">
            <li className="col-span-1">
                <Button style="big" href="/cuenta">
                    Cuenta
                </Button>
            </li>
            <li className="col-span-1">
                <Button style="big" href="/perfil">
                    Perfil
                </Button>
            </li>
            <li className="col-span-1">
                <Button style="big" href="/eventos">
                    Eventos
                </Button>
            </li>
            <li className="col-span-1">
                <Button style="big" href="/mapa">
                    Mapa
                </Button>
            </li>
        </ul>
    ) : (
        <ul>
            <li className="col-span-1">
                <Button style="big" href="/entrar">
                    Ingresar
                </Button>
            </li>
            <li className="col-span-1">
                <Button style="big" href="/crear-cuenta">
                    Registrar
                </Button>
            </li>
        </ul>
    )
}
