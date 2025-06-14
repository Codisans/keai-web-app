import { EventListing } from './EventListing'

export const metadata = {
    title: 'KEAI | Eventos',
}

const Events = async props => {
    const searchParams = await props.searchParams;

    return (
        <>
            <EventListing searchParams={searchParams} />
        </>
    )
}

export default Events
