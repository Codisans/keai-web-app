'use client'
export const DateTime = ({ value, type = 'date' }) => {
    const d = value instanceof Date ? value : new Date(value || null)

    switch (type) {
        case 'date':
            return (
                <time className="capitalize tracking-wide">
                    {d.toLocaleDateString('es-CL', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'short',
                        year: '2-digit',
                    })}
                </time>
            )
        case 'time':
            return (
                <time className="tracking-wider">
                    {d.toLocaleTimeString('es-CL', {
                        hour12: false,
                    })}
                </time>
            )
    }
}
