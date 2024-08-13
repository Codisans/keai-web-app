'use client'

import { useAuth } from '@/hooks/auth'
import { Button } from '@/components/atoms/Button'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return user ? (
        <Button href="/perfil">Perfil</Button>
    ) : (
        <>
            <Button href="/entrar">Ingresar</Button>
            <Button href="/crear-cuenta">Registrar</Button>
        </>
    )
}

export default LoginLinks
