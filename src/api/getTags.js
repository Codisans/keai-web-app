export const getTags = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tags/all-tags`,
    )

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
