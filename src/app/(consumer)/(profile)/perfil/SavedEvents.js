import DeleteIcon from '@mui/icons-material/Delete'
import ShareIcon from '@mui/icons-material/Share'
import { EventCard } from '@/components/molecules/EventCard'

export const SavedEvents = ({ events }) => {
    return (
        <ul className="w-full flex flex-col">
            {events.map((event, i) => (
                <li
                    className="w-full border-t border-grey py-grid-gap first:border-t-0"
                    key={i}>
                    <EventCard event={event} type="list" />
                    <div className="flex items-end gap-grid justify-end text-orange">
                        <button className="p-1">
                            <ShareIcon />
                        </button>
                        <button className="p-1">
                            <DeleteIcon />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
