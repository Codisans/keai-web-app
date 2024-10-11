'use client'

import dynamic from 'next/dynamic'
// import { AppContext } from '@/app/AppContext'
// import { useContext } from 'react'

const LeafletMap = dynamic(() => import('./LeafletMap.js'), { ssr: false })

export const Map = ({ children }) => {
    // const { isClient } = useContext(AppContext)

    return <LeafletMap>{children}</LeafletMap>
}
