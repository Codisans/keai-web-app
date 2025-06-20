'use client'

import { useEffect, useState } from 'react'
import moment from 'moment'
import { PriceRadio } from './PriceRadio'
import { FilterSection } from './FilterSection'
import { DateRadio } from './DateRadio'
import { usePathname, useRouter } from 'next/navigation'
import TagsAutocomplete from '@/components/atoms/TagsAutocomplete'
import { useSearchParams } from 'next/navigation'
import { useConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { CustomDatePicker } from './CustomDatePicker'
import { getDateObject } from '@/utils/getDateObject'
import { useApi } from '@/hooks/api'

export const defaultMapDate = () => {
    return [
        moment().format('YYYY-MM-DD'),
        moment().add(4, 'days').format('YYYY-MM-DD'),
    ]
}

export const defaultListDate = () => {
    return [moment().format('YYYY-MM-DD'), null]
}

export const FilterForm = ({ className = '', isMap = false }) => {
    const {
        filterIsOpen,
        closeFilter,
        highlightSearchButton,
        setHighlightSearchButton,
    } = useConsumerContext()
    const { tags } = useApi()
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const today = moment().format('YYYY-MM-DD')
    const defaultDate = isMap ? defaultMapDate() : defaultListDate()

    const [date, setDate] = useState(defaultDate)
    const [startDate, setStartDate] = useState(getDateObject(date[0]))
    const [endDate, setEndDate] = useState(getDateObject(date[1]))
    const [showDatePicker, setShowDatePicker] = useState(false)

    const [priceValue, setPriceValue] = useState([null, null])
    const [selectedTags, setSelectedTags] = useState([])
    const [tagInputValue, setTagInputValue] = useState('')

    useEffect(() => {
        setPriceValue([
            searchParams.get('min_price') || null,
            searchParams.get('max_price') || null,
        ])
        setSelectedTags(
            searchParams.getAll('tags[]').map(tag => Number(tag) || []),
        )
        setDate([
            searchParams.get('min_date') || defaultDate[0],
            searchParams.get('max_date') || defaultDate[1],
        ])
    }, [])

    const handleSubmit = e => {
        const urlSearchParams = new URLSearchParams(searchParams)
        e?.preventDefault()
        closeFilter()

        if (date[0] && date[0] !== today) {
            urlSearchParams.set('min_date', date[0])
        } else {
            urlSearchParams.delete('min_date')
        }

        if (date[1]) {
            urlSearchParams.set('max_date', date[1])
        } else {
            urlSearchParams.delete('max_date')
        }

        if (priceValue[0] !== null) {
            urlSearchParams.set('min_price', priceValue[0])
        } else {
            urlSearchParams.delete('min_price')
        }

        if (priceValue[1] !== null) {
            urlSearchParams.set('max_price', priceValue[1])
        } else {
            urlSearchParams.delete('max_price')
        }

        urlSearchParams.delete('tags[]')

        if (selectedTags?.length > 0) {
            selectedTags.forEach(tag => {
                urlSearchParams.append('tags[]', tag)
            })
        }

        if (
            urlSearchParams.size == 1 &&
            urlSearchParams.get('min_date') == today
        ) {
            router.push(pathname)
        } else {
            router.push(`${pathname}?${urlSearchParams.toString()}`)
        }
    }

    const handleClear = () => {
        setDate(defaultDate)
        setPriceValue([null, null])
        setStartDate(null)
        setEndDate(null)
        setSelectedTags([])
        setTagInputValue([])
        setShowDatePicker(false)
        const urlSearchParams = new URLSearchParams(searchParams)
        urlSearchParams.delete('min_date')
        urlSearchParams.delete('max_date')
        urlSearchParams.delete('min_price')
        urlSearchParams.delete('max_price')
        urlSearchParams.delete('tags[]')
        router.push(`${pathname}?${urlSearchParams.toString()}`)
    }

    return (
        <form
            onSubmit={handleSubmit}
            onInput={() => setHighlightSearchButton(true)}
            className={`${filterIsOpen ? 'open' : ''} max-w-[480px] ${className}`}>
            <div className="w-auto h-full px-2 pb-4 overflow-y-auto pointer-events-auto bg-white-true">
                <div className="flex justify-end w-full sticky z-30 top-0 bg-white-true py-2">
                    <h2 className="sr-only">Filtros:</h2>
                    <div className="flex gap-2">
                        <button
                            className="text-xs typo-caps underline p-2"
                            type="button"
                            onClick={handleClear}>
                            Restablecer
                        </button>
                        <button
                            className={`button ${highlightSearchButton ? 'dark' : ''}`}
                            type="button"
                            onClick={handleSubmit}>
                            Buscar
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-col">
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

                        <div className="max-w-full mx-auto pt-2 flex flex-col gap-y-2">
                            <button
                                className={`button-radio w-full ${
                                    showDatePicker ? 'selected' : ''
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
                    </FilterSection>

                    <FilterSection legend="Tags">
                        <TagsAutocomplete
                            value={tagInputValue}
                            setValue={setTagInputValue}
                            // selectedTags={selectedTags}
                            setSelectedTags={setSelectedTags}
                            tags={tags}
                        />
                    </FilterSection>

                    <FilterSection legend="Precio">
                        <PriceRadio
                            priceValue={priceValue}
                            setPriceValue={setPriceValue}
                        />
                    </FilterSection>
                </div>
            </div>
        </form>
    )
}
