'use client'

import { useEffect } from 'react'

export const TestBlock = ({ data }) => {
    useEffect(() => {
        console.log(data)
    }, [data])

    return <></>
}
