'use client'

import { useState } from 'react'
import { submitEventReport } from '@/app/actions'
import moment from 'moment'

export default function ReportEvent({ event, className = '' }) {
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    if (!event) return null

    async function handleSubmit() {
        setIsSubmitting(true)
        setStatus({ type: '', message: '' })

        const data = {
            event_name: event.name,
            event_id: event.id?.toString(),
            report_date: moment().format('YYYY-MM-DD'),
            reporter: 'test',
        }

        try {
            const result = await submitEventReport(data)
            if (result.success) {
                setStatus({
                    type: 'success',
                    message: 'Event reported successfully!',
                })
            } else {
                setStatus({
                    type: 'error',
                    message: result.error || 'Failed to submit event report',
                })
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'An unexpected error occurred',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className={className}>
            {status.message && (
                <div
                    className={`p-4 mb-6 rounded ${
                        status.type === 'success'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                    }`}>
                    {status.message}
                </div>
            )}

            <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}>
                {isSubmitting ? 'Submitting...' : 'Report Event'}
            </button>
        </div>
    )
}
