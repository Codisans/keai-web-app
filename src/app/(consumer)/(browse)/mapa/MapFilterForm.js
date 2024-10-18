'use client'

import { useContext, useRef } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { Button } from '@/components/atoms/Button'

// const filterOptions = [
//     {
//         name: 'date',
//         legend: 'Fechas',
//         options: [
//             {
//                 id: 'today',
//                 label: 'Hoy',
//                 value: [null, new Date()],
//             },
//             {
//                 id: 'this-weekend',
//                 label: 'Este fds',
//                 value: [new Date(), new Date()],
//             },
//             {
//                 id: 'this-week',
//                 label: 'Esta semana',
//                 value: [new Date(), new Date()],
//             },
//             {
//                 id: 'other',
//                 label: 'Otro',
//                 value: [null, null],
//             },
//         ],
//     },
//     {
//         name: 'price',
//         legend: 'Precio',
//         options: [
//             {
//                 id: 'free',
//                 label: 'Gratis',
//                 value: [null, 0],
//             },
//             {
//                 id: '0-10k',
//                 label: 'Hasta 10k',
//                 value: [0, 10000],
//             },
//             {
//                 id: '10k-25k',
//                 label: '$10k - $25k',
//                 value: [10000, 25000],
//             },
//             {
//                 id: '25k-60k',
//                 label: '$25k - $60k',
//                 value: [25000, 60000],
//             },
//             {
//                 id: '60k-plus',
//                 label: '$60k+',
//                 value: [60000, null],
//             },
//         ],
//     },
// ]

export const MapFilterForm = () => {
    const { setFilterIsOpen } = useContext(ConsumerContext)
    const minDate = new Date().toISOString().split('T')[0]
    const formRef = useRef(null)

    // const [price, setPrice] = useState([null, null])
    // const [dates, setDates] = useState([null, null])
    // const [tags, setTags] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submit filter form')
    }

    const handleChange = e => {
        const { name, value } = e.target
        console.log('change filter form', name, value)
    }

    const handleClear = () => {
        setPrice([null, null])
        setDates([null, null])
        // setTags([])
        console.log('clear filters')
    }

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            onChange={handleChange}
            className="relative h-full overflow-y-auto select-none">
            <div className="flex justify-between sticky top-0 w-full p-gg bg-white shadow">
                <p className="text-h2">Filtros:</p>
                <div className="flex gap-gg">
                    <Button type="button" onClick={handleClear}>
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
                <fieldset className="flex flex-col">
                    <legend className="text-caps text-black/80 uppercase pb-gg">
                        Fechas
                    </legend>
                    <div className="flex flex-wrap gap-x-3 gap-y-2">
                        <div>
                            <input
                                id="date-hoy"
                                name="date"
                                value={new Date().toISOString().split('T')[0]}
                                className="peer hidden"
                                type="radio"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="date-hoy">
                                Hoy
                            </label>
                        </div>
                        <div>
                            <input
                                id="date-fds"
                                name="date"
                                className="peer hidden"
                                type="radio"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="date-fds">
                                Este fds
                            </label>
                        </div>
                        <div>
                            <input
                                id="date-semana"
                                name="date"
                                className="peer hidden"
                                type="radio"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="date-semana">
                                Esta semana
                            </label>
                        </div>
                        <input
                            id="date-otro"
                            name="date"
                            className="peer hidden"
                            type="radio"
                        />
                        <label
                            className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                            htmlFor="date-otro">
                            Otro
                        </label>
                        <div className="hidden peer-checked:grid w-full grid-cols-2 gap-gg">
                            <div className="col-span-1">
                                <input
                                    className="w-full border-grey-3 rounded-button block"
                                    min={minDate}
                                    id="min-date"
                                    name="min-date"
                                    type="date"
                                />
                            </div>
                            <div className="col-span-1">
                                <input
                                    className="w-full border-grey-3 rounded-button block"
                                    min={minDate}
                                    id="max-date"
                                    name="max-date"
                                    type="date"
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="flex flex-col">
                    <legend className="text-caps text-black/80 uppercase pb-gg">
                        Precio
                    </legend>
                    <div className="flex flex-wrap gap-x-3 gap-y-2">
                        <div>
                            <input
                                id="precio-0"
                                name="price"
                                className="peer hidden"
                                type="radio"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="precio-0">
                                Gratis
                            </label>
                        </div>
                        <div>
                            <input
                                id="precio-1"
                                name="price"
                                className="peer hidden"
                                type="radio"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="precio-1">
                                Hasta 10k
                            </label>
                        </div>
                        <div>
                            <input
                                id="precio-2"
                                name="price"
                                className="peer hidden"
                                type="radio"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="precio-2">
                                $10k - $25k
                            </label>
                        </div>
                        <div>
                            <input
                                id="precio-3"
                                name="price"
                                className="peer hidden"
                                type="radio"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="precio-3">
                                $25k - $60k
                            </label>
                        </div>
                        <div>
                            <input
                                id="precio-4"
                                name="price"
                                className="peer hidden"
                                type="radio"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="precio-4">
                                $60k+
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </form>
    )
}
