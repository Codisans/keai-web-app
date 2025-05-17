'use client'

import { Symbol } from '@/components/atoms/Symbol'
import { ToggleTagButton } from '@/components/atoms/ToggleTagButton'
import { useApi } from '@/hooks/api'
import { useUserTags } from '@/hooks/userTags'
import { useEffect, useState } from 'react'

export default function EditarTags() {
    const { tags } = useApi()
    const { saveTag } = useUserTags()
    const [allTags, setAllTags] = useState([])
    const [displayedTags, setDisplayedTags] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        if (!tags) return

        const sortedTags = [...tags].sort((a, b) => a.name.localeCompare(b.name))
        setAllTags(sortedTags)
        setDisplayedTags(sortedTags)
    }, [tags])

    useEffect(() => {
        if (!allTags) return

        if(search === '') {
            setDisplayedTags(allTags)
            return
        }

        const filteredTags = allTags.filter(tag => tag.name.toLowerCase().includes(search.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name))
        setDisplayedTags(filteredTags)
    }, [search])

    return (
        <div className="container pt-8">
            <div className="flex justify-between items-end pb-4">
                <h2 className="typo-lg">Selecciona los tags de eventos que te interesan</h2>
            </div>
            <div className='pb-4 flex items-center gap-2'>
                <input className='form-input' placeholder="Filtrar tags" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                {
                    search !== '' && (
                    <button className='button-icon' onClick={() => setSearch('')}>
                        <span className='sr-only'>Limpiar búsqueda</span>
                        <Symbol name="cross" className='w-4 h-4' />
                    </button>
                    )
                }
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
