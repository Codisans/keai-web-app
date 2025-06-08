'use client'

import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { FormField } from '@/components/molecules/FormField'
import Link from 'next/link'

const Page = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/perfil',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        console.log(errors)
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={submitForm}>
            <div className="flex flex-row items-center justify-end gap-4">
                <span className="text-sm">Ya tienes una cuenta?</span>
                <Link className="button alt" href="/entrar">
                    Entrar
                </Link>
            </div>
            {/* Name */}
            <FormField
                label="Nombre"
                name="name"
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
                required
                autoFocus
            />

            {/* Gender */}
            <FormField
                label="Genero"
                name="gender"
                type="select"
                options={[
                    { value: '', label: '-- Selecciona --' },
                    { value: 'male', label: 'Masculino' },
                    { value: 'female', label: 'Femenino' },
                    { value: 'other', label: 'Otro' },
                ]}
                value={gender}
                onChange={event => setGender(event.target.value)}
                required
            />

            {/* Date of Birth */}
            <FormField
                label="Fecha de nacimiento"
                name="dob"
                type="date"
                value={dob}
                onChange={event => setDob(event.target.value)}
                required
            />

            {/* Email Address */}
            <FormField
                label="Correo"
                name="email"
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
            />

            {/* Password */}
            <FormField
                label="Clave"
                name="password"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                required
                autoComplete="new-password"
            />

            {/* Confirm Password */}
            <FormField
                label="Confirmar clave"
                name="passwordConfirmation"
                type="password"
                value={passwordConfirmation}
                onChange={event => setPasswordConfirmation(event.target.value)}
                required
            />

            <input type="hidden" name="role" value="app_user" />

            <div className="flex items-center justify-end gap-4">
                {/* <Link className="text-sm underline-out" href="/entrar">
                    Ya tienes una cuenta?
                </Link> */}
                <button className="button dark" type="submit">
                    Crear cuenta
                </button>
            </div>
        </form>
    )
}

export default Page
