import { EventListing } from './EventListing'

export const metadata = {
    title: 'KEAI | Eventos',
}

const Events = ({ searchParams }) => {

    return (
        <>
            <EventListing searchParams={searchParams} />
        </>
    )
}

export default Events
