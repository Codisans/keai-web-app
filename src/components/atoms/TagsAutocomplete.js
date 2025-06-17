'use client'

import { AutoComplete } from 'primereact/autocomplete'
import { useState } from 'react'

export default function TagsAutocomplete({
    tags,
    selectedTags,
    setSelectedTags,
}) {
    const [tagSuggestions, setTagSuggestions] = useState([])

    const search = e => {
        if (!tags) return

        const filteredTags = tags.filter(tag =>
            tag.name.toLowerCase().includes(e.query.toLowerCase()),
        )

        setTagSuggestions(filteredTags.length > 0 ? filteredTags : tags)
    }

    if (!tags) return

    return (
        <div className="card w-full flex justify-center">
            <AutoComplete
                field="name"
                multiple
                value={selectedTags}
                suggestions={tagSuggestions}
                completeMethod={search}
                onChange={e => setSelectedTags(e.value)}
            />
        </div>
    )
}
