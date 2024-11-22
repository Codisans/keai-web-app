import moment from 'moment'

export const defaultParams = {
    min_date: moment().format('YYYY-MM-DD'),
    max_date: moment().format('YYYY-MM-DD'),
    min_price: 0,
    max_price: null,
    // zonas: [],
    keywords: [],
    tags: [],
    categories: [],
}

export const mapDefaultParams = {
    min_date: moment().format('YYYY-MM-DD'),
    max_date: moment().format('YYYY-MM-DD'),
    min_price: 0,
    max_price: null,
    keywords: [],
    tags: [],
    categories: [],
}

export const listDefaultParans = {
    min_date: moment().format('YYYY-MM-DD'),
    max_date: moment().format('YYYY-MM-DD'),
    min_price: 0,
    max_price: null,
    // zonas: [],
    keywords: [],
    tags: [],
    categories: [],
}
