import useSWR from 'swr'
import axios from '@/lib/axios'

export const useUserEvents = () => {
    const { data: userEvents, mutate } = useSWR('/api/favorites/events', () =>
        axios
            .get('/api/favorites/events')
            .then(res => res.data.data)
            .catch(error => {
                throw new Error('Error getting user events', error)
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

    return {
        userEvents,
        saveEvent,
        saveEvents,
    }
}
