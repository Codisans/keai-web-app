'use client'

import { FilterToggle } from '@/components/atoms/FilterToggle'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useContext, useState } from 'react'
import { ConsumerContext } from '../../ConsumerContext'

export const SearchBar = () => {
    const { filterIsOpen, setFilterIsOpen } = useContext(ConsumerContext)
    return (
        <section className="w-full border-b border-grey-3">
            <div className="flex gap-x-1 p-gg pb-1">
                <SearchInput />
                <div className="w-min">
                    <FilterToggle
                        isOpen={filterIsOpen}
                        setIsOpen={setFilterIsOpen}
                    />
                </div>
            </div>
        </section>
    )
}

export const SearchInput = () => {
    const [value, setValue] = useState('')
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const handleClear = () => {
        setValue('')
        const urlSearchParams = new URLSearchParams(searchParams)
        urlSearchParams.delete('keywords')
        router.push(`${pathname}?${urlSearchParams.toString()}`)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (value === '') return
        const urlSearchParams = new URLSearchParams(searchParams)
        urlSearchParams.set('keywords', value)
        router.push(`${pathname}?${urlSearchParams.toString()}`)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-x-1 grow relative">
            <input
                className="px-3 h-10 w-full rounded-button border border-grey-3"
                placeholder="Keai?"
                value={value}
                onChange={e => setValue(e.target.value)}
                type="text"
            />
            {value !== '' && (
                <button
                    type="button"
                    className="absolute right-8 p-2"
                    onClick={handleClear}>
                    <span className="sr-only">Clear</span>
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18 17.94 6M18 18 6.06 6"
                        />
                    </svg>
                </button>
            )}

            <button type="submit" className="absolute right-0 p-2">
                <span className="sr-only">Search</span>
                <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                </svg>
            </button>
        </form>
    )
}
