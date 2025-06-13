'use client'

import { useAuth } from '@/hooks/auth'
import { useEffect, useRef, useState } from 'react'
import { FormField } from '@/components/molecules/FormField'
import Link from 'next/link'
import moment from 'moment'

const Page = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/perfil',
    })

    const passwordRef = useRef()
    const emailRef = useRef()
    const nameRef = useRef()
    const genderRef = useRef()
    const dobRef = useRef()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(false)
        if (!errors) return
        Object.keys(errors).forEach(key => {
            switch (key) {
                case 'password':
                    passwordRef.current.classList.add('error')
                    break
                case 'email':
                    emailRef.current.classList.add('error')
                    break
                case 'name':
                    nameRef.current.classList.add('error')
                    break
                case 'date_of_birth':
                    dobRef.current.classList.add('error')
                    break
                case 'gender':
                    genderRef.current.classList.add('error')
                    break
                default:
                    break
            }
        })
    }, [errors])

    const submitForm = event => {
        event.preventDefault()
        setLoading(true)

        register({
            name,
            email,
            gender,
            password,
            password_confirmation: passwordConfirmation,
            date_of_birth: moment(dob).format('YYYY-MM-DD'),
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

            <div ref={nameRef} className="w-full flex flex-col gap-y-2">
                {/* Name */}
                <FormField
                    label="Nombre"
                    name="name"
                    type="text"
                    value={name}
                    onChange={event => {
                        setName(event.target.value)
                        nameRef.current.classList.remove('error')
                    }}
                    required
                    autoFocus
                />
                {Object.hasOwn(errors ?? {}, 'name') && (
                    <div className="typo-regular text-xs flex flex-col gap-y-2 text-error">
                        {errors['name'].map((err, i) => (
                            <p key={i}>{err}</p>
                        ))}
                    </div>
                )}
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
                    required
                />
                {Object.hasOwn(errors ?? {}, 'email') && (
                    <div className="typo-regular text-xs flex flex-col gap-y-2 text-error">
                        {errors['email'].map((err, i) => (
                            <p key={i}>{err}</p>
                        ))}
                    </div>
                )}
            </div>

            <div ref={genderRef} className="w-full flex flex-col gap-y-2">
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
                    onChange={event => {
                        setGender(event.target.value)
                        genderRef.current.classList.remove('error')
                    }}
                    required
                />
                {Object.hasOwn(errors ?? {}, 'gender') && (
                    <div className="typo-regular text-xs flex flex-col gap-y-2 text-error">
                        {errors['gender'].map((err, i) => (
                            <p key={i}>{err}</p>
                        ))}
                    </div>
                )}
            </div>

            <div ref={dobRef} className="w-full flex flex-col gap-y-2">
                {/* Date of Birth */}
                <FormField
                    label="Fecha de nacimiento"
                    name="date_of_birth"
                    type="date"
                    value={dob}
                    onChange={event => {
                        setDob(event.target.value)
                        dobRef.current.classList.remove('error')
                    }}
                    required
                />
                {Object.hasOwn(errors ?? {}, 'date_of_birth') && (
                    <div className="typo-regular text-xs flex flex-col gap-y-2 text-error">
                        {errors['date_of_birth'].map((err, i) => (
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
                    name="password_confirmation"
                    type="password"
                    value={passwordConfirmation}
                    onChange={event => {
                        setPasswordConfirmation(event.target.value)
                        passwordRef.current.classList.remove('error')
                    }}
                    required
                />
                {Object.hasOwn(errors ?? {}, 'password') && (
                    <div className="typo-regular text-xs flex flex-col gap-y-2 text-error">
                        {errors['password'].map((err, i) => (
                            <p key={i}>{err}</p>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-end gap-4">
                <button
                    className="button dark disabled:opacity-50"
                    type="submit"
                    disabled={loading}>
                    Crear cuenta
                </button>
            </div>
        </form>
    )
}

export default Page
