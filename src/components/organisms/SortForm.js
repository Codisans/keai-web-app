'use client'

import { useContext, useEffect } from 'react'
import { RadioButton } from '../atoms/RadioButton'
import { getTags } from '@/api/getTags'

export const SortForm = () => {
    const tags = getTags()

    const handleSubmit = () => {
        console.log('submit filter form')
    }

    const handleClear = () => {
        console.log('clear filters')
    }

    // useEffect(() => {
    //     console.log(tags)
    // }, [])

    return (
        <form className="flex flex-col gap-gutter">
            <h2 text="text-caps uppercase">Ordenar por</h2>
            <fieldset className="flex flex-col">
                <legend>Parametro</legend>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                    <label>
                        <input type="radio" /> Date
                    </label>
                    <label>
                        <input type="radio" /> Price
                    </label>
                    <label>
                        <input type="radio" /> Relevance
                    </label>
                </div>
            </fieldset>
        </form>
    )
}
