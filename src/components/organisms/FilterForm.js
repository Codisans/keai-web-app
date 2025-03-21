'use client'

import { useContext } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { Button } from '@/components/atoms/Button'

export const FilterForm = () => {
    const { setFilterIsOpen } = useContext(ConsumerContext)
    const minDate = new Date().toISOString().split('T')[0]
    // const formRef = useRef(null)

    // const [price, setPrice] = useState(null)
    // const [dates, setDates] = useState(null)
    // const [tags, setTags] = useState([])

    // const handleSubmit = () => {
    //     console.log('submit filter form')
    // }

    // const handleClear = () => {
    //     setPrice(null)
    //     setDates(null)
    //     setTags([])
    //     console.log('clear filters')
    // }

    return (
        <form className="relative h-full overflow-y-auto select-none">
            <div className="flex justify-between sticky top-0 w-full p-grid-gap bg-white shadow">
                <p className="text-h2">Filtros:</p>
                <div className="flex gap-grid">
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
            <div className="w-full flex flex-col gap-6 p-grid-gap">
                <fieldset className="flex flex-col">
                    <legend className="text-caps text-black/80 uppercase pb-grid-gap">
                        Fechas
                    </legend>
                    <div className="flex flex-wrap gap-x-3 gap-y-2">
                        <div>
                            <input
                                id="date-hoy"
                                name="date"
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
                        <div className="hidden peer-checked:grid w-full grid-cols-2 gap-grid">
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
                    <legend className="text-caps text-black/80 uppercase pb-grid-gap">
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
                <fieldset className="flex flex-col">
                    <legend className="text-caps text-black/80 uppercase pb-grid-gap">
                        Comuna
                    </legend>
                    <div className="flex flex-wrap gap-x-3 gap-y-2">
                        <div>
                            <input
                                id="comuna-0"
                                name="comuna"
                                className="peer hidden"
                                type="checkbox"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="comuna-0">
                                Centro
                            </label>
                        </div>
                        <div>
                            <input
                                id="comuna-1"
                                name="comuna"
                                className="peer hidden"
                                type="checkbox"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="comuna-1">
                                Providencia
                            </label>
                        </div>
                        <div>
                            <input
                                id="comuna-2"
                                name="comuna"
                                className="peer hidden"
                                type="checkbox"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="comuna-2">
                                Las condes
                            </label>
                        </div>
                        <div>
                            <input
                                id="comuna-3"
                                name="comuna"
                                className="peer hidden"
                                type="checkbox"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="comuna-3">
                                Nunoa
                            </label>
                        </div>
                        <div>
                            <input
                                id="comuna-4"
                                name="comuna"
                                className="peer hidden"
                                type="checkbox"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="comuna-4">
                                Vitacura
                            </label>
                        </div>
                        <div>
                            <input
                                id="comuna-5"
                                name="comuna"
                                className="peer hidden"
                                type="checkbox"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="comuna-5">
                                La reina
                            </label>
                        </div>
                        <div>
                            <input
                                id="comuna-6"
                                name="comuna"
                                className="peer hidden"
                                type="checkbox"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="comuna-6">
                                Lo barnechea
                            </label>
                        </div>
                        <div>
                            <input
                                id="comuna-7"
                                name="comuna"
                                className="peer hidden"
                                type="checkbox"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="comuna-7">
                                Huechuraba
                            </label>
                        </div>
                        <div>
                            <input
                                id="comuna-8"
                                name="comuna"
                                className="peer hidden"
                                type="checkbox"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="comuna-8">
                                Puente Alto
                            </label>
                        </div>
                        <div>
                            <input
                                id="comuna-9"
                                name="comuna"
                                className="peer hidden"
                                type="checkbox"
                            />
                            <label
                                className="block peer-checked:bg-black peer-checked:text-white border border-grey-3 py-2 px-3 rounded-button"
                                htmlFor="comuna-9">
                                La florida
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </form>
    )
}

// import { useContext, useEffect, useState, useRef } from 'react'
// import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
// import { RadioButton } from '../atoms/RadioButton'
// import { Button } from '../atoms/Button'
// import { TagSearch } from '../molecules/TagSearch'

// export const FilterForm = ({ tagOptions }) => {
//     const { filterIsOpen, setFilterIsOpen } = useContext(ConsumerContext)
//     const formRef = useRef(null)

//     const [price, setPrice] = useState(null)
//     const [dates, setDates] = useState(null)
//     const [tags, setTags] = useState([])

//     const handleSubmit = () => {
//         console.log('submit filter form')
//     }

//     const handleClear = () => {
//         setPrice(null)
//         setDates(null)
//         setTags([])
//         console.log('clear filters')
//     }

//     return (
//         <form ref={formRef} className="relative h-full overflow-y-auto">
//             <div className="flex justify-between sticky top-0 w-full p-grid-gap bg-white shadow">
//                 <p className="text-h2">Filtros:</p>
//                 <div className="flex gap-grid">
//                     <Button
//                         type="button"
//                         onClick={() => console.log('clear filter')}>
//                         Restablecer
//                     </Button>
//                     <Button
//                         className="!bg-black text-white"
//                         type="button"
//                         onClick={() => setFilterIsOpen(s => !s)}>
//                         Aplicar
//                     </Button>
//                 </div>
//             </div>
//             <TagSearch options={tagOptions} />
//             <div className="w-full flex flex-col gap-grid p-grid-gap">
//                 <fieldset className="flex flex-col shrink">
//                     <legend>Fechas</legend>
//                     <div className="flex flex-wrap gap-x-3 gap-y-1.5">
//                         <label>
//                             <input name="date" className="" type="radio" /> Hoy
//                         </label>
//                         <RadioButton name="date" value="hoy" label="Hoy" />
//                         <label>
//                             <input name="date" type="radio" /> Este FDS
//                         </label>
//                         <label>
//                             <input name="date" type="radio" /> Esta semana
//                         </label>
//                         <label>
//                             <input name="date" className="peer" type="radio" />
//                             Otro
//                         </label>
//                         <input
//                             className="hidden peer-checked:block"
//                             type="range"
//                         />
//                     </div>
//                 </fieldset>
//                 <fieldset className="flex flex-col">
//                     <legend>Precio</legend>
//                     <div className="flex flex-wrap gap-x-3 gap-y-1.5">
//                         <label>
//                             <input name="price" type="radio" value="0" /> Gratis
//                         </label>
//                         <label>
//                             <input name="price" type="radio" value="0-10" />
//                             hasta $10k
//                         </label>
//                         <label>
//                             <input name="price" type="radio" value="10-20" />
//                             $10k - $25k
//                         </label>
//                         <label>
//                             <input name="price" type="radio" value="25-60" />
//                             $25k - $60k
//                         </label>
//                         <label>
//                             <input name="price" type="radio" value="60+" /> $60k
//                             +
//                         </label>
//                     </div>
//                 </fieldset>
//                 <fieldset className="flex flex-col">
//                     <legend>Comunas</legend>
//                     <div className="flex flex-wrap gap-x-3 gap-y-1.5">
//                         <label>
//                             <input name="price" type="checkbox" value="0" />{' '}
//                             Centro
//                         </label>
//                         <label>
//                             <input name="price" type="checkbox" value="0-10" />
//                             Providencia
//                         </label>
//                         <label>
//                             <input name="price" type="checkbox" value="10-20" />
//                             Las Condes
//                         </label>
//                         <label>
//                             <input name="price" type="checkbox" value="25-60" />
//                             La Reina
//                         </label>
//                         <label>
//                             <input name="price" type="checkbox" value="60+" />
//                             Vitacura
//                         </label>
//                     </div>
//                 </fieldset>
//             </div>
//         </form>
//     )
// }
