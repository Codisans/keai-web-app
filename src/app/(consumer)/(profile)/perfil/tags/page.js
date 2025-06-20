'use client'

import { Symbol } from '@/components/atoms/Symbol'
import { ToggleTagButton } from '@/components/atoms/ToggleTagButton'
import { useApi } from '@/hooks/api'
import { useUserTags } from '@/hooks/userTags'
import { useEffect, useState } from 'react'

export default function EditarTags() {
    const { tags } = useApi()
    const { saveTag, userTags } = useUserTags()
    const [allTags, setAllTags] = useState([])
    const [displayedTags, setDisplayedTags] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        if (!tags) return

        const sortedTags = tags.sort((a, b) => a.name.localeCompare(b.name))
        setAllTags(sortedTags)
        setDisplayedTags(sortedTags)
    }, [tags])

    useEffect(() => {
        if (!allTags) return

        if (search === '') {
            setDisplayedTags(allTags)
            return
        }

        const filteredTags = allTags
            .filter(tag =>
                tag.name.toLowerCase().includes(search.toLowerCase()),
            )
            .sort((a, b) => a.name.localeCompare(b.name))
        setDisplayedTags(filteredTags)
    }, [search, allTags])

    return (
        <div className="container pt-8">
            {userTags?.length == 0 && (
                <h2 className="bg-blue-light text-black border border-gray-300 rounded-2xl overflow-hidden p-4 typo-regular leading-snug text-md mb-4">
                    Selecciona tus tags de interes para encontrar eventos.
                </h2>
            )}
            <div className="pb-4 flex items-center gap-2">
                <div className="grow">
                    <input
                        className="form-input"
                        placeholder="Filtrar tags"
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <div className="w-12">
                    {search !== '' && (
                        <button
                            className="button-icon"
                            onClick={() => setSearch('')}
                            type="button">
                            <span className="sr-only">Limpiar búsqueda</span>
                            <Symbol name="cross" className="w-6 h-6" />
                        </button>
                    )}
                </div>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1 py-4">
                {displayedTags.map(tag => (
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
