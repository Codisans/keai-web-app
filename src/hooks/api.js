import useSWR from 'swr'
import axios from '@/lib/axios'
import moment from 'moment'

export const useApi = () => {
    const today = moment().format('YYYY-MM-DD')

    const { data: events } = useSWR(`/api/events?min_date=${today}`, () =>
        axios
            .get(`/api/events?min_date=${today}`)
            .then(res => res.data?.data ?? [])
            .catch(error => {
                throw new Error('Error getting events', error)
            }),
    )

    const { data: categories } = useSWR('/api/categories', () =>
        axios
            .get('/api/categories')
            .then(res => res.data.data ?? [])
            .catch(error => {
                throw new Error('Error getting categories', error)
            }),
    )

    const { data: tags } = useSWR('/api/tags', () =>
        axios
            .get('/api/tags')
            .then(res => res.data ?? [])
            .catch(error => {
                throw new Error('Error getting tags', error)
            }),
    )

    const getEvent = eventId => {
        const { data: event } = useSWR(`/api/events/${eventId}`, () =>
            axios
                .get(`/api/events/${eventId}`)
                .then(res => res.data.data ?? [])
                .catch(error => {
                    throw new Error('Error getting event', error)
                }),
        )

        return event?.data ?? null
    }

    const getEvents = async searchParams => {
        const categories = searchParams.get('categories[]')?.split(',')
        const tags = searchParams.get('tags[]')?.split(',')
        const minDate = searchParams.get('min_date')
        const maxDate = searchParams.get('max_date')
        const minPrice = searchParams.get('min_price')
        const maxPrice = searchParams.get('max_price')

        return await events?.filter(event => {
            if (
                categories &&
                !event.categories?.some(c =>
                    categories.includes(c.id.toString()),
                )
            )
                return false
            if (tags && !event.tags?.some(t => tags.includes(t.id.toString())))
                return false
            if (
                minDate &&
                !moment(event.start_date).isSameOrAfter(moment(minDate))
            )
                return false
            if (
                maxDate &&
                !moment(event.start_date).isSameOrBefore(moment(maxDate))
            )
                return false
            if (minPrice && !(Number(event.price) >= Number(minPrice)))
                return false
            if (maxPrice && !(Number(event.price) <= Number(maxPrice)))
                return false
            return true
        })
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
