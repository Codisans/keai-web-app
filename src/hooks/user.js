import useSWR from 'swr'
import axios from '@/lib/axios'

export const useUser = () => {
    const {
        data: details,
        error,
        mutate,
    } = useSWR('/api/user/details', () =>
        axios
            .get('/api/user/details')
            .then(res => {
                console.log(res.data)
                return res.data
            })
            .catch(error => {
                throw new Error('Error getting user details', error)
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const saveEvent = async eventId => {
        console.log('save event')
        await csrf()

        axios
            .post(`/api/events/${eventId}/favorite`)
            .then(() => mutate())
            .catch(error => {
                throw new Error('Error saving event', error)
            })
    }

    const saveTag = async tagId => {
        console.log('save tag')
        await csrf()

        axios
            .post(`/api/tags/${tagId}/save`)
            .then(() => mutate())
            .catch(error => {
                throw new Error('Error saving tag', error)
            })
    }

    const getSavedTags = async () => {
        console.log('get saved tags')
        await csrf()

        if (!error) {
            const res = await axios.get(`/api/tags/saved`)

            if (!res.ok) throw new Error('Error getting saved tags')
            return await res.json()
        }
    }

    const getSavedEvents = async () => {
        console.log('get saved events')
        await csrf()

        const res = await axios.get('/api/favorites')
        if (!res.ok) throw new Error('Error getting saved events')
        return await res.json()
    }

    return {
        details,
        saveEvent,
        getSavedEvents,
        saveTag,
        getSavedTags,
    }
}
