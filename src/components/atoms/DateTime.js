'use client'
import moment from 'moment'

export const DateTime = ({ date, format = 'date', className = '' }) => {
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

    return <time className={className}>{moment(date).format(getFormat())}</time>
}
