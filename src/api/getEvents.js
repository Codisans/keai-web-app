export const getEvents = async category => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/events`
    const url = category ? `${baseUrl}/${category}` : baseUrl
    const res = await fetch(url)

    if (!res.ok) {
        return { data: [] }
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
