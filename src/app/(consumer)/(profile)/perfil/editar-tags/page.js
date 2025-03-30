'use client'

import { useApi } from '@/hooks/api'
import { useUser } from '@/hooks/user'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function EditarTags() {
    const { tags } = useApi()
    const { details, saveTags } = useUser()
    const router = useRouter()

    const [allTags, setAllTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([])

    const fakeTags = [
        { id: 1, name: 'Tag 1' },
        { id: 2, name: 'Tag 2' },
        { id: 3, name: 'Tag 3' },
        { id: 4, name: 'Tag 4' },
    ]

    useEffect(() => {
        if (tags) {
            // setAllTags(tags)
            setAllTags(fakeTags)
        }
        if (details?.tags) {
            setSelectedTags(details.tags)
        }
    }, [tags, details])

    const handleSubmit = async e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        saveTags(formData.getAll('tags')).then(() => router.push('/perfil'))
    }

    return (
        <div className="px-gutter pt-8">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between items-end">
                    <h2>Seleccionar Tags</h2>
                    <button className="button" type="submit">
                        Guardar
                    </button>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 py-8">
                    {allTags.map(tag => (
                        <span key={tag.id}>
                            <input
                                id={tag.id}
                                name="tags"
                                className="hidden peer"
                                type="checkbox"
                                value={tag.id}
                                defaultChecked={selectedTags
                                    ?.map(t => t.id)
                                    ?.includes(tag.id)}
                            />
                            <label
                                className="border-grey border peer-checked:bg-orange rounded py-1.5 px-3 typo-button uppercase"
                                key={tag.id}
                                htmlFor={tag.id}>
                                {tag.name}
                            </label>
                        </span>
                    ))}
                </div>
            </form>
        </div>
    )
}
