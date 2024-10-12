'use client'
import dynamic from 'next/dynamic'

const LeafletMap = dynamic(() => import('./LeafletMap.js'), { ssr: false })

export const Map = ({ children }) => {
    return <LeafletMap>{children}</LeafletMap>
}
