import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/lib/axios'

export const useUserTags = () => {
    const queryClient = useQueryClient()

    const { data: userTags } = useQuery({
        queryKey: ['userTags'],
        queryFn: () =>
            axios
                .get('/api/favorites/tags')
                .then(res => res.data.data)
                .catch(error => {
                    throw new Error('Error getting user tags', error)
                }),
    })

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const saveTag = useMutation({
        mutationFn: async tagId => {
            await csrf()
            return axios.post(`/api/favorites/tags?ids[]=${tagId}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['userTags'] })
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
            queryClient.invalidateQueries({ queryKey: ['userTags'] })
        },
        onError: error => {
            throw new Error('Error saving tag', error)
        },
    })

    return {
        userTags,
        saveTag: saveTag.mutate,
        saveTags: saveTags.mutate,
    }
}
