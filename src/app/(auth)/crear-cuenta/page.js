'use client'

import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import InputError from '@/components/atoms/InputError'
import Label from '@/components/atoms/Label'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { TextLink } from '@/components/atoms/TextLink'

const Page = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/perfil',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [accountType, setAccountType] = useState('consumer')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
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
        <form onSubmit={submitForm}>
            {/* Name */}
            <div>
                <Label htmlFor="name">Nombre</Label>

                <Input
                    id="name"
                    type="text"
                    value={name}
                    className="block mt-1 w-full"
                    onChange={event => setName(event.target.value)}
                    required
                    autoFocus
                />

                <InputError messages={errors.name} className="mt-2" />
            </div>

            {/* Email Address */}
            <div className="mt-4">
                <Label htmlFor="email">Correo</Label>

                <Input
                    id="email"
                    type="email"
                    value={email}
                    className="block mt-1 w-full"
                    onChange={event => setEmail(event.target.value)}
                    required
                />

                <InputError messages={errors.email} className="mt-2" />
            </div>

            {/* Password */}
            <div className="mt-4">
                <Label htmlFor="password">Clave</Label>

                <Input
                    id="password"
                    type="password"
                    value={password}
                    className="block mt-1 w-full"
                    onChange={event => setPassword(event.target.value)}
                    required
                    autoComplete="new-password"
                />

                <InputError messages={errors.password} className="mt-2" />
            </div>

            {/* Confirm Password */}
            <div className="mt-4">
                <Label htmlFor="passwordConfirmation">Confirmar clave</Label>

                <Input
                    id="passwordConfirmation"
                    type="password"
                    value={passwordConfirmation}
                    className="block mt-1 w-full"
                    onChange={event =>
                        setPasswordConfirmation(event.target.value)
                    }
                    required
                />

                <InputError
                    messages={errors.password_confirmation}
                    className="mt-2"
                />
            </div>

            {/* Account type */}
            <div className="mt-4 flex gap-gutter">
                <div>
                    <Input
                        className="hidden peer"
                        id="consumer"
                        value="consumer"
                        name="account-type"
                        onChange={event => setAccountType(event.target.value)}
                        type="radio"
                        checked={accountType == 'consumer'}
                    />
                    <Label
                        className="inline-flex justify-center items-center text-button px-3 h-10 rounded-button bg-white border border-grey-3 text-black peer-checked:bg-black/10"
                        htmlFor="consumer">
                        Consumidor
                    </Label>
                </div>
                <div>
                    <Input
                        className="hidden peer"
                        id="manager"
                        value="manager"
                        name="account-type"
                        onChange={event => setAccountType(event.target.value)}
                        type="radio"
                        checked={accountType == 'manager'}
                    />
                    <Label
                        className="inline-flex justify-center items-center text-button px-3 h-10 rounded-button bg-white border border-grey-3 text-black peer-checked:bg-black/10"
                        htmlFor="manager">
                        Administrador
                    </Label>
                </div>
            </div>

            <div className="flex items-center justify-end mt-4 gap-4">
                <TextLink href="/entrar">Ya tienes una cuenta?</TextLink>
                <Button>Crear</Button>
            </div>
        </form>
    )
}

export default Page
