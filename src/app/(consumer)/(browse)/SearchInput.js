'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Symbol } from '@/components/atoms/Symbol'

export const SearchInput = () => {
    const [value, setValue] = useState('')
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const handleClear = () => {
        setValue('')
        const urlSearchParams = new URLSearchParams(searchParams)
        urlSearchParams.delete('keywords')
        router.push(`${pathname}?${urlSearchParams.toString()}`)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const urlSearchParams = new URLSearchParams(searchParams)
        urlSearchParams.set('keywords', value)
        router.push(`${pathname}?${urlSearchParams.toString()}`)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="relative bg-white-true h-max grow rounded group pointer-events-auto z-header">
            <input
                className="pl-10 pr-3 h-10 w-full rounded border border-grey peer"
                placeholder="Keai?"
                value={value}
                onChange={e => {
                    setValue(e.target.value)
                }}
                type="text"
            />
            {value === '' && (
                <Symbol
                    className="absolute left-2 top-2 w-6 h-6 pointer-events-none"
                    name="search"
                />
            )}

            {value !== '' && (
                <>
                    <button
                        type="button"
                        className="absolute left-0 top-0 p-2"
                        onClick={handleClear}>
                        <span className="sr-only">Clear</span>
                        <Symbol className="w-6 h-6" name="cross" />
                    </button>

                    {value != searchParams.get('keywords') && (
                        <button
                            type="submit"
                            className="absolute right-0 m-1 py-1 px-1.5 bg-orange rounded">
                            <span className="sr-only">Search</span>
                            <Symbol className="w-6 h-6" name="arrow-right" />
                        </button>
                    )}
                </>
            )}
        </form>
    )
}
