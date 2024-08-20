export const getEvents = async category => {
    const baseUrl = `http://localhost:8000/api/events`
    const url = category ? `${baseUrl}/${category}` : baseUrl
    const res = await fetch(url)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
