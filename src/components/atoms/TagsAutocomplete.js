'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import Select from 'react-select'

export default function TagsAutocomplete({
    tags,
    setSelectedTags,
    value,
    setValue,
}) {
    const searchParams = useSearchParams()

    useEffect(() => {
        if (!tags) return

        const tagIds = searchParams.getAll('tags[]').map(tag => Number(tag))
        const urlTags = tags
            ?.filter(tag => tagIds.includes(tag.id))
            .map(t => ({
                label: t.name,
                value: t.id,
            }))
        setValue(urlTags)
    }, [tags])

    const options =
        tags?.map(tag => ({
            label: tag.name,
            value: tag.id,
        })) ?? []

    if (!tags) return

    return (
        <div className="w-full flex justify-center">
            <Select
                defaultValue={[]}
                isMulti
                name="tags"
                options={options}
                value={value}
                onChange={e => {
                    setValue(e)
                    setSelectedTags(e.map(tag => tag.value))
                }}
                className="basic-multi-select w-full"
                classNamePrefix="select"
            />
        </div>
    )
}
