'use client'

import { useRef, useState } from 'react'
import { submitEventReport } from '@/app/actions'
import moment from 'moment'
import { Symbol } from './Symbol'
import { useAuth } from '@/hooks/auth'

const reportOptions = [
    {
        id: '1',
        label: 'Contenido inapropiado',
        value: 'inappropriate_content',
    },
    {
        id: '2',
        label: 'Evento duplicado',
        value: 'duplicate_event',
    },
    {
        id: '3',
        label: 'Información incorrecta',
        value: 'incorrect_information',
    },
    {
        id: '4',
        label: 'Otro',
        value: 'other',
    },
]

export default function ReportEvent({ event, className = '' }) {
    const { user } = useAuth()
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const dialogRef = useRef(null)
    const [reportMotive, setReportMotive] = useState('')

    if (!event) return null

    async function handleSubmit() {
        dialogRef.current?.close()
        setIsSubmitting(true)
        setStatus({ type: '', message: '' })

        const data = {
            report_id: crypto.randomUUID(),
            event_id: event.id,
            report_date: moment().format('YYYY-MM-DD'),
            report_motive: reportMotive,
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
        <form className={className}>
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
                <>
                    <button
                        onClick={() => dialogRef.current?.showModal()}
                        type="button"
                        disabled={isSubmitting}
                        className={`button-icon ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}>
                        <Symbol name="report-icon" className="w-6 h-6" />
                        {isSubmitting ? 'Enviando...' : 'Reportar evento'}
                    </button>
                    <dialog className="backdrop:bg-black/50" ref={dialogRef}>
                        <button
                            className="fixed inset-0 w-full h-full"
                            type="button"
                            onClick={() => dialogRef.current?.close()}>
                            <span className="sr-only">Cerrar</span>
                        </button>
                        <div className="fixed z-10 inset-0 flex justify-center items-center pointer-events-none">
                            <div className="flex flex-col w-max max-w-full p-4 gap-y-2 bg-white-true rounded pointer-events-auto">
                                {reportOptions.map(option => (
                                    <div key={option.id} className="relative">
                                        <input
                                            type="radio"
                                            id={option.id}
                                            name="reportMotive"
                                            value={option.value}
                                            onChange={e =>
                                                setReportMotive(e.target.value)
                                            }
                                            className="sr-only peer"
                                        />
                                        <label
                                            htmlFor={option.id}
                                            className="button peer-checked:bg-black peer-checked:text-white light w-full cursor-pointer">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                                <button
                                    onClick={handleSubmit}
                                    disabled={reportMotive === ''}
                                    type="button"
                                    className="mt-4 button disabled:opacity-50 disabled:cursor-not-allowed alt w-full">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </dialog>
                </>
            )}
        </form>
    )
}
