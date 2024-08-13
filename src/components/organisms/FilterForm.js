'use client'

import { useContext, useEffect } from 'react'
import { MapContext } from '@/app/(app)/AppContext'
import { RadioButton } from '../atoms/RadioButton'
import { getTags } from '@/api/getTags'

export const FilterForm = () => {
    const { filterIsOpen, setFilterIsOpen } = useContext(MapContext)
    const tags = getTags()

    const handleSubmit = () => {
        console.log('submit filter form')
    }

    const handleClear = () => {
        console.log('clear filters')
    }

    useEffect(() => {
        console.log(tags)
    }, [])

    return (
        <form className="flex flex-col gap-gutter">
            <h2 text="text-caps uppercase">Filtros:</h2>
            <fieldset className="flex flex-col">
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
                    <input className="hidden peer-checked:block" type="range" />
                </div>
            </fieldset>
            <fieldset className="flex flex-col">
                <legend>Categorias</legend>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                    <label>
                        <input type="checkbox" /> Category 1
                    </label>
                    <label>
                        <input type="checkbox" /> Category 2
                    </label>
                    <label>
                        <input type="checkbox" /> Category 3
                    </label>
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
        </form>
    )
}
