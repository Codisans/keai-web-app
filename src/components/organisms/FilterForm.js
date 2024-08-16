'use client'

import { useContext, useEffect, useState, useRef } from 'react'
import { UiContext } from '@/app/AppContext'
import { RadioButton } from '../atoms/RadioButton'
import { getTags } from '@/api/getTags'
import { Button } from '../atoms/Button'

export const FilterForm = ({ tagOptions }) => {
    const { filterIsOpen, setFilterIsOpen } = useContext(UiContext)
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

    useEffect(() => {
        console.log(tags)
    }, [])

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
            <div className="w-full flex flex-col gap-gutter p-gutter">
                <fieldset className="flex flex-col shrink">
                    <legend>Fechas</legend>
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        <label>
                            <input className="" type="radio" /> Hoy
                        </label>
                        <RadioButton label="Hoy" />
                        <label>
                            <input type="radio" /> Este FDS
                        </label>
                        <label>
                            <input type="radio" /> Esta semana
                        </label>
                        <label>
                            <input className="peer" type="radio" /> Otro
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
                            <input type="checkbox" /> Gratis
                        </label>
                        <label>
                            <input type="checkbox" /> hasta $10k
                        </label>
                        <label>
                            <input type="checkbox" /> $10k - $20k
                        </label>
                        <label>
                            <input type="checkbox" /> $20k - $50k
                        </label>
                        <label>
                            <input type="checkbox" /> $50k - $100k
                        </label>
                        <label>
                            <input type="checkbox" /> mas de £100k
                        </label>
                    </div>
                </fieldset>
                <fieldset className="flex flex-col">
                    <legend>Tags</legend>
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        <label>
                            <input type="checkbox" /> Tag 1
                        </label>
                        <label>
                            <input type="checkbox" /> Tag 2
                        </label>
                        <label>
                            <input type="checkbox" /> Tag 3
                        </label>
                        <label>
                            <input type="checkbox" /> Tag 4
                        </label>
                        <label>
                            <input type="checkbox" /> Tag 5
                        </label>
                        <label>
                            <input type="checkbox" /> Tag 6
                        </label>
                    </div>
                </fieldset>
            </div>
        </form>
    )
}
