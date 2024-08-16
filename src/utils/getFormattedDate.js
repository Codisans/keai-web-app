export const getFormattedDate = date => {
    const d = date instanceof Date ? date : new Date(date || null)
    return d.toLocaleDateString('es-CL', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: '2-digit',
    })
}
