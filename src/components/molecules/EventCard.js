import { DateTime } from '../atoms/DateTime'
import Link from 'next/link'

export const EventCard = ({ event, type = 'carousel' }) => {
    if (type === 'carousel')
        return (
            <div className="flex flex-col gap-y-3 relative w-full">
                <div className="w-full aspect-[16/9] relative rounded-card overflow-hidden">
                    <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src={event.cover || '/placeholder.jpg'}
                    />
                </div>
                <div className="">
                    <h3>{event.name}</h3>
                    <p>{event.date}</p>
                    <p>Desde: $ {event.price}</p>
                </div>
                <Link
                    href={`/evento/${event.id}`}
                    className="absolute inset-0"></Link>
            </div>
        )

    if (type === 'list')
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
                    <p className="typo-small">${event.price}</p>
                </div>
                <Link
                    href={`/evento/${event.id}`}
                    className="absolute inset-0"></Link>
            </div>
        )
}
