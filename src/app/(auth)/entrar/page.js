'use client'

import InputError from '@/components/atoms/InputError'
import Label from '@/components/atoms/Label'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { TextLink } from '@/components/atoms/TextLink'
import DataUsageIcon from '@mui/icons-material/DataUsage'
import Link from 'next/link'

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
        <form className="w-full" onSubmit={submitForm}>
            <AuthSessionStatus className="py-grid-gap" status={status} />
            {/* Email Address */}
            <div className={`pb-4 ${errors.email ? 'error' : ''}`}>
                <Label htmlFor="email">Correo</Label>

                <input
                    id="email"
                    type="email"
                    value={email}
                    className="form-input w-full"
                    onChange={event => setEmail(event.target.value)}
                    required
                    autoFocus
                />

                <InputError messages={errors.email} className="mt-2" />
            </div>

            {/* Password */}
            <div className={`pb-4 ${errors.password ? 'error' : ''}`}>
                <Label htmlFor="password">Clave</Label>

                <input
                    id="password"
                    type="password"
                    value={password}
                    className="form-input w-full"
                    onChange={event => setPassword(event.target.value)}
                    required
                    autoComplete="current-password"
                />

                <InputError messages={errors.password} className="mt-2" />
            </div>

            {/* Remember Me */}
            <div className="block pb-4">
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

            <div className="flex flex-col items-center gap-4 dark">
                <button
                    className="w-18 flex justify-center items-center hover:text-orange button"
                    type="submit">
                    {isLoading ? (
                        <DataUsageIcon className="h-[1em] w-[1em] animate-spin text-grey" />
                    ) : (
                        <span>Entrar</span>
                    )}
                </button>
                <TextLink href="/recuperar-clave">Recuperar clave</TextLink>
                <Link className="button bg-orange text-black" href="/crear-cuenta">
                    Crear cuenta
                </Link>
            </div>
        </form>
    )
}

export default Login
