'use client'

import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { FormField } from '@/components/molecules/FormField'
import Link from 'next/link'

const Page = () => {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/perfil',
    })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        console.log(errors)
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="text-sm text-black">
                <h1 className="text-lg typo-body font-semibold">
                    Perdiste tu clave?
                </h1>
                <p className="mt-4">No hay problema.</p>
                <p className="mt-4">
                    Ingresa tu dirección de correo electrónico y te enviaremos
                    un enlace para restablecer tu clave y elegir una nueva.
                </p>
            </div>

            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />

            <form className="flex flex-col gap-4" onSubmit={submitForm}>
                {/* Email Address */}
                <FormField
                    label="Correo"
                    name="email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                    autoFocus
                />

                <div className="flex justify-end gap-4">
                    <button className="button dark" type="submit">
                        Enviar correo y restablecer
                    </button>
                </div>
            </form>

            <div className="flex flex-row items-center justify-end gap-4">
                <span className="text-sm">No tienes cuenta?</span>
                <Link className="button alt" href="/crear-cuenta">
                    Crear cuenta
                </Link>
            </div>
        </div>
    )
}

export default Page
