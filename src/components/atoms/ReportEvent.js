'use client'

import { useState } from 'react'
import { submitEventReport } from '@/app/actions'
import moment from 'moment'
import { Symbol } from './Symbol'
import { useAuth } from '@/hooks/auth'

export default function ReportEvent({ event, className = '' }) {
    const { user } = useAuth()
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    if (!event) return null

    async function handleSubmit() {
        setIsSubmitting(true)
        setStatus({ type: '', message: '' })

        const data = {
            report_id: crypto.randomUUID(),
            event_id: event.id,
            report_date: moment().format('YYYY-MM-DD'),
            reporter: user?.id?.toString() ?? 'guest',
        }

        try {
            const result = await submitEventReport(data)
            if (result.success) {
                setStatus({
                    type: 'success',
                    message: 'Gracias por reportar el evento!',
                })
            } else {
                setStatus({
                    type: 'error',
                    message: result.error || 'Error al reportar el evento',
                })
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Error al reportar el evento',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className={className}>
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

            {status.type !== 'success' && (
                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`button-icon ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}>
                    <Symbol name="report-icon" className="w-6 h-6" />
                    {isSubmitting ? 'Enviando...' : 'Reportar evento'}
                </button>
            )}
        </div>
    )
}
