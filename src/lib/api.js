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
    }

    async getEvents(category) {
        const res = await this.axios.get(
            category ? `/categories/${category}` : '/events',
        )

        try {
            return res.data
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
}

const api = new Api()

export default api
