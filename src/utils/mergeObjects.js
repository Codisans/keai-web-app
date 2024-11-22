export const mergeObjects = (baseObject, obj) => {
    let result = {}
    Object.entries(baseObject)?.forEach(([key, value]) => {
        result[key] = obj[key] || value
    })
    return result
}
