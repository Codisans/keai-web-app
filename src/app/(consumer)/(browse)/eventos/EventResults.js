import { EventCard } from '@/components/molecules/EventCard'

export const EventResults = ({ events }) => {
    if (!events) return null

    return (
        <div className="container">
            <div className="px-1 py-0.5 bg-black/20 rounded flex justify-center">
                <span className="tex-pre">
                    {events.length} Resultado{events.length === 1 ? '' : 's'}
                </span>
            </div>
            <ul className="w-full flex flex-col pt-4">
                {events?.map((event, i) => (
                    <li
                        className="w-full border-t border-grey first:border-t-0 py-grid-gap"
                        key={i}>
                        <EventCard type="list" event={event} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
