import { EventListing } from './EventListing'

export const metadata = {
    title: 'keai | Eventos',
}

const Events = async props => {
    const searchParams = await props.searchParams

    return (
        <>
            <EventListing searchParams={searchParams} />
        </>
    )
}

export default Events
