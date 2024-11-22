'use client'
import moment from 'moment'

export const DateTime = ({
    value,
    format = 'date',
    className = 'capitalize tracking-wide',
}) => {
    const getFormat = () => {
        switch (format) {
            case 'date':
                return 'ddd D MMM YYYY'
            case 'time':
                return 'HH:mm'
            default:
                return format
        }
    }

    return (
        <time className={className}>{moment(value).format(getFormat())}</time>
    )
}
