export const getEvents = async () => {
    const res = await fetch(`http://localhost:8000/api/events`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
