import { EventsLayer } from './EventsLayer'

export const metadata = {
    title: 'KEAI | Mapa',
}

const MapPage = async props => {
    const searchParams = await props.searchParams;
    return (
        <>
           <EventsLayer searchParams={await searchParams} />
        </>
    )
}

export default MapPage
