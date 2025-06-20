'use client'

import { useUserTags } from '@/hooks/userTags'
import { EventCarouselQuery } from '../EventCarouselQuery'
import { useEffect, useState } from 'react'
import moment from 'moment'
import { useApi } from '@/hooks/api'

export const UserTagCarousels = ({ category }) => {
    const { userTags } = useUserTags()
    const { tags } = useApi()
    const [carouselTags, setCarouselTags] = useState([])

    useEffect(() => {
        if (!userTags && !tags) return
        if (userTags) {
            setCarouselTags(userTags)
            return
        }
        setCarouselTags(tags.filter(() => Math.random() > 0.5))
    }, [userTags, tags])

    return carouselTags?.map((tag, i) => {
        const searchParams = new URLSearchParams()
        searchParams.set('min_date', moment().format('YYYY-MM-DD'))
        searchParams.set('categories[]', category)
        searchParams.set('tags[]', tag.id)
        return (
            <EventCarouselQuery
                heading={tag.name}
                key={i}
                searchParams={searchParams}
            />
        )
    })
}
