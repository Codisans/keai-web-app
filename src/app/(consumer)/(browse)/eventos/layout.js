import { EventsHeader } from './EventsHeader'

const EventsLayout = ({ children }) => {
    return (
        <>
            <EventsHeader />
            {children}
        </>
    )
}

export default EventsLayout
