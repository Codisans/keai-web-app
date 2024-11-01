'use client'

import { useState } from 'react'
// import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { Button } from '@/components/atoms/Button'
import { Box, Slider } from '@mui/material'
import { useMapContext } from './MapContext'
import moment from 'moment'

// const filterOptions = [
//     {
//         name: 'date',
//         legend: 'Fechas',
//         options: [
//             {
//                 id: 'date-today',
//                 label: 'Hoy',
//                 value: 'today',
//             },
//             {
//                 id: 'date-this-weekend',
//                 label: 'Este fds',
//                 value: 'this-weekend',
//             },
//             {
//                 id: 'date-this-week',
//                 label: 'Esta semana',
//                 value: 'this-week',
//             },
//             {
//                 id: 'date-other',
//                 label: 'Otro',
//                 value: 'other',
//             },
//         ],
//     },
//     {
//         name: 'price',
//         legend: 'Precio',
//         options: [
//             {
//                 id: 'price-free',
//                 label: 'Gratis',
//                 value: 'free',
//             },
//             {
//                 id: 'price-other',
//                 label: 'Hasta 10k',
//                 value: 'other',
//             },
//         ],
//     },
// ]

export const getDateParams = (value, otherValues) => {
    const today = moment(new Date())
    switch (value) {
        case 'today':
            return { end_date: today.format() }
        case 'this-weekend':
            return { start_date: today.format(), end_date: today.format() }
        case 'this-week':
            return { start_date: today.format(), end_date: today.format() }
        case 'other':
            return otherValues
        default:
            return {}
    }
}

export const getPriceParams = values => {
    return {
        min_price: values[0],
        max_price: values[1] === 105 ? null : values[1],
    }
}

const getMinPriceLabel = value => {
    if (value[0] === 0 && value[1] === 105) return 'Todos'

    if (value[0] === 0) return ''

    if (value[0] === 105) return '$100k+'

    if (value[1] === 105) return `$${value[0]}k+`

    return `$${value[0]}k`
}

const getMaxPriceLabel = value => {
    if (value[0] === 0 && value[1] === 105) return ''
    if (value[0] !== 0 && value[1] === 105) return ''

    if (value[1] === 0) return 'Gratis'

    if (value[0] === 105) return ''

    if (value[0] === 0) return `< $${value[1]}k`

    return ` - $${value[1]}k`
}

// export const getStartDate() => {

// }

// export const getEndDate = () => {

// }

export const MapFilterForm = () => {
    const today = new Date().toISOString()
    // const { setFilterIsOpen } = useContext(ConsumerContext)
    const { params, updateParams, clearParams } = useMapContext()
    const minDate = new Date().setHours(0, 0, 0, 0)
    const [date, setDate] = useState('today')
    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState('')
    const [priceValue, setPriceValue] = useState([0, 105])

    //     useEffect(() => {
    // handleChange()
    //     }, [])

    const handleSubmit = e => {
        e.preventDefault()
        updateParams({
            ...getDateParams(date, {
                start_date: moment(startDate).format(),
                end_date: moment(endDate).format(),
            }),
            ...getPriceParams({
                min_price: priceValue[0],
                max_price: priceValue[1],
            }),
        })
        console.log(params)
    }

    const handleClear = () => {
        clearParams()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="relative h-full overflow-y-auto w-full select-none bg-white">
            <div className="flex justify-between sticky top-0 p-1 w-full bg-white">
                <p className="text-h2">Filtros:</p>
                <div className="flex gap-gg">
                    <Button type="button" onClick={handleClear}>
                        Restablecer
                    </Button>
                    <Button className="!bg-black text-white" type="submit">
                        Aplicar
                    </Button>
                </div>
            </div>
            {/* <TagSearch options={tags} /> */}
            <div className="w-full flex flex-col">
                <FilterSection
                    legend={`${moment(startDate)?.format('ddd D MMM') || null} ${moment(endDate)?.format('ddd D MMM') || null}`}>
                    <div className="flex flex-wrap gap-x-1 gap-y-1">
                        <DateRadio
                            id="date-today"
                            name="date"
                            value="today"
                            label="Hoy"
                            checked={date === 'today'}
                            onChange={e => {
                                setDate(e.target.value)
                                setStartDate(today)
                                setEndDate(today)
                            }}
                        />
                        <DateRadio
                            id="date-tomorrow"
                            name="date"
                            value="tomorrow"
                            checked={date === 'tomorrow'}
                            onChange={e => {
                                setDate(e.target.value)
                                setStartDate(today)
                                setEndDate(today)
                            }}
                            label="Mañana"
                        />
                        <DateRadio
                            id="date-this-weekend"
                            name="date"
                            value="this-weekend"
                            className="peer hidden"
                            checked={date === 'this-weekend'}
                            onChange={e => setDate(e.target.value)}
                            label="Este FDS"
                        />
                        <DateRadio
                            id="date-this-week"
                            name="date"
                            className="peer hidden"
                            value="this-week"
                            checked={date === 'this-week'}
                            onChange={e => setDate(e.target.value)}
                            label="Esta Semana"
                        />
                        <div className="grid w-full grid-cols-2 gap-gg">
                            <div className="col-span-1">
                                <input
                                    className="w-full border-grey-3 rounded-button block"
                                    min={minDate}
                                    value={startDate}
                                    onChange={e => {
                                        setDate('other')
                                        setStartDate(e.target.value)
                                    }}
                                    id="min-date"
                                    name="min-date"
                                    type="date"
                                />
                            </div>
                            <div className="col-span-1">
                                <input
                                    className="w-full border-grey-3 rounded-button block"
                                    min={minDate}
                                    value={endDate}
                                    onChange={e => {
                                        setDate('other')
                                        setEndDate(e.target.value)
                                    }}
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
                    indicator={`${getMinPriceLabel(priceValue)}${getMaxPriceLabel(priceValue)}`}>
                    <div className="flex flex-wrap gap-x-3 gap-y-2 w-full px-12 pt-10">
                        <input
                            id="precio-other"
                            name="price"
                            className="peer hidden"
                            value="other"
                            type="radio"
                        />
                        <div className="w-full">
                            <Box sx={{ width: '100%' }}>
                                <Slider
                                    getAriaLabel={() => 'Rango de precios'}
                                    aria-label="Always visible"
                                    valueLabelDisplay="on"
                                    step={5}
                                    valueLabelFormat={value => {
                                        if (
                                            priceValue[0] === 0 &&
                                            priceValue[1] === 0
                                        )
                                            return 'Gratis'
                                        if (
                                            priceValue[0] === 105 &&
                                            priceValue[1] === 105
                                        )
                                            return '$100k+'

                                        if (value === 0) return 'Gratis'
                                        if (value === 105) return 'Sin limite'

                                        return `$${value}k`
                                    }}
                                    value={priceValue}
                                    min={0}
                                    max={105}
                                    onChange={e => {
                                        setPriceValue(e.target.value)
                                    }}
                                    getAriaValueText={() => {
                                        if (
                                            priceValue[0] === 0 &&
                                            priceValue[1] === 0
                                        )
                                            return 'Gratis'
                                        if (
                                            priceValue[0] === 105 &&
                                            priceValue[1] === 105
                                        )
                                            return '$100k+'

                                        const min =
                                            priceValue[0] === 0
                                                ? 'Gratis'
                                                : `$${priceValue[0]}k`
                                        const max =
                                            priceValue[1] === 105
                                                ? '+'
                                                : ` - $${priceValue[1]}k`
                                        return `${min}${max}`
                                    }}
                                />
                            </Box>
                        </div>
                    </div>
                </FilterSection>
            </div>
        </form>
    )
}

export const DateRadio = ({ id, name, value, checked, onChange, label }) => {
    return (
        <div>
            <input
                id={id}
                name={name}
                value={value}
                className="peer hidden"
                checked={checked}
                type="radio"
                onChange={onChange}
            />
            <label
                className="block text-caps peer-checked:bg-black border-grey border peer-checked:text-white bg-white py-2 px-3 rounded-button"
                htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export const FilterSection = ({ children, legend, indicator }) => {
    return (
        <fieldset className="block border-t border-black/20 py-4 mx-4 first:mt-4">
            <div className="flex items-end w-full gap-2 pb-4">
                {legend && (
                    <legend className="text-black/80 text-caps uppercase">
                        {legend}
                    </legend>
                )}
                {indicator && <span className="text-h3">{indicator}</span>}
            </div>
            {children}
        </fieldset>
    )
}

// export const FilterFieldset = ({ legend, name, options }) => {
//     ;<fieldset className="flex flex-col">
//         <legend className="text-caps text-black/80 uppercase pb-gg">
//             Precio
//         </legend>
//         <div className="flex flex-wrap gap-x-3 gap-y-2">
//             <div>
//                 <input
//                     id="price-free"
//                     name="price"
//                     className="peer hidden"
//                     type="radio"
//                 />
//                 <label
//                     className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
//                     htmlFor="price-free">
//                     Gratis
//                 </label>
//             </div>
//             <input
//                 id="precio-other"
//                 name="price"
//                 className="peer hidden"
//                 value="other"
//                 type="radio"
//             />
//         </div>
//     </fieldset>
// }
