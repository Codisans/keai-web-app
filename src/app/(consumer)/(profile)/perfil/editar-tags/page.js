'use client'

import { NavLink } from '@/components/atoms/NavLink'
import { ToggleTagButton } from '@/components/atoms/ToggleTagButton'
import { useApi } from '@/hooks/api'
import { useUserTags } from '@/hooks/userTags'
import { useEffect, useState } from 'react'

export default function EditarTags() {
    const { tags } = useApi()
    const { saveTag } = useUserTags()

    const [allTags, setAllTags] = useState([])

    useEffect(() => {
        if (!tags) return

        setAllTags(tags)
    }, [tags])

    return (
        <div className="px-gutter pt-8">
            <div className="flex justify-between items-end">
                <h2 className="typo-caps">Seleccionar Tags</h2>
                <NavLink className="button" href="/perfil">
                    Listo
                </NavLink>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1 py-4">
                {allTags.map(tag => (
                    <ToggleTagButton
                        key={tag.id}
                        className="button-tag"
                        tagId={tag.id}
                        onClick={() => saveTag(tag.id)}>
                        {tag.name}
                    </ToggleTagButton>
                ))}
            </div>
        </div>
    )
}
