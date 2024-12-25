'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/atoms/Button'
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
import { DatePicker } from '@/components/atoms/DatePicker'

export const MapFilter = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { tags } = useConsumerContext()
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const [date, setDate] = useState('today')
    const [minDateInput, setMinDateInput] = useState('')
    const [maxDateInput, setMaxDateInput] = useState('')
    const [minDate, setMinDate] = useState('')
    const [maxDate, setMaxDate] = useState('')
    const [priceValue, setPriceValue] = useState([0, 105])
    const [selectedTags, setSelectedTags] = useState([])
    const [keywordsValue, setKeywordsValue] = useState('')

    const [startDate, setStartDate] = useState('')

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
        setMinDateInput('')
        setMaxDateInput('')
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
        <form onSubmit={handleSubmit} className="pointer-events-auto">
            <div className="absolute top-[3.7rem] inset-x-gg flex gap-gg sm:left-auto sm:w-[420px]">
                <div className="relative bg-white grow rounded-ui group">
                    <input
                        className="pl-10 pr-3 h-10 w-full rounded-ui border border-grey-3 peer"
                        placeholder="Keai?"
                        value={keywordsValue}
                        onChange={e => {
                            setKeywordsValue(e.target.value)
                        }}
                        type="text"
                    />
                    <svg
                        className={`absolute left-2 top-2 w-6 h-6 pointer-events-none ${keywordsValue === searchParams.get('keywords') ? '' : 'opacity-60'} ${keywordsValue !== '' ? 'group-focus-within:hidden' : ''}`}
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
                                className="absolute left-0 top-0 p-2 group-focus-within:block hidden"
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
                            <button
                                type="submit"
                                className="absolute right-0 top-0 py-2 px-3 bg-primary rounded-ui">
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
                        </>
                    )}
                </div>
                <FilterToggle
                    setIsOpen={setFilterIsOpen}
                    isOpen={filterIsOpen}
                />
            </div>
            {filterIsOpen && (
                <div className="absolute top-[6.8rem] border border-grey-3 bottom-[4.6rem] rounded-ui overflow-hidden inset-x-gg sm:left-auto sm:w-[420px] select-none bg-white">
                    <div className="h-full overflow-y-auto">
                        <div className="flex justify-between sticky top-0 p-4 w-full bg-white shadow">
                            <p className="text-h2">Filtros:</p>
                            <div className="flex gap-gg">
                                <Button type="button" onClick={handleClear}>
                                    Restablecer
                                </Button>
                                <Button
                                    type="button"
                                    style="primary"
                                    onClick={handleSubmit}>
                                    Buscar
                                </Button>
                            </div>
                        </div>
                        <div className="w-full flex flex-col">
                            <FilterSection
                                indicator={
                                    <legend className="w-full flex justify-between items-center gap-1 text-caps py-2">
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
                                    <button></button>
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
                                            setMinDate(
                                                moment().format('YYYY-MM-DD'),
                                            )
                                            setMaxDate(
                                                moment()
                                                    .day(7)
                                                    .format('YYYY-MM-DD'),
                                            )
                                            setMinDateInput('')
                                            setMaxDateInput('')
                                        }}
                                        label="Esta Semana"
                                    />
                                    {/* <DatePicker
                                        onChange={e => {
                                            console.log(e)
                                        }}
                                    /> */}
                                    <div className="grid w-full grid-cols-2 gap-1">
                                        <div className="col-span-1">
                                            <input
                                                className={`w-full border-grey rounded-button block text-radio [&[value='']]:bg-white bg-primary ${minDateInput === '' ? 'bg-primary' : ''}`}
                                                min={moment().format(
                                                    'YYYY-MM-DD',
                                                )}
                                                value={minDateInput || ''}
                                                onChange={e => {
                                                    const date = moment(
                                                        e.target.value,
                                                    ).format('YYYY-MM-DD')
                                                    setDate('other')
                                                    setMinDate(date)
                                                    setMinDateInput(date)

                                                    if (
                                                        moment(date).isAfter(
                                                            maxDateInput,
                                                        )
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
                                                        ? moment().format(
                                                              'YYYY-MM-DD',
                                                          )
                                                        : moment(
                                                              minDateInput,
                                                          ).format('YYYY-MM-DD')
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

                            <FilterSection legend="Tags">
                                <TestBlock data={tags} />
                                <TagsAutocomplete
                                    selectedTags={selectedTags}
                                    setSelectedTags={setSelectedTags}
                                    tags={tags}
                                />
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
                    </div>
                </div>
            )}
        </form>
    )
}
