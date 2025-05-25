import { EventsLayer } from './EventsLayer'

export const metadata = {
    title: 'KEAI | Mapa',
}

const MapPage = async ({ searchParams }) => {
    return (
        <>
           <EventsLayer searchParams={await searchParams} />
        </>
    )
}

export default MapPage
