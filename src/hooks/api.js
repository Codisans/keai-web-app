async function getCategories() {
    const res = await fetch(
        'http://localhost:8000/api/categories/all-categories',
    )

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const useCategories = async () => {
    const [categories, setCategories] = useState([])

    setCategories(await getCategories())

    return await getCategories()
}
