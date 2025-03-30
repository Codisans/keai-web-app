import Axios from 'axios'

class Api {
    constructor() {
        this.axios = Axios.create({
            baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            withCredentials: true,
            withXSRFToken: true,
        })
        this.categories = null
    }

    async getEvents(queryString) {
        const res = await this.axios.get(
            queryString ? `/events?${queryString}` : '/events',
        )

        try {
            return res.data.data ?? []
        } catch (error) {
            console.error(error)
            return []
        }
    }

    async getEvent(id) {
        const res = await this.axios.get(`/events/${id}`)

        try {
            return res.data.data ?? []
        } catch (error) {
            console.error(error)
            return null
        }
    }

    async getCategories() {
        const res = await this.axios.get('/categories')

        try {
            return res.data.data ?? []
        } catch (error) {
            console.error(error)
            return []
        }
    }

    async getTags() {
        const res = await this.axios.get('/tags')

        try {
            return res.data
        } catch (error) {
            console.error(error)
            return []
        }
    }
}

const api = new Api()

export default api
