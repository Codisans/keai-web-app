'use client'

import Select from 'react-select'

export default function TagsAutocomplete({
    tags,
    selectedTags,
    setSelectedTags,
}) {
    if (!tags) return

    const options =
        tags?.map(tag => ({
            label: tag.name,
            value: tag.id,
        })) ?? []

    return (
        <div className="w-full flex justify-center">
            <Select
                defaultValue={[]}
                isMulti
                name="tags"
                options={options}
                value={selectedTags}
                onChange={e => setSelectedTags(e.value)}
                className="basic-multi-select w-full"
                classNamePrefix="select"
            />
        </div>
    )
}
