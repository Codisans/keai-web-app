export function colorIsDark(colorCode) {
    if (!colorCode) return true

    let color =
        colorCode.charAt(0) === '#' ? colorCode.substring(1, 7) : colorCode
    let r = parseInt(color.substring(0, 2), 16) // hexToR
    let g = parseInt(color.substring(2, 4), 16) // hexToG
    let b = parseInt(color.substring(4, 6), 16) // hexToB
    return r * 0.299 + g * 0.587 + b * 0.114 <= 186
}
