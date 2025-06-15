'use client'

import { useAuth } from '@/hooks/auth'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import Link from 'next/link'
import { FormField } from '@/components/molecules/FormField'
import { Symbol } from '@/components/atoms/Symbol'

const Login = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/perfil',
    })

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    useEffect(() => {
        if (!errors) return
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

    const submitForm = async event => {
        event.preventDefault()
        setIsLoading(true)

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false))
    }

    return (
        <form className="w-full flex flex-col gap-4" onSubmit={submitForm}>
            <AuthSessionStatus className="py-grid-gap" status={status} />

            <div className="flex flex-row items-center justify-end gap-4">
                <span className="text-sm">No tienes cuenta?</span>
                <Link className="button alt" href="/crear-cuenta">
                    Crear cuenta
                </Link>
            </div>

            <div ref={emailRef} className="w-full flex flex-col gap-y-2">
                {/* Email Address */}
                <FormField
                    label="Correo"
                    name="email"
                    type="email"
                    value={email}
                    onChange={event => {
                        setEmail(event.target.value?.toLowerCase())
                        emailRef.current.classList.remove('error')
                    }}
                    error={errors.email}
                    required
                    autoFocus
                />
                {Object.hasOwn(errors ?? {}, 'email') && (
                    <div className="typo-regular text-xs flex flex-col gap-y-2 text-error">
                        {errors['email'].map((err, i) => (
                            <p key={i}>{err}</p>
                        ))}
                    </div>
                )}
            </div>

            <div ref={passwordRef} className="w-full flex flex-col gap-y-2">
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
                    error={errors.password}
                    required
                    autoComplete="current-password"
                />
                {Object.hasOwn(errors ?? {}, 'password') && (
                    <div className="typo-regular text-xs flex flex-col gap-y-2 text-error">
                        {errors['password'].map((err, i) => (
                            <p key={i}>{err}</p>
                        ))}
                    </div>
                )}
            </div>

            {/* Remember Me */}
            <div className="block">
                <label
                    htmlFor="remember_me"
                    className="inline-flex items-center">
                    <input
                        id="remember_me"
                        type="checkbox"
                        name="remember"
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        onChange={event =>
                            setShouldRemember(event.target.checked)
                        }
                    />

                    <span className="ml-2 text-sm text-gray-600">Recordar</span>
                </label>
            </div>

            <div className="flex flex-row items-center justify-end gap-4">
                <Link className="text-sm underline" href="/recuperar-clave">
                    Recuperar clave
                </Link>
                <button className="button dark relative" type="submit">
                    <Symbol
                        name="spinner-icon"
                        className={`absolute h-[1em] w-[1em] animate-spin text-grey ${isLoading ? '' : 'invisible'}`}
                    />
                    <span className={isLoading ? 'invisible' : ''}>Entrar</span>
                </button>
            </div>
        </form>
    )
}

export default Login
