'use client'

import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import DataUsageIcon from '@mui/icons-material/DataUsage'
import Link from 'next/link'
import { FormField } from '@/components/molecules/FormField'

const Login = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/perfil',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

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

            {/* Email Address */}
            <FormField
                label="Correo"
                name="email"
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                error={errors.email}
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
                error={errors.password}
                required
                autoComplete="current-password"
            />

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
                <Link className="text-sm underline-out" href="/recuperar-clave">
                    Recuperar clave
                </Link>
                <button className="button dark" type="submit">
                    {isLoading ? (
                        <DataUsageIcon className="h-[1em] w-[1em] animate-spin text-grey" />
                    ) : (
                        <span>Entrar</span>
                    )}
                </button>
            </div>
        </form>
    )
}

export default Login
