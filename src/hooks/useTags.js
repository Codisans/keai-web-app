import { useState } from 'react'

export const useTags = async () => {
    const [tags, setTags] = useState([])

    return tags
}
