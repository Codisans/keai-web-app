'use client'

import { useEffect, useState } from 'react'
import { useUserTags } from '@/hooks/userTags'
import { NavLink } from '@/components/atoms/NavLink'

export const SavedTags = () => {
    const { userTags } = useUserTags()
    const [tags, setTags] = useState([])

    useEffect(() => {
        if (!userTags) return
        setTags(userTags)
    }, [userTags])

    return (
        <div className="flex flex-col gap-y-3 px-gutter py-4">
            <div className="flex flex-row gap-x-2 items-center">
                <h2 className="typo-h4">Mis tags</h2>
                <NavLink
                    className="button-sm text-xs p-1 current:hidden"
                    pathname="/perfil/editar-tags">
                    Editar
                </NavLink>
            </div>
            <ul className="flex flex-row flex-wrap gap-1">
                {tags?.map(tag => (
                    <li key={tag.id} className="tag-sm">
                        {tag.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
