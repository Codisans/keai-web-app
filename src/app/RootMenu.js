'use client'

import { useAuth } from '@/hooks/auth'
import { Button } from '@/components/atoms/Button'
import { Loading } from './Loading'

export const RootMenu = () => {
    const { user } = useAuth({ middleware: 'guest' })

    if (!user) return <Loading />

    return (
        <ul className="w-full h-max grid grid-cols-2 gap-gg my-auto">
            {user ? (
                <>
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
