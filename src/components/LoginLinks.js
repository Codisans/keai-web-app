'use client'

import { useAuth } from '@/hooks/auth'
import { ButtonLink } from '@/components/partials/Link'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return user ? (
        <ButtonLink href="/dashboard">Dashboard</ButtonLink>
    ) : (
        <>
            <ButtonLink href="/login">Login</ButtonLink>
            <ButtonLink href="/register">Register</ButtonLink>
        </>
    )
}

export default LoginLinks
