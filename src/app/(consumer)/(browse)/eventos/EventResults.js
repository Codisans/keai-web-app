import { EventListItem } from '@/components/molecules/EventListItem'

export const EventResults = ({ events }) => {
    return (
        <div className="px-gutter">
            <div className="px-1 py-0.5 bg-black/20 rounded flex justify-center">
                <span className="tex-pre">
                    {events.length} Resultado{events.length === 1 ? '' : 's'}
                </span>
            </div>
            <ul className="w-full flex flex-col pt-4">
                {events.map((event, i) => (
                    <li
                        className="w-full border-t border-grey first:border-t-0 py-grid-gap"
                        key={i}>
                        <EventListItem event={event} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
