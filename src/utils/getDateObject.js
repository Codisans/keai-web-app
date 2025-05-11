import moment from 'moment'

export const getDateObject = date => {
    return date ? new Date(moment(date).endOf('day').format()) : null
}