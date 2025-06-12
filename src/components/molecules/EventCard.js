import { DateTime } from '../atoms/DateTime'
import Link from 'next/link'
import { SaveEventButton } from '../atoms/SaveEventButton'
import { RemoveEventButton } from '../atoms/RemoveEventButton'

export const EventCard = ({
    event,
    type = 'carousel',
    toggle = true,
    remove = false,
    showPrice = false,
    showTags = true,
    loading = 'lazy',
}) => {
    if (!event) return null

    switch (type) {
        case 'carousel':
            return (
                <div className="flex flex-col h-full relative w-full rounded-card overflow-hidden shadow-card">
                    <div className="w-full aspect-[16/9] relative overflow-hidden">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src={event.cover || '/images/placeholder.jpg'}
                            loading={loading}
                        />
                    </div>
                    <div className="flex flex-col gap-y-1.5 px-2 py-1.5">
                        <div className="flex flex-row gap-x-4 text-xs typo-date text-gray-500">
                            <DateTime date={event.start_date} />
                            <span className="text-theme">•</span>
                            <DateTime date={event.start_date} format="time" />
                        </div>
                        <h3 className="typo-lg w-full text-nowrap overflow-hidden text-ellipsis pr-1">
                            {event.name}
                        </h3>

                        {showPrice && (
                            <p className="typo-caps">Desde: $ {event.price}</p>
                        )}
                        {showTags && <EventTags tags={event.tags} />}
                    </div>
                    <Link
                        href={`/evento/${event.id}`}
                        className="absolute inset-0">
                        <span className="sr-only">{event.name}</span>
                    </Link>
                    {toggle && !remove && (
                        <SaveEventButton
                            className="absolute mix-blend-difference p-1 top-0 z-10 right-0 text-white"
                            eventId={event.id}
                        />
                    )}
                    {remove && (
                        <RemoveEventButton
                            className="absolute mix-blend-difference bottom-0 z-10 right-1 text-white"
                            eventId={event.id}
                        />
                    )}
                </div>
            )
        case 'list':
            return (
                <div className="grid grid-cols-12 gap-grid relative group/card w-full">
                    <div className="relative aspect-[16/9] col-span-4 overflow-hidden rounded-card">
                        <img
                            className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform ease-in-out duration-500"
                            src={event.cover || '/images/placeholder.jpg'}
                            loading={loading}
                        />
                    </div>
                    <div className="col-span-8 flex flex-col">
                        <div className="flex flex-row gap-x-4 text-xs typo-date text-gray-500">
                            <DateTime date={event.start_date} />
                            <span className="text-theme">•</span>
                            <DateTime date={event.start_date} format="time" />
                        </div>
                        <h3 className="typo-regular text-md py-1.5 pr-5">
                            {event.name.length > 42
                                ? `${event.name.slice(0, 40)}...`
                                : event.name}
                        </h3>
                        {showPrice && <p className="text-sm">${event.price}</p>}
                        {showTags && <EventTags tags={event.tags} />}
                    </div>
                    <Link
                        href={`/evento/${event.id}`}
                        className="absolute inset-0">
                        <span className="sr-only">{event.name}</span>
                    </Link>
                    {toggle && !remove && (
                        <SaveEventButton
                            className="absolute -top-2 p-2 z-10 -right-2 text-black"
                            eventId={event.id}
                        />
                    )}
                    {remove && (
                        <RemoveEventButton
                            className="absolute -bottom-2 p-1 z-10 -right-1 text-black"
                            eventId={event.id}
                        />
                    )}
                </div>
            )
    }
}

export const EventTags = ({ tags }) => {
    if (!tags || tags.length == 0) return

    return (
        <ul className="flex flex-wrap gap-1 overflow-hidden max-h-[2.5rem] items-start">
            {tags.map(tag => (
                <li key={tag.id} className="tag-sm">
                    {tag.name}
                </li>
            ))}
        </ul>
    )
}
