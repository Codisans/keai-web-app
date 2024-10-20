import Axios from 'axios'

export const defaultEventsParams = {
    categories: null,
    tags: null,
    min_price: 0,
    max_price: null,
    start_date: new Date('1950-01-01').toISOString(),
    end_date: null,
}

export const getQueryString = (params, encode = true) => {
    let queryString = ''
    Object.entries(params).forEach(([key, value]) => {
        if (value !== null) {
            queryString += `${key}${Array.isArray(value) ? '[]' : ''}=${Array.isArray(value) ? value.map(v => v).join('+') : value}&`
        }
    })
    console.log(queryString)
    return encode ? encodeURI(queryString) : queryString
}

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

    async getEvents(params = defaultEventsParams) {
        const res = await this.axios.get(
            `/events/filter?${getQueryString({ ...defaultEventsParams, ...params })}`,
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
