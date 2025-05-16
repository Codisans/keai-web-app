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

export const FilterForm = ({ className = '', isMap = false }) => {
    const { filterIsOpen, setFilterIsOpen } = useConsumerContext()
    const { tags } = useConsumerContext()
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const today = moment().format('YYYY-MM-DD')
    const defaultDate = [
        today,
        isMap ? moment().day(0).format('YYYY-MM-DD') : null,
    ]
    const [date, setDate] = useState(defaultDate)
    const [startDate, setStartDate] = useState(getDateObject(date[0]))
    const [endDate, setEndDate] = useState(getDateObject(date[1]))
    const [showDatePicker, setShowDatePicker] = useState(false)

    const [priceValue, setPriceValue] = useState([null, null])
    const [selectedTags, setSelectedTags] = useState([])

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(searchParams)
        const paramsMinDate = urlSearchParams.get('min_date')
        const paramsMaxDate = urlSearchParams.get('max_date')
        setPriceValue([
            urlSearchParams.get('min_price') || null,
            urlSearchParams.get('max_price') || null,
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

        if (date[0] && date[0] != today) {
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
                urlSearchParams.set('tags[]', tag.id)
            })
        }

        if(urlSearchParams.size == 1 && urlSearchParams.get('min_date') == today) {
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
            className={`${filterIsOpen ? 'open' : ''} max-w-[480px] ${className}`}>
            <div className="w-auto h-full p-2 overflow-y-auto pointer-events-auto bg-white-true">
                <div className="flex justify-end w-full">
                    <h2 className="sr-only">Filtros:</h2>
                    <div className="flex gap-2">
                        <button
                            className="text-xs typo-caps underline p-2"
                            type="button"
                            onClick={handleClear}>
                            Restablecer
                        </button>
                        <button
                            className="button dark"
                            type="button"
                            onClick={handleSubmit}>
                            Buscar
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-col mt-2">
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
                                    showDatePicker
                                        ? 'selected'
                                        : ''
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
                            selectedTags={selectedTags}
                            setSelectedTags={setSelectedTags}
                            tags={tags}
                        />
                    </FilterSection>

                    <FilterSection
                        legend="Precio">
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
