'use client'

import { useEffect } from 'react'

export const CategoryCards = categories => {
    useEffect(() => {
        console.log(categories)
    }, [])
    return (
        <ul className="flex flex-row px-4 gap-4">
            {/* {categories.map((category, i) => (
                <li key={i} className="grow">
                    {JSON.stringify(category)}
                </li>
            ))} */}
        </ul>
    )
}
