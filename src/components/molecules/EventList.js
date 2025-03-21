import { EventCard } from './EventCard'

export const EventList = ({ events }) => {
    return (
        <ul className="w-full flex flex-col">
            {events.map((event, i) => (
                <li
                    className="w-full border-t border-grey first:border-t-0 py-grid-gap"
                    key={i}>
                    <EventCard event={event} type="list" />
                </li>
            ))}
        </ul>
    )
}
