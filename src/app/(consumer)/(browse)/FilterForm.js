'use client'

import { useEffect, useState } from 'react'
import moment from 'moment'
import { PriceSlider } from './PriceSlider'
import { FilterSection } from './FilterSection'
import { DateRadio } from './DateRadio'
import { usePathname, useRouter } from 'next/navigation'
import TagsAutocomplete from '@/components/atoms/TagsAutocomplete'
import { getPriceIndicatorText } from '@/utils/filterUtils'
import { useSearchParams } from 'next/navigation'
import { useConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { CustomDatePicker } from './CustomDatePicker'

export const FilterForm = ({ className = '', datepicker = false }) => {
    const { filterIsOpen, setFilterIsOpen } = useConsumerContext()
    const { tags } = useConsumerContext()
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const today = moment().format('YYYY-MM-DD')
    const defaultDate = [today, datepicker ? null : today]
    const [date, setDate] = useState(defaultDate)
    const [startDate, setStartDate] = useState(
        date[0] ? new Date(date[0]) : null,
    )
    const [endDate, setEndDate] = useState(date[1] ? new Date(date[1]) : null)
    const [showDatePicker, setShowDatePicker] = useState(false)

    const [priceValue, setPriceValue] = useState([0, 105])
    const [selectedTags, setSelectedTags] = useState([])

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(searchParams)
        const paramsMinDate = urlSearchParams.get('min_date')
        const paramsMaxDate = urlSearchParams.get('max_date')
        setPriceValue([
            urlSearchParams.get('min_price') || 0,
            urlSearchParams.get('max_price') || 105,
        ])
        setSelectedTags(urlSearchParams.get('tags') || [])

        setDate([
            paramsMinDate || defaultDate[0],
            paramsMaxDate || defaultDate[1],
        ])
    }, [])

    const handleSubmit = e => {
        const urlSearchParams = new URLSearchParams(searchParams)
        e?.preventDefault()
        setFilterIsOpen(false)

        if (date[0]) {
            urlSearchParams.set('min_date', date[0])
        } else {
            urlSearchParams.delete('min_date')
        }

        if (date[1]) {
            urlSearchParams.set('max_date', date[1])
        } else {
            urlSearchParams.delete('max_date')
        }

        const minPrice = getMinPriceParam(priceValue)
        const maxPrice = getMaxPriceParam(priceValue)

        if (minPrice) {
            urlSearchParams.set('min_price', minPrice)
        } else {
            urlSearchParams.delete('min_price')
        }

        if (maxPrice) {
            urlSearchParams.set('max_price', maxPrice)
        } else {
            urlSearchParams.delete('max_price')
        }

        urlSearchParams.delete('tags')

        if (selectedTags.length > 0) {
            selectedTags.forEach(tag => {
                urlSearchParams.append('tags', tag.id)
            })
        }

        router.push(`${pathname}?${urlSearchParams.toString()}`)
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
        setDate(defaultDate)
        setPriceValue([0, 105])
        setStartDate(null)
        setEndDate(null)
        setSelectedTags([])
        setShowDatePicker(false)
        const urlSearchParams = new URLSearchParams(searchParams)
        urlSearchParams.delete('min_date')
        urlSearchParams.delete('max_date')
        urlSearchParams.delete('min_price')
        urlSearchParams.delete('max_price')
        urlSearchParams.delete('tags')
        router.push(`${pathname}?${urlSearchParams.toString()}`)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className={`${filterIsOpen ? 'open' : ''} ${className}`}>
                <div className="w-full h-full pointer-events-auto bg-white">
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
                        <FilterSection>
                            <DateRadio
                                date={date}
                                setDate={value => {
                                    setDate(value)
                                    setShowDatePicker(false)
                                    setStartDate(null)
                                    setEndDate(null)
                                }}
                                showDatePicker={showDatePicker}
                                setShowDatePicker={setShowDatePicker}
                            />
                            {datepicker && (
                                <div className="max-w-full mx-auto pt-1 flex flex-col gap-y-2">
                                    <button
                                        className={`block w-full text-center typo-caps border-grey border py-2 px-1 rounded ${
                                            showDatePicker
                                                ? 'border-primary bg-primary'
                                                : 'bg-white'
                                        }`}
                                        type="button"
                                        disabled={showDatePicker}
                                        onClick={() => {
                                            setShowDatePicker(true)
                                            setDate(defaultDate)
                                        }}>
                                        Otras fechas
                                    </button>
                                    {showDatePicker && (
                                        <CustomDatePicker
                                            date={date}
                                            setDate={setDate}
                                            startDate={startDate}
                                            endDate={endDate}
                                            setStartDate={setStartDate}
                                            setEndDate={setEndDate}
                                        />
                                    )}
                                </div>
                            )}
                        </FilterSection>

                        <FilterSection legend="Tags">
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
            </form>
        </>
    )
}
