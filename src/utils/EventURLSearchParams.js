import moment from 'moment'
import { cleanParams } from './filterUtils'

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

        console.log('__________________________', params.toString())
        return params.toString()
    }

    generateListURLSearchParams = () => {
        this.listURLSearchParams = new URLSearchParams(this.toString())
        Object.entries(this.defaultListParams).forEach(([key, value]) => {
            if (this.listURLSearchParams.has(key)) return
            this.listURLSearchParams.set(key, value)
        })
    }

    toListString = () => {
        if (!this.listURLSearchParams) {
            this.generateListURLSearchParams()
        }
        return this.listURLSearchParams.toString()
    }

    toClientListString = () => {
        if (!this.listURLSearchParams) {
            this.generateListURLSearchParams()
        }
        const params = new URLSearchParams(this.toString())
        Object.entries(this.defaultListParams).forEach(([key, value]) => {
            if (this.listURLSearchParams.get(key) !== value) return
            params.delete(key)
        })
        return params.toString()
    }
}
