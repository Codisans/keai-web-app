'use client'
import { useContext, useEffect, useState, useRef } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { RadioButton } from '../atoms/RadioButton'
import { getTags } from '@/api/getTags'
import { Button } from '../atoms/Button'
import { TagSearch } from '../molecules/TagSearch'

export const FilterForm = ({ tagOptions }) => {
    const { filterIsOpen, setFilterIsOpen } = useContext(ConsumerContext)
    const formRef = useRef(null)

    const [price, setPrice] = useState(null)
    const [dates, setDates] = useState(null)
    const [tags, setTags] = useState([])

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
        <form ref={formRef} className="relative h-full overflow-y-auto">
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
            <TagSearch options={tagOptions} />
            <div className="w-full flex flex-col gap-gutter p-gutter">
                <fieldset className="flex flex-col shrink">
                    <legend>Fechas</legend>
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        <label>
                            <input name="date" className="" type="radio" /> Hoy
                        </label>
                        <RadioButton name="date" value="hoy" label="Hoy" />
                        <label>
                            <input name="date" type="radio" /> Este FDS
                        </label>
                        <label>
                            <input name="date" type="radio" /> Esta semana
                        </label>
                        <label>
                            <input name="date" className="peer" type="radio" />
                            Otro
                        </label>
                        <input
                            className="hidden peer-checked:block"
                            type="range"
                        />
                    </div>
                </fieldset>
                <fieldset className="flex flex-col">
                    <legend>Precio</legend>
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        <label>
                            <input name="price" type="radio" value="0" /> Gratis
                        </label>
                        <label>
                            <input name="price" type="radio" value="0-10" />
                            hasta $10k
                        </label>
                        <label>
                            <input name="price" type="radio" value="10-20" />
                            $10k - $25k
                        </label>
                        <label>
                            <input name="price" type="radio" value="25-60" />
                            $25k - $60k
                        </label>
                        <label>
                            <input name="price" type="radio" value="60+" /> $60k
                            +
                        </label>
                    </div>
                </fieldset>
                <fieldset className="flex flex-col">
                    <legend>Comunas</legend>
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        <label>
                            <input name="price" type="checkbox" value="0" />{' '}
                            Centro
                        </label>
                        <label>
                            <input name="price" type="checkbox" value="0-10" />
                            Providencia
                        </label>
                        <label>
                            <input name="price" type="checkbox" value="10-20" />
                            Las Condes
                        </label>
                        <label>
                            <input name="price" type="checkbox" value="25-60" />
                            La Reina
                        </label>
                        <label>
                            <input name="price" type="checkbox" value="60+" />
                            Vitacura
                        </label>
                    </div>
                </fieldset>
            </div>
        </form>
    )
}
