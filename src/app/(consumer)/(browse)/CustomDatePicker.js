import DatePicker from 'react-datepicker'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { es } from 'date-fns/locale/es'
import moment from 'moment'
import { getDateObject } from '@/utils/getDateObject'

export const CustomDatePicker = ({
    setDate,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    ...props
}) => {
    registerLocale('es', es)
    setDefaultLocale('es')

    const onChange = dates => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
        setDate([
            moment(start).format('YYYY-MM-DD'),
            moment(end).format('YYYY-MM-DD'),
        ])
    }

    return (
        <div className="flex justify-center items-center">
            <DatePicker
                locale="es"
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                minDate={getDateObject(moment().format('YYYY-MM-DD'))}
                selectsRange
                inline
                {...props}
            />
        </div>
    )
}
