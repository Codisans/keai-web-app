'use client'

import { Button } from '@/components/atoms/Button'
import { TextLink } from '@/components/atoms/TextLink'
import Input from '@/components/atoms/Input'
import InputError from '@/components/atoms/InputError'
import Label from '@/components/atoms/Label'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'

const Page = () => {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/perfil',
    })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <>
            <div className="mb-4 text-sm text-gray-600">
                Perdiste tu clave? No hay problema. Ingresa tu dirección de
                correo electrónico y te enviaremos un enlace para restablecer tu
                clave y elegir una nueva.
            </div>

            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />

            <form onSubmit={submitForm}>
                {/* Email Address */}
                <div>
                    <Label htmlFor="email">Correo</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError messages={errors.email} className="mt-2" />
                </div>

                <div className="flex flex-xol gap-4 mt-4">
                    <TextLink href="/crear-cuenta">Crear cuenta</TextLink>
                    <Button>Recuperar</Button>
                </div>
            </form>
        </>
    )
}

export default Page
