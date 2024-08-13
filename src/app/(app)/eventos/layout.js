import * as React from 'react'
import SearchInput from '@/components/atoms/SearchInput'

async function getTags() {
    const res = await fetch('http://localhost:8000/api/tags')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const BrowseLayout = async ({ children }) => {
    const tags = await getTags()

    return (
        <>
            <div className="h-full w-full overflow-y-auto">
                <section className="sticky top-0 w-full p-gutter bg-white z-10">
                    <SearchInput />
                </section>
                {children}
            </div>
        </>
    )
}

export default BrowseLayout
