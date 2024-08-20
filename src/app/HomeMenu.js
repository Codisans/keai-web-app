'use client'

import { useAuth } from '@/hooks/auth'
import { Button } from '@/components/atoms/Button'

export const HomeMenu = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <ul className="w-full h-max grid grid-cols-2 gap-gutter my-auto">
            {user ? (
                <>
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
                </>
            ) : (
                <>
                    <li className="col-span-1">
                        <Button style="big" href="/crear-cuenta">
                            Registrar
                        </Button>
                    </li>
                    <li className="col-span-1">
                        <Button style="big" href="/entrar">
                            Ingresar
                        </Button>
                    </li>
                </>
            )}
        </ul>
    )
}
