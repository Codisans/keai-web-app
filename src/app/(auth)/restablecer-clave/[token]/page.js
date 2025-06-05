'use client'

import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { FormField } from '@/components/molecules/FormField'

const PasswordReset = () => {
    const searchParams = useSearchParams()

    const { resetPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        console.log(errors)
        event.preventDefault()

        resetPassword({
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
            setStatus,
        })
    }

    useEffect(() => {
        setEmail(searchParams.get('email'))
    }, [searchParams.get('email')])

    return (
        <div className="flex flex-col gap-8">
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

                {/* Password */}
                <FormField
                    label="Clave"
                    name="password"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />

                {/* Confirm Password */}
                <FormField
                    label="Confirmar clave"
                    name="passwordConfirmation"
                    type="password"
                    value={passwordConfirmation}
                    onChange={event =>
                        setPasswordConfirmation(event.target.value)
                    }
                    required
                />

                <div className="flex justify-end gap-4">
                    <button className="button dark" type="submit">
                        Restablecer clave
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PasswordReset
