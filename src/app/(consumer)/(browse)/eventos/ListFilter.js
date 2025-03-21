'use client'

import { useEffect, useState, useContext } from 'react'
import moment from 'moment'
import { PriceSlider } from '../PriceSlider'
import { FilterSection } from '../FilterSection'
import { DateRadio } from '../DateRadio'
import { usePathname, useRouter } from 'next/navigation'
import { TestBlock } from '@/components/atoms/TestBlock'
import { useConsumerContext } from '../../ConsumerContext'
import { EventURLSearchParams } from '@/utils/EventURLSearchParams'
import TagsAutocomplete from '@/components/atoms/TagsAutocomplete'
import { getPriceIndicatorText } from '@/utils/filterUtils'
import { FilterToggle } from '@/components/atoms/FilterToggle'
import { useSearchParams } from 'next/navigation'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'

export const ListFilter = () => {
    const { filterIsOpen, setFilterIsOpen } = useContext(ConsumerContext)
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { tags } = useConsumerContext()
    const [date, setDate] = useState('today')
    const [minDate, setMinDate] = useState('')
    const [maxDate, setMaxDate] = useState('')
    const [priceValue, setPriceValue] = useState([0, 105])
    const [selectedTags, setSelectedTags] = useState([])
    const [keywordsValue, setKeywordsValue] = useState('')

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
        setKeywordsValue(urlSearchParams.get('keywords') || '')
    }, [])

    const handleSubmit = e => {
        e?.preventDefault()
        setFilterIsOpen(false)
        const params = {
            min_date: moment(minDate).format('YYYY-MM-DD'),
            max_date: moment(maxDate).format('YYYY-MM-DD'),
            min_price: getMinPriceParam(priceValue),
            max_price: getMaxPriceParam(priceValue),
            tags: selectedTags.map(tag => tag.id),
            keywords: keywordsValue,
        }
        const eventSearchParams = new EventURLSearchParams(params)
        router.push(`?${eventSearchParams.toClientMapString()}`)
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
        router.push(pathname)
    }

    const handleClearSearch = () => {
        setKeywordsValue('')
        const urlSearchParams = new URLSearchParams(searchParams)
        urlSearchParams.delete('keywords')
        router.push(`${pathname}?${urlSearchParams.toString()}`)
    }

    return (
        <form onSubmit={handleSubmit} className="w-full py-grid-gap">
            <div className="flex gap-grid px-grid-gap">
                <div className="relative bg-white grow rounded group">
                    <input
                        className="pl-10 pr-3 h-10 w-full rounded border border-grey peer"
                        placeholder="Keai?"
                        value={keywordsValue}
                        onChange={e => {
                            setKeywordsValue(e.target.value)
                        }}
                        type="text"
                    />
                    <svg
                        className={`absolute left-2 top-2 w-6 h-6 pointer-events-none ${keywordsValue !== '' ? 'group-focus-within:hidden' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    {keywordsValue !== '' && (
                        <>
                            <button
                                type="button"
                                className="absolute left-0 top-0 p-2 group-focus-within:visible invisible"
                                onClick={handleClearSearch}>
                                <span className="sr-only">Clear</span>
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18 17.94 6M18 18 6.06 6"
                                    />
                                </svg>
                            </button>
                            {keywordsValue != searchParams.get('keywords') && (
                                <button
                                    type="submit"
                                    className="absolute right-0 m-1 py-1 px-1.5 bg-orange rounded">
                                    <span className="sr-only">Search</span>
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 12H5m14 0-4 4m4-4-4-4"
                                        />
                                    </svg>
                                </button>
                            )}
                        </>
                    )}
                </div>
                <FilterToggle
                    setIsOpen={setFilterIsOpen}
                    isOpen={filterIsOpen}
                />
            </div>
            {filterIsOpen && (
                <div className="absolute top-full mt-grid-gap border border-grey h-[calc(100svh-13.6rem)] rounded-ui overflow-hidden inset-x-grid-gap select-none bg-white z-20">
                    <div className="h-full overflow-y-auto">
                        <div className="flex justify-end z-40 sticky top-0 p-4 w-full bg-white shadow">
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
                        <div className="w-full flex flex-col">
                            <FilterSection
                                indicator={
                                    <legend className="w-full flex justify-between items-center gap-1 text-caps">
                                        {minDate != '' && (
                                            <span>
                                                {moment(minDate)?.format(
                                                    'ddd D MMM',
                                                )}
                                            </span>
                                        )}
                                        {maxDate != '' &&
                                            minDate != maxDate && (
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
                                            setMinDate(
                                                moment().format('YYYY-MM-DD'),
                                            )
                                            setMaxDate(
                                                moment().format('YYYY-MM-DD'),
                                            )
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
                                                moment()
                                                    .day(5)
                                                    .format('YYYY-MM-DD'),
                                            )
                                            setMaxDate(
                                                moment()
                                                    .day(7)
                                                    .format('YYYY-MM-DD'),
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
                                            setMinDate(
                                                moment().format('YYYY-MM-DD'),
                                            )
                                            setMaxDate(
                                                moment()
                                                    .day(7)
                                                    .format('YYYY-MM-DD'),
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
                </div>
            )}
        </form>
    )
}
