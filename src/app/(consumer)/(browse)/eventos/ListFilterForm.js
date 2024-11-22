'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/atoms/Button'
import moment from 'moment'
import { getPriceIndicatorText } from '../FilterContext'
import { PriceSlider } from '../PriceSlider'
import { FilterSection } from '../FilterSection'
import { DateRadio } from '../DateRadio'
import { useConsumerContext } from '../../ConsumerContext'

export const ListFilterForm = () => {
    const { setFilterIsOpen } = useConsumerContext()
    const [date, setDate] = useState('today')
    const [minDateInput, setMinDateInput] = useState('')
    const [maxDateInput, setMaxDateInput] = useState('')
    const [minDate, setMinDate] = useState('')
    const [maxDate, setMaxDate] = useState('')
    const [priceValue, setPriceValue] = useState([0, 105])

    useEffect(() => {
        const today = moment().format('YYYY-MM-DD')
        setMinDate(today)
        setMaxDate(today)
    }, [])

    // useEffect(() => {
    //     const newParams = {
    //         min_date: minDate,
    //         max_date: maxDate,
    //         min_price: priceValue[0] === 105 ? 100 : priceValue[0],
    //         max_price: priceValue[1] === 105 ? null : priceValue[1],
    //     }
    //     // updateParams(newParams)
    // }, [minDate, maxDate, priceValue])

    // const handleSubmit = e => {
    //     e?.preventDefault()
    //     console.log(params)
    // }

    // const handleClear = () => {
    //     const today = moment().format('YYYY-MM-DD')
    //     setMinDate(today)
    //     setMaxDate(today)
    //     setMinDateInput('')
    //     setMaxDateInput('')
    //     setPriceValue([0, 105])
    //     clearParams()
    // }

    return (
        <form className="relative h-full overflow-y-auto select-none">
            <div className="flex justify-between sticky top-0 w-full p-gg bg-white shadow">
                <p className="text-h2">Filtros:</p>
                <div className="flex gap-gg">
                    <Button
                        type="button"
                        onClick={() => console.log('clear filter')}>
                        Restablecer
                    </Button>
                    <Button
                        className="!bg-black text-white"
                        type="button"
                        onClick={() => setFilterIsOpen(s => !s)}>
                        Aplicar
                    </Button>
                </div>
            </div>
            {/* <TagSearch options={tags} /> */}
            <div className="w-full flex flex-col gap-6 p-gg">
                <FilterSection
                    indicator={
                        <legend className="w-full flex justify-between items-center gap-1 text-caps py-2">
                            {minDate != '' && (
                                <span>
                                    {moment(minDate)?.format('ddd D MMM')}
                                </span>
                            )}
                            {maxDate != '' && minDate != maxDate && (
                                <>
                                    <svg
                                        className="w-6 h-6 rotate-45 -m-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5"
                                        />
                                    </svg>

                                    <span>
                                        {moment(maxDate).format('ddd D MMM')}
                                    </span>
                                </>
                            )}
                        </legend>
                    }>
                    <div className="flex flex-wrap gap-1">
                        <DateRadio
                            id="date-today"
                            name="date"
                            value="today"
                            label="Hoy"
                            checked={date === 'today'}
                            onChange={e => {
                                setDate(e.target.value)
                                setMinDate(moment().format('YYYY-MM-DD'))
                                setMaxDate('')
                                setMinDateInput('')
                                setMaxDateInput('')
                            }}
                        />
                        <DateRadio
                            id="date-tomorrow"
                            name="date"
                            value="tomorrow"
                            checked={date === 'tomorrow'}
                            onChange={e => {
                                setDate(e.target.value)
                                setMinDate(
                                    moment()
                                        .add(1, 'days')
                                        .format('YYYY-MM-DD'),
                                )
                                setMaxDate(
                                    moment()
                                        .add(1, 'days')
                                        .format('YYYY-MM-DD'),
                                )
                                setMinDateInput('')
                                setMaxDateInput('')
                            }}
                            label="Mañana"
                        />
                        <DateRadio
                            id="date-this-weekend"
                            name="date"
                            value="this-weekend"
                            className="peer hidden"
                            checked={date === 'this-weekend'}
                            onChange={e => {
                                setDate(e.target.value)
                                setMinDate(moment().day(6).format('YYYY-MM-DD'))
                                setMaxDate(moment().day(7).format('YYYY-MM-DD'))
                                setMinDateInput('')
                                setMaxDateInput('')
                            }}
                            label="Este FDS"
                        />
                        <DateRadio
                            id="date-this-week"
                            name="date"
                            className="peer hidden"
                            value="this-week"
                            checked={date === 'this-week'}
                            onChange={e => {
                                setDate(e.target.value)
                                setMinDate(moment().format('YYYY-MM-DD'))
                                setMaxDate(moment().day(7).format('YYYY-MM-DD'))
                                setMinDateInput('')
                                setMaxDateInput('')
                            }}
                            label="Esta Semana"
                        />
                        <div className="grid w-full grid-cols-2 gap-1">
                            <div className="col-span-1">
                                <input
                                    className="w-full border-grey rounded-button block text-radio [&[value='']]:bg-white bg-primary"
                                    min={moment().format('YYYY-MM-DD')}
                                    value={minDateInput || ''}
                                    onChange={e => {
                                        const date = moment(
                                            e.target.value,
                                        ).format('YYYY-MM-DD')
                                        setDate('other')
                                        setMinDate(date)
                                        setMinDateInput(date)

                                        if (
                                            moment(date).isAfter(maxDateInput)
                                        ) {
                                            setMaxDate(date)
                                            setMaxDateInput('')
                                        }
                                    }}
                                    placeholder="Desde"
                                    id="min-date"
                                    name="min-date"
                                    type="date"
                                />
                            </div>
                            <div className="col-span-1">
                                <input
                                    className="w-full border-primary bg-primary rounded-button block text-radio [&[value='']]:border-grey [&[value='']]:bg-white"
                                    min={
                                        minDateInput === ''
                                            ? moment().format('YYYY-MM-DD')
                                            : moment(minDateInput).format(
                                                  'YYYY-MM-DD',
                                              )
                                    }
                                    value={maxDateInput || ''}
                                    onChange={e => {
                                        const date = moment(
                                            e.target.value,
                                        ).format('YYYY-MM-DD')
                                        setDate('other')
                                        setMaxDate(date)
                                        setMaxDateInput(date)
                                    }}
                                    placeholder="Hasta"
                                    id="max-date"
                                    name="max-date"
                                    type="date"
                                />
                            </div>
                        </div>
                    </div>
                </FilterSection>
                <FilterSection
                    legend="Precio:"
                    indicator={
                        <span className="text-caps">
                            {getPriceIndicatorText(priceValue)}
                        </span>
                    }>
                    <div className="flex flex-wrap gap-x-3 gap-y-2 w-full px-12 pt-10">
                        <PriceSlider
                            priceValue={priceValue}
                            setPriceValue={setPriceValue}
                        />
                    </div>
                </FilterSection>
            </div>
        </form>
    )
}
