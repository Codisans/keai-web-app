'use client'

import { DateTime } from '@/components/atoms/DateTime'
import { Symbol } from '@/components/atoms/Symbol'
import moment from 'moment'

export const DateRadio = ({ date, setDate }) => {
    moment.locale('es')
    const today = moment().format('YYYY-MM-DD')
    const isWeekend = moment().weekday() >= 5 || moment().weekday() == 0
    const startOfWeek = moment().startOf('week')
    const isSunday = moment().weekday() == 0

    const baseOptions = [
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
    ]

    const weekendOption =  {
        id: 'this-weekend',
        label: 'Este FDS',
        value: [
            isWeekend
                ? moment().format('YYYY-MM-DD')
                : startOfWeek.day(5).format('YYYY-MM-DD'),
            startOfWeek.day(7).format('YYYY-MM-DD'),
        ],
    }

    const weekOption =
        isWeekend
            ? {
                  id: 'next-week',
                  label: 'Próx. semana',
                  value: [
                      moment().day(7).add(1, 'day').format('YYYY-MM-DD'),
                      moment().day(14).format('YYYY-MM-DD'),
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

    const options = isSunday ? [...baseOptions, weekOption] : [...baseOptions, weekendOption, weekOption]

    return (
        <div className="flex flex-col gap-2">
            <div className="w-full grid grid-cols-5 items-center gap-2 typo-caps">
                {date[0] == today && date[1] == null
                    ? 
                        <span className='col-span-full'>Fechas: TODAS</span>
                    :
                        <>
                            {date[0] != '' && (
                                <span className='col-span-2'>
                                    <DateTime date={date[0]} format='ddd D MMM' />
                                </span>
                            )}
                            {date[1] != '' && date[0] != date[1] && (
                                <>
                                    <span className='col-span-1'>
                                        <Symbol
                                            className="w-6 h-6 rotate-45 -my-2 mx-auto"
                                            name="arrows-horizontal"
                                        />
                                    </span>
                                    <span className='col-span-2 text-right'>
                                    <DateTime date={date[1]} format='ddd D MMM' />
                                    </span>
                                </>
                            )}
                        </>
                }
            </div>
            <div className="flex flex-wrap gap-2">
                {options.map((option, index) => (
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
                            className="button-radio peer-checked:bg-primary peer-checked:hover:bg-primary/80 peer-checked:border-primary"
                            htmlFor={`date-${index}`}>
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}
