import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/lib/axios'

export const useUser = () => {
    const queryClient = useQueryClient()

    const { data: details } = useQuery({
        queryKey: ['userDetails'],
        queryFn: () =>
            axios
                .get('/api/user/details')
                .then(res => res.data)
                .catch(error => {
                    throw new Error('Error getting user details', error)
                }),
    })

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const saveEvent = useMutation({
        mutationFn: async eventId => {
            await csrf()
            return axios.post(`/api/favorites/events?ids[]=${eventId}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['userDetails'] })
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
            queryClient.invalidateQueries({ queryKey: ['userDetails'] })
        },
        onError: error => {
            throw new Error('Error saving event', error)
        },
    })

    const saveTag = useMutation({
        mutationFn: async tagId => {
            await csrf()
            return axios.post(`/api/favorites/tags?ids[]=${tagId}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['userDetails'] })
        },
        onError: error => {
            throw new Error('Error saving tag', error)
        },
    })

    const saveTags = useMutation({
        mutationFn: async tagIds => {
            await csrf()
            return axios.post(
                `/api/favorites/tags?${tagIds.map(t => `ids[]=${t}`).join('&')}`,
            )
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['userDetails'] })
        },
        onError: error => {
            throw new Error('Error saving tag', error)
        },
    })

    return {
        details,
        saveEvent: saveEvent.mutate,
        saveEvents: saveEvents.mutate,
        saveTag: saveTag.mutate,
        saveTags: saveTags.mutate,
    }
}
