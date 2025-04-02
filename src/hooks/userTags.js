import useSWR from 'swr'
import axios from '@/lib/axios'

export const useUserTags = () => {
    const { data: userTags, mutate } = useSWR('/api/favorites/tags', () =>
        axios
            .get('/api/favorites/tags')
            .then(res => res.data.data)
            .catch(error => {
                throw new Error('Error getting user tags', error)
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

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
        userTags,
        saveTag,
        saveTags,
    }
}
