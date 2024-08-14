export const getEvent = async id => {
    const res = await fetch(`http://localhost:8000/api/events/${id}`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
