'use client'

import { useUserTags } from "@/hooks/userTags"
import { EventCarouselQuery } from "../EventCarouselQuery"
import { useEffect, useState } from "react"
import moment from 'moment'

export const UserTagCarousels = ({category}) => {
    const { userTags } = useUserTags()
    const [tags, setTags] = useState([])

    useEffect(() => {
        if (!userTags) return
        setTags(userTags)
    }, [userTags])
    
    return tags?.map((tag, i) => {
        const searchParams = new URLSearchParams()
        searchParams.set('min_date', moment().format('YYYY-MM-DD'))
        searchParams.set('categories[]', category)
        searchParams.set('tags[]', tag.id)
        return <EventCarouselQuery heading={tag.name} key={i} searchParams={searchParams} />})
}