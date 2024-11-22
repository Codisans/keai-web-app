'use client'
import moment from 'moment'
import React, { createContext, useState, useContext } from 'react'

export const getDateParams = (value, otherValues) => {
    switch (value) {
        case 'today':
            return {
                min_date: moment().format('YYYY-MM-DD'),
                max_date: moment().format('YYYY-MM-DD'),
            }
        case 'this-weekend':
            return {
                min_date: moment().format('YYYY-MM-DD'),
                max_date: moment().format('YYYY-MM-DD'),
            }
        case 'this-week':
            return {
                min_date: moment().format('YYYY-MM-DD'),
                max_date: moment().format('YYYY-MM-DD'),
            }
        case 'other':
            return otherValues
        default:
            return {}
    }
}

export const getPriceParams = values => {
    return {
        min_price: values[0],
        max_price: values[1] === 105 ? null : values[1],
    }
}

export const getPriceIndicatorText = value => {
    return getMinPriceLabel(value) + getMaxPriceLabel(value)
}

export const getMinPriceLabel = value => {
    if (value[0] === 0 && value[1] === 105) return 'Todos'

    if (value[0] === 0) return ''

    if (value[0] === 105) return '$100k+'

    if (value[1] === 105) return `$${value[0]}k+`

    return `$${value[0]}k`
}

export const getMaxPriceLabel = value => {
    if (value[0] === 0 && value[1] === 105) return ''
    if (value[0] !== 0 && value[1] === 105) return ''

    if (value[1] === 0) return 'Gratis'

    if (value[0] === 105) return ''

    if (value[0] === 0) return `≤ $${value[1]}k`

    return ` - $${value[1]}k`
}

const FilterContext = createContext({
    params: {},
    updateParams: () => {},
    resetParams: () => {},
    clearParams: () => {},
})

export const defaultParams = {
    min_date: moment().format('YYYY-MM-DD'),
    max_date: moment().format('YYYY-MM-DD'),
    min_price: null,
    max_price: null,
    zonas: [],
    keywords: [],
    tags: [],
    categories: [],
}

export const mapDefaultParams = {
    min_date: moment().format('YYYY-MM-DD'),
    max_date: moment().format('YYYY-MM-DD'),
    min_price: null,
    max_price: null,
    keywords: [],
    tags: [],
    categories: [],
}

export const listDefaultParans = {
    min_date: moment().format('YYYY-MM-DD'),
    max_date: moment().format('YYYY-MM-DD'),
    min_price: null,
    max_price: null,
    zonas: [],
    keywords: [],
    tags: [],
    categories: [],
}

export const FilterProvider = ({ children }) => {
    const [params, setParams] = useState(defaultParams)

    const clearParams = () => {
        setParams(defaultParams)
    }

    const resetParams = () => {
        setParams(defaultParams)
    }

    const updateParams = values => {
        setParams(prevParams => ({
            ...prevParams,
            ...values,
        }))
    }

    // const setmapDefaultParams = () => {
    //     setParams(mapDefaultParams)
    // }

    // const setlistDefaultParans = () => {
    //     setParams(listDefaultParans)
    // }

    return (
        <FilterContext.Provider
            value={{
                params,
                updateParams,
                clearParams,
                resetParams,
            }}>
            {children}
        </FilterContext.Provider>
    )
}

export function useFilterContext() {
    return useContext(FilterContext)
}
