import moment from 'moment'

const cleanParams = params => {
    if (typeof params === 'string' || params === 'array') return params
    let result = []
    Object.entries(params).forEach(([key, value]) => {
        if (!value) return

        if (Array.isArray(value)) {
            if (value.length === 0) return
            value.forEach(v => {
                if (!v) return
                result.push([`${key}[]`, v.toString()])
            })
            return
        }

        result.push([key, value.toString()])
    })
    return result
}

export class EventURLSearchParams extends URLSearchParams {
    mapURLSearchParams
    listURLSearchParams
    defaultMapParams = {
        min_date: moment().format('YYYY-MM-DD'),
        max_date: moment().format('YYYY-MM-DD'),
    }
    defaultListParams = {
        min_date: moment().format('YYYY-MM-DD'),
    }

    constructor(init) {
        super(cleanParams(init))
    }

    generateMapURLSearchParams = () => {
        this.mapURLSearchParams = new URLSearchParams(this.toString())
        Object.entries(this.defaultMapParams).forEach(([key, value]) => {
            if (this.mapURLSearchParams.has(key)) return
            this.mapURLSearchParams.set(key, value)
        })
    }

    toMapString = () => {
        if (!this.mapURLSearchParams) {
            this.generateMapURLSearchParams()
        }
        return this.mapURLSearchParams.toString()
    }

    toClientMapString = () => {
        if (!this.mapURLSearchParams) {
            this.generateMapURLSearchParams()
        }
        const params = new URLSearchParams(this.toString())
        Object.entries(this.defaultMapParams).forEach(([key, value]) => {
            if (this.mapURLSearchParams.get(key) !== value) return
            params.delete(key)
        })
        return params.toString()
    }

    toListString = () => {
        return this.listURLSearchParams.toString()
    }

    toClientListString = () => {
        return this.listURLSearchParams.toString()
    }
}
