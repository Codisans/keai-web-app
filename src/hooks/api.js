import { useQuery } from '@tanstack/react-query'
import axios from '@/lib/axios'
import moment from 'moment'
import Fuse from 'fuse.js'

export const useApi = () => {
    const today = moment().format('YYYY-MM-DD')

    const { data: events } = useQuery({
        queryKey: ['events', today],
        queryFn: () =>
            axios
                .get(
                    `/api/events?min_date=${today}&sort_by=start_date&sort_order=asc`,
                )
                .then(res => res.data?.data ?? [])
                .catch(error => {
                    throw new Error('Error getting events', error)
                }),
    })

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            axios
                .get('/api/categories')
                .then(res => res.data.data ?? [])
                .catch(error => {
                    throw new Error('Error getting categories', error)
                }),
    })

    const { data: tags } = useQuery({
        queryKey: ['tags'],
        queryFn: () =>
            axios
                .get('/api/tags')
                .then(res => res.data ?? [])
                .catch(error => {
                    throw new Error('Error getting tags', error)
                }),
    })

    const getEvent = async eventId => {
        const id = Number(eventId)
        const event = await events?.filter(e => e.id === id)?.pop()
        return event ?? null
    }

    const getEvents = async searchParams => {
        const keywords = searchParams.get('keywords')
        const categories = searchParams.get('categories[]')?.split(',')
        const tags = searchParams.get('tags[]')?.split(',')
        const minDate = searchParams.get('min_date')
            ? moment(searchParams.get('min_date')).startOf('day')
            : moment().startOf('day')
        const maxDate = searchParams.get('max_date')
            ? moment(searchParams.get('max_date')).endOf('day')
            : null
        const minPrice = searchParams.get('min_price')
        const maxPrice = searchParams.get('max_price')

        const results = await events?.filter(event => {
            if (
                categories &&
                !event.categories?.some(c =>
                    categories.includes(c.id.toString()),
                )
            )
                return false
            if (tags && !event.tags?.some(t => tags.includes(t.id.toString())))
                return false
            if (minDate && !moment(event.start_date).isSameOrAfter(minDate))
                return false
            if (maxDate && !moment(event.start_date).isSameOrBefore(maxDate))
                return false
            if (minPrice && !(Number(event.price) >= Number(minPrice)))
                return false
            if (maxPrice && !(Number(event.price) <= Number(maxPrice)))
                return false
            return true
        })

        if (!keywords) return results

        const fuseOptions = {
            isCaseSensitive: false,
            includeScore: false,
            shouldSort: true,
            location: 0,
            threshold: 0.6,
            distance: 240,
            findAllMatches: true,
            ignoreFieldNorm: true,
            keys: [
                {
                    name: 'name',
                    weight: 0.6,
                },
                {
                    name: 'description',
                    weight: 0.4,
                },
            ],
        }
        const fuse = new Fuse(results, fuseOptions)
        return fuse.search(keywords).map(r => r.item)
    }

    const getCategoryEvents = async categoryId => {
        return await events?.filter(event => event.category_id === categoryId)
    }

    const getTagEvents = async tagIds => {
        if (Array.isArray(tagIds) && tagIds.length > 0) {
            return await events?.filter(event =>
                tagIds.some(tagId => event.tags.includes(tagId)),
            )
        }

        return await events?.filter(event => event.tags.includes(tagIds))
    }

    return {
        events,
        categories,
        tags,
        getEvents,
        getEvent,
        getCategoryEvents,
        getTagEvents,
    }
}
