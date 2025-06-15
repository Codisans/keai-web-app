'use client'

import { useState } from 'react'
import { submitUserFeedback } from '@/app/actions'
import { FormField } from './FormField'
import { useAuth } from '@/hooks/auth'

export default function FeedbackForm({ className = '' }) {
    const { user } = useAuth()
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const feedbackTypes = [
        { value: '', label: 'Selecciona un tipo' },
        { value: 'bug', label: 'Error' },
        { value: 'feature', label: 'Solicitud de funcionalidad' },
        { value: 'tagging', label: 'Solicitud de tags/categorías' },
        { value: 'improvement', label: 'Sugerencia' },
        { value: 'other', label: 'Otro' },
    ]

    async function handleSubmit(e) {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus({ type: '', message: '' })

        const id = crypto.randomUUID()

        try {
            const result = await submitUserFeedback({
                id: id,
                type: type,
                message: message,
                user_id: user?.id,
            })

            if (result.success) {
                setStatus({
                    type: 'success',
                    message:
                        'Gracias por tu feedback! Esto nos ayuda a mejorar la plataforma.',
                })
                setMessage('')
                setType('')
            } else {
                setStatus({
                    type: 'error',
                    message: result.error || 'Error al enviar el feedback',
                })
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Error al enviar el feedback',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className={className}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <FormField
                    label="Tipo de feedback"
                    name="type"
                    type="select"
                    value={type}
                    onChange={e => setType(e.target.value)}
                    options={feedbackTypes}
                    required
                />

                <FormField
                    label="Mensaje"
                    name="message"
                    type="textarea"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                />

                {status.message && (
                    <div
                        className={`p-4 rounded ${
                            status.type === 'success'
                                ? 'bg-green/10 text-green'
                                : 'bg-error/10 text-error'
                        }`}>
                        {status.message}
                    </div>
                )}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`button dark ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Feedback'}
                </button>
            </form>
        </div>
    )
}
