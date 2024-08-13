'use client'

import { useAuth } from '@/hooks/auth'
import { Button } from '@/components/atoms/Button'

export const AppLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        user && (
            <>
                <Button href="/eventos">Eventos</Button>
                <Button href="/mapa">Mapa</Button>
            </>
        )
    )
}
