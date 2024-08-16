export const getFormattedTime = date => {
    const d = date instanceof Date ? date : new Date(date || null)
    return d.toLocaleTimeString()
}
