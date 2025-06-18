import { EventsLayer } from './EventsLayer'

export const metadata = {
    title: 'keai | Mapa',
}

const MapPage = async props => {
    const searchParams = await props.searchParams
    return (
        <>
            <EventsLayer searchParams={await searchParams} />
        </>
    )
}

export default MapPage
