export const cleanParams = params => {
    const cleanedParams = new URLSearchParams()

    for (const [key, value] of params.entries()) {
        if (
            value !== 'null' &&
            !(Array.isArray(value) && value.length === 0) &&
            value !== ''
        ) {
            cleanedParams.append(key, value)
        }
    }

    return cleanedParams
}
