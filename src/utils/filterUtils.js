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

export const cleanParams = params => {
    if (typeof params === 'string' || params === 'array') return params
    let result = []
    Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === '') return

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
