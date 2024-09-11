export class ServerApi {
    baseUrl

    constructor() {
        this.baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`
    }

    fetch = async path => {
        const res = this.fetch(`${this.baseUrl}${path}`, {
            cache: 'no-store',
        })
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }

    getEvents = async category => {
        const path = category ? `/events/${category}` : `/events`
        return this.fetch(path)
    }
}

export const api = new ServerApi()
