import Link from 'next/link'
import { DateTime } from '../atoms/DateTime'

export const EventListItem = props => {
    const { event } = props

    return (
        <div className="grid grid-cols-12 gap-grid relative group/card w-full">
            <div className="col-span-4 aspect-[16/9] relative rounded-card overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform ease-in-out duration-500"
                    src={event.cover}
                />
            </div>
            <div className="col-span-8 flex flex-col">
                <h3 className="typo-h4">{event.name}</h3>
                <DateTime date={event.start_date} />
                <p className="text-small">${event.price}</p>
            </div>
            <Link
                href={`/evento/${event.id}`}
                className="absolute inset-0"></Link>
        </div>
    )
}
