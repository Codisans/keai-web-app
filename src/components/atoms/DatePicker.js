'use client'
import moment from 'moment'

import { DateRangePicker } from 'react-date-range'

export const DatePicker = ({ onChange = e => console.log(e) }) => {
    const selectionRange = {
        startDate: moment().format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD'),
        key: 'selection',
    }
    return <DateRangePicker ranges={[selectionRange]} onChange={onChange} />
}
