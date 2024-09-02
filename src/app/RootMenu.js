'use client'

import { useAuth } from '@/hooks/auth'
import { Button } from '@/components/atoms/Button'

export const RootMenu = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <ul className="w-full h-max grid grid-cols-2 gap-gutter my-auto">
            {user ? (
                <>
                    <li className="col-span-1">
                        <Button style="big" href="/cuenta">
                            Cuenta (consumer)
                        </Button>
                    </li>
                    <li className="col-span-1">
                        <Button style="big" href="/perfil">
                            Perfil (consumer)
                        </Button>
                    </li>
                    <li className="col-span-1">
                        <Button style="big" href="/eventos">
                            Eventos (consumer)
                        </Button>
                    </li>
                    <li className="col-span-1">
                        <Button style="big" href="/mapa">
                            Mapa (consumer)
                        </Button>
                    </li>
                    <li className="col-span-1">
                        <Button style="big" href="/dashboard">
                            Dashboard (manager)
                        </Button>
                    </li>
                    <li className="col-span-1">
                        <Button style="big" href="/mapa">
                            Account (manager)
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
