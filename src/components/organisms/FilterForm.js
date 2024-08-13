'use client'

import { useContext, useEffect } from 'react'
import { MapContext } from '@/app/(app)/AppContext'
import { RadioButton } from '../atoms/RadioButton'
import { getTags } from '@/api/getTags'
import { Button } from '../atoms/Button'

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
        <form className="flex flex-col gap-gutter relative">
            <div className="flex justify-between h-max sticky top-0">
                <p className="text-caps uppercase">Filtros:</p>
                <div className="flex gap-gutter">
                    <Button
                        type="button"
                        onClick={() => console.log('clear filter')}>
                        Restablecer
                    </Button>
                    <Button
                        type="button"
                        onClick={() => setFilterIsOpen(s => !s)}>
                        Aplicar
                    </Button>
                </div>
            </div>
            <div className="flex flex-col shrink overflow-y-auto gap-gutter">
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
            </div>
        </form>
    )
}
