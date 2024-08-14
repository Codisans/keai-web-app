import { useState } from 'react'
import { getTags } from '@/api/getTags'

export const useTags = async () => {
    const [tags, setTags] = useState([])

    const data = await getTags().then(res => setTags(res))

    return tags
}
