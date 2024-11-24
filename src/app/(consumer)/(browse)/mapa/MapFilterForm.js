'use client'

import { useContext, useEffect, useState } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { Button } from '@/components/atoms/Button'
import moment from 'moment'
import { getPriceIndicatorText } from '../FilterContext'
import { PriceSlider } from '../PriceSlider'
import { FilterSection } from '../FilterSection'
import { DateRadio } from '../DateRadio'
import { usePathname, useRouter } from 'next/navigation'
import { TestBlock } from '@/components/atoms/TestBlock'
import { useConsumerContext } from '../../ConsumerContext'
import { EventURLSearchParams } from '@/utils/EventURLSearchParams'
import TagsAutocomplete from '@/components/atoms/TagsAutocomplete'

export const MapFilterForm = () => {
    const { setFilterIsOpen } = useContext(ConsumerContext)
    const { tags } = useConsumerContext()
    const router = useRouter()
    const pathname = usePathname()
    // const { params, updateParams, clearParams, getSearchParams } =
    //     useFilterContext()
    const [date, setDate] = useState('today')
    const [minDateInput, setMinDateInput] = useState('')
    const [maxDateInput, setMaxDateInput] = useState('')
    const [minDate, setMinDate] = useState('')
    const [maxDate, setMaxDate] = useState('')
    const [priceValue, setPriceValue] = useState([0, 105])
    const [selectedTags, setSelectedTags] = useState([])

    useEffect(() => {
        const today = moment().format('YYYY-MM-DD')
        setMinDate(today)
        setMaxDate(today)
    }, [])

    const handleSubmit = e => {
        e?.preventDefault()
        setFilterIsOpen(s => !s)
        const params = {
            min_date: moment(minDate).format('YYYY-MM-DD'),
            max_date: moment(maxDate).format('YYYY-MM-DD'),
            min_price: (() => {
                switch (priceValue[0]) {
                    case 105:
                        return 100000
                    case 0:
                        return null
                    default:
                        return priceValue[0] * 1000
                }
            })(),
            max_price: priceValue[1] === 105 ? null : priceValue[1] * 1000,
            tags: selectedTags.map(tag => tag.id),
        }
        const eventSearchParams = new EventURLSearchParams(params)
        router.push(`?${eventSearchParams.toClientMapString()}`)
    }

    const handleClear = () => {
        const today = moment().format('YYYY-MM-DD')
        setMinDate(today)
        setMaxDate(today)
        setMinDateInput('')
        setMaxDateInput('')
        setPriceValue([0, 105])
        setDate('today')
        setSelectedTags([])
        router.push(pathname)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="relative h-full overflow-y-auto w-full select-none bg-white">
            <div className="flex justify-between sticky top-0 p-4 w-full bg-white">
                <p className="text-h2">Filtros:</p>
                <div className="flex gap-gg">
                    <Button type="button" onClick={handleClear}>
                        Restablecer
                    </Button>
                    <Button type="button" onClick={handleSubmit}>
                        Aplicar
                    </Button>
                </div>
            </div>
            <div className="w-full flex flex-col">
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
                                setMaxDate(moment().format('YYYY-MM-DD'))
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

                <FilterSection legend="Tags">
                    <TestBlock data={tags} />
                    <TagsAutocomplete
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                        tags={tags}
                    />
                </FilterSection>
            </div>
        </form>
    )
}
