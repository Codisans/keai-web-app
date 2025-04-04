import { Symbol } from '@/components/atoms/Symbol'
import moment from 'moment'

export const DateRadio = ({ date, setDate }) => {
    moment.locale('es')
    const today = moment().format('YYYY-MM-DD')

    const options = [
        {
            id: 'today',
            label: 'Hoy',
            value: [today, today],
        },
        {
            id: 'tomorrow',
            label: 'Mañana',
            value: [
                moment().add(1, 'days').format('YYYY-MM-DD'),
                moment().add(1, 'days').format('YYYY-MM-DD'),
            ],
        },
        {
            id: 'this-weekend',
            label: 'Este FDS',
            value: [
                moment().isAfter(moment().day(5))
                    ? moment().format('YYYY-MM-DD')
                    : moment().day(5).format('YYYY-MM-DD'),
                moment().day(7).format('YYYY-MM-DD'),
            ],
        },
    ]

    const weekOption =
        moment().day() >= 5
            ? {
                  id: 'next-week',
                  label: 'Próx. semana',
                  value: [
                      moment().add(1, 'week').day(1).format('YYYY-MM-DD'),
                      moment().add(1, 'week').day(7).format('YYYY-MM-DD'),
                  ],
              }
            : {
                  id: 'this-week',
                  label: 'Esta semana',
                  value: [
                      moment().format('YYYY-MM-DD'),
                      moment().day(7).format('YYYY-MM-DD'),
                  ],
              }

    return (
        <div className="flex flex-col gap-2">
            <div className="w-full flex justify-between items-center gap-1 typo-caps">
                {date[0] != '' && (
                    <span>
                        {moment(date[0])?.locale('es').format('ddd D MMM')}
                    </span>
                )}
                {date[1] != '' && date[0] != date[1] && (
                    <>
                        <Symbol
                            className="w-6 h-6 rotate-45 -my-2"
                            name="arrows-horizontal"
                        />
                        <span>
                            {date[1]
                                ? moment(date[1])
                                      ?.locale('es')
                                      .format('ddd D MMM')
                                : 'INFINITO'}
                        </span>
                    </>
                )}
            </div>
            <div className="flex flex-wrap gap-1">
                {[...options, weekOption].map((option, index) => (
                    <div key={index} className="grow">
                        <input
                            id={`date-${index}`}
                            name="date-radio"
                            value={option.value}
                            className="peer hidden"
                            checked={
                                date[0] === option.value[0] &&
                                date[1] === option.value[1]
                            }
                            type="radio"
                            onChange={() => {
                                setDate(option.value)
                            }}
                        />
                        <label
                            className="block w-full text-center typo-caps peer-checked:bg-primary peer-checked:border-primary border-grey border bg-white py-2 px-1 rounded"
                            htmlFor={`date-${index}`}>
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}
