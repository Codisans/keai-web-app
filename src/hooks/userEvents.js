import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/lib/axios'

export const useUserEvents = () => {
    const queryClient = useQueryClient()

    const { data: userEvents } = useQuery({
        queryKey: ['userEvents'],
        queryFn: () =>
            axios
                .get('/api/favorites/events')
                .then(res => res.data.data)
                .catch(error => {
                    throw new Error('Error getting user events', error)
                }),
    })

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const saveEvent = useMutation({
        mutationFn: async eventId => {
            await csrf()
            return axios.post(`/api/favorites/events?ids[]=${eventId}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['userEvents'] })
        },
        onError: error => {
            throw new Error('Error saving event', error)
        },
    })

    const saveEvents = useMutation({
        mutationFn: async eventIds => {
            await csrf()
            return axios.post(
                `/api/favorites/events?${eventIds.map(e => `ids[]=${e.id}`).join('&')}`,
            )
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['userEvents'] })
        },
        onError: error => {
            throw new Error('Error saving event', error)
        },
    })

    return {
        userEvents,
        saveEvent: saveEvent.mutate,
        saveEvents: saveEvents.mutate,
    }
}
