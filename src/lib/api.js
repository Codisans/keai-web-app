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

    async getCategories() {
        if (this.categories) return this.categories

        const res = await this.axios.get('/categories')

        try {
            this.categories = res.data.data
            return res.data.data
        } catch (error) {
            console.error(error)
        }
    }

    async getEvents(categoryId) {
        const res = await this.axios.get(
            categoryId ? `/categories/${categoryId}` : '/events',
        )

        try {
            return res.data.data
        } catch (error) {
            console.error(error)
        }
    }

    async getEvent(id) {
        const res = await this.axios.get(`/events/${id}`)

        try {
            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    async getTags() {
        const res = await this.axios.get('/tags')

        try {
            return res.data
        } catch (error) {
            console.error(error)
        }
    }
}

const api = new Api()

export default api
