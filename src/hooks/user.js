import useSWR from 'swr'
import axios from '@/lib/axios'

export const useUser = () => {
    const { data: details, mutate } = useSWR('/api/user/details', () =>
        axios
            .get('/api/user/details')
            .then(res => res.data)
            .catch(error => {
                throw new Error('Error getting user details', error)
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const saveEvent = async eventId => {
        await csrf()

        axios
            .post(`/api/favorites/events?ids[]=${eventId}`)
            .then(() => mutate())
            .catch(error => {
                throw new Error('Error saving event', error)
            })
    }

    const saveEvents = async eventIds => {
        await csrf()

        axios
            .post(
                `/api/favorites/events?${eventIds.map(e => `ids[]=${e.id}`).join('&')}`,
            )
            .then(() => mutate())
            .catch(error => {
                throw new Error('Error saving event', error)
            })
    }

    const saveTag = async tagId => {
        await csrf()

        axios
            .post(`/api/favorites/tags?ids[]=${tagId}`)
            .then(() => mutate())
            .catch(error => {
                throw new Error('Error saving tag', error)
            })
    }

    const saveTags = async tagIds => {
        await csrf()

        axios
            .post(
                `/api/favorites/tags?${tagIds.map(t => `ids[]=${t}`).join('&')}`,
            )
            .then(() => mutate())
            .catch(error => {
                throw new Error('Error saving tag', error)
            })
    }

    return {
        details,
        saveEvent,
        saveEvents,
        saveTag,
        saveTags,
    }
}
