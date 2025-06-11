'use client'

import { useAuth } from '@/hooks/auth'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { FormField } from '@/components/molecules/FormField'

const PasswordReset = () => {
    const searchParams = useSearchParams()

    const { resetPassword } = useAuth({ middleware: 'guest' })

    const passwordRef = useRef()
    const emailRef = useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        Object.keys(errors).forEach(key => {
            switch (key) {
                case 'password':
                    passwordRef.current.classList.add('error')
                    break
                case 'email':
                    emailRef.current.classList.add('error')
                    break
                default:
                    break
            }
        })
    }, [errors])

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
        setEmail(searchParams.get('email') ?? '')
    }, [searchParams.get('email')])

    return (
        <div className="flex flex-col gap-8">
            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />

            <form className="flex flex-col gap-4" onSubmit={submitForm}>
                <div ref={emailRef} className="w-full flex flex-col gap-y-2">
                    {/* Email Address */}
                    <FormField
                        label="Correo"
                        name="email"
                        type="email"
                        value={email}
                        onChange={event => {
                            setEmail(event.target.value)
                            emailRef.current.classList.remove('error')
                        }}
                        required
                    />
                    {errors['email']?.length > 0 && (
                        <div className="typo-regular text-xs flex flex-col gap-y-2 text-error">
                            {errors['email'].map((err, i) => (
                                <p key={i}>{err}</p>
                            ))}
                        </div>
                    )}
                </div>
                <div ref={passwordRef} className="w-full flex flex-col gap-y-4">
                    {/* Password */}
                    <FormField
                        label="Clave"
                        name="password"
                        type="password"
                        value={password}
                        onChange={event => {
                            setPassword(event.target.value)
                            passwordRef.current.classList.remove('error')
                        }}
                        required
                        autoComplete="new-password"
                    />
                    {/* Confirm Password */}
                    <FormField
                        label="Confirmar clave"
                        name="passwordConfirmation"
                        type="password"
                        value={passwordConfirmation}
                        onChange={event => {
                            setPasswordConfirmation(event.target.value)
                            passwordRef.current.classList.remove('error')
                        }}
                        required
                    />
                    {errors['password']?.length > 0 && (
                        <div className="typo-regular text-xs flex flex-col gap-y-2 text-error">
                            {errors['password'].map((err, i) => (
                                <p key={i}>{err}</p>
                            ))}
                        </div>
                    )}
                </div>
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
