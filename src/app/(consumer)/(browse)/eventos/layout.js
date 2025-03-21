import { EventsHeader } from './EventsHeader'

const EventsLayout = ({ children }) => {
    return (
        <>
            <EventsHeader />
            <div className="grow">{children}</div>
        </>
    )
}

export default EventsLayout
