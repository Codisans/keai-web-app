'use client'

import { useContext } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { RadioButton } from '../atoms/RadioButton'
import { getTags } from '@/api/getTags'
import { Button } from '../atoms/Button'
import { TagSearch } from '../molecules/TagSearch'

export const FilterForm = () => {
    const { filterIsOpen, setFilterIsOpen } = useContext(ConsumerContext)
    const minDate = new Date().toISOString().split('T')[0]
    // const formRef = useRef(null)

    // const [price, setPrice] = useState(null)
    // const [dates, setDates] = useState(null)
    // const [tags, setTags] = useState([])

    // const tags = await getTags()

    const handleSubmit = () => {
        console.log('submit filter form')
    }

    const handleClear = () => {
        setPrice(null)
        setDates(null)
        setTags([])
        console.log('clear filters')
    }

    return (
        <form className="relative h-full overflow-y-auto select-none">
            <div className="flex justify-between sticky top-0 w-full p-gutter bg-white shadow">
                <p className="text-h2">Filtros:</p>
                <div className="flex gap-gutter">
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
            <div className="w-full flex flex-col gap-6 p-gutter">
                <fieldset className="flex flex-col">
                    <legend className="text-caps text-black/80 uppercase pb-gutter">
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
                        <div className="hidden peer-checked:grid w-full grid-cols-2 gap-gutter">
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
                    <legend className="text-caps text-black/80 uppercase pb-gutter">
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
                    <legend className="text-caps text-black/80 uppercase pb-gutter">
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
