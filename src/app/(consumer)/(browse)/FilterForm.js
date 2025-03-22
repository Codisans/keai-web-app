'use client'

import { useEffect, useState } from 'react'
import moment from 'moment'
import { PriceSlider } from './PriceSlider'
import { FilterSection } from './FilterSection'
import { DateRadio } from './DateRadio'
import { usePathname, useRouter } from 'next/navigation'
import { TestBlock } from '@/components/atoms/TestBlock'
import { EventURLSearchParams } from '@/utils/EventURLSearchParams'
import TagsAutocomplete from '@/components/atoms/TagsAutocomplete'
import { getPriceIndicatorText } from '@/utils/filterUtils'
import { useSearchParams } from 'next/navigation'
import { useConsumerContext } from '@/app/(consumer)/ConsumerContext'

export const FilterForm = ({ className = '' }) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { tags } = useConsumerContext()
    const [date, setDate] = useState('today')
    const [minDate, setMinDate] = useState('')
    const [maxDate, setMaxDate] = useState('')
    const [priceValue, setPriceValue] = useState([0, 105])
    const [selectedTags, setSelectedTags] = useState([])
    const { filterIsOpen, setFilterIsOpen } = useConsumerContext()

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(searchParams)
        const today = moment().format('YYYY-MM-DD')
        setMinDate(urlSearchParams.get('min_date') || today)
        setMaxDate(urlSearchParams.get('max_date') || today)
        setPriceValue([
            urlSearchParams.get('min_price') || 0,
            urlSearchParams.get('max_price') || 105,
        ])
        setSelectedTags(urlSearchParams.get('tags') || [])
    }, [])

    const handleSubmit = e => {
        const urlSearchParams = new URLSearchParams(searchParams)
        e?.preventDefault()
        setFilterIsOpen(false)
        const params = {
            min_date: moment(minDate).format('YYYY-MM-DD'),
            max_date: moment(maxDate).format('YYYY-MM-DD'),
            min_price: getMinPriceParam(priceValue),
            max_price: getMaxPriceParam(priceValue),
            tags: selectedTags.map(tag => tag.id),
            keywords: urlSearchParams.get('keywords'),
        }
        const eventSearchParams = new EventURLSearchParams(params)
        router.push(`${pathname}?${eventSearchParams.toClientMapString()}`)
    }

    const getMinPriceParam = value => {
        if (value[0] === 0) return null

        if (value[0] >= 100) {
            return 100000
        }

        return value[0] * 1000
    }

    const getMaxPriceParam = value => {
        if (value[1] === 105) return null
        return value[1] * 1000
    }

    const handleClear = () => {
        const today = moment().format('YYYY-MM-DD')
        setMinDate(today)
        setMaxDate(today)
        setPriceValue([0, 105])
        setDate('today')
        setSelectedTags([])
        const eventSearchParams = new EventURLSearchParams(searchParams)
        router.push(`${pathname}?${eventSearchParams.toClientMapString()}`)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`${filterIsOpen ? 'open' : ''} ${className}`}>
            <div className="w-full h-full overflow-y-auto pointer-events-auto bg-white">
                <div className="flex justify-end z-50 sticky top-0 p-4 w-full bg-white shadow">
                    <h2 className="sr-only">Filtros:</h2>
                    <div className="flex gap-grid">
                        <button
                            className="button bg-white underline text-black"
                            type="button"
                            onClick={handleClear}>
                            Restablecer
                        </button>
                        <button
                            className="button"
                            type="button"
                            onClick={handleSubmit}>
                            Buscar
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-col relative z-40">
                    <FilterSection
                        indicator={
                            <legend className="w-full flex justify-between items-center gap-1 text-caps">
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
                                            {moment(maxDate).format(
                                                'ddd D MMM',
                                            )}
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
                                    setMinDate(
                                        moment().isAfter(moment().day(5))
                                            ? moment().format('YYYY-MM-DD')
                                            : moment()
                                                  .day(5)
                                                  .format('YYYY-MM-DD'),
                                    )
                                    setMaxDate(
                                        moment().day(7).format('YYYY-MM-DD'),
                                    )
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
                                    setMaxDate(
                                        moment().day(7).format('YYYY-MM-DD'),
                                    )
                                }}
                                label="Esta Semana"
                            />
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
            </div>
        </form>
    )
}
