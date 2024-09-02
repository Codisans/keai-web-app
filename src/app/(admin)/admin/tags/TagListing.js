'use client'

import { Loading } from '@/app/Loading'
import { useEffect } from 'react'

export const TagListing = ({ tags }) => {
    useEffect(() => {
        console.log(tags)
    }, [tags])

    return (
        <ul className="w-full grow relative">
            <ul className="sticky top-0 grid grid-cols-8 bg-white py-1.5 px-gutter border-b border-grey font-bold">
                <li className="block col-span-full">Tags</li>
            </ul>

            {tags ? (
                <ul className="flex flex-col">
                    {tags?.map((tag, i) => (
                        <TagRow key={i} tag={tag} />
                    ))}
                </ul>
            ) : (
                <Loading />
            )}
        </ul>
    )
}

export const TagRow = ({ tag }) => {
    return (
        <li className="grid grid-cols-8 px-gutter py-1.5 border-b border-grey">
            <span className="col-span-full">{JSON.stringify(tag)}</span>
        </li>
    )
}
