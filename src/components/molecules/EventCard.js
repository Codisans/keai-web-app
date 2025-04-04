import { DateTime } from '../atoms/DateTime'
import Link from 'next/link'
import { SaveEventButton } from '../atoms/SaveEventButton'
import { CategoryColorBar } from '../atoms/CategoryColorBar'

export const EventCard = ({ event, type = 'carousel' }) => {
    console.log(event)
    if (type === 'carousel')
        return (
            <div className="flex flex-col relative w-full">
                <div className="w-full overflow-hidden rounded">
                    <div className="w-full aspect-[16/9] relative overflow-hidden">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src={event.cover || '/images/placeholder.jpg'}
                        />
                    </div>
                    <CategoryColorBar categories={event.categories} />
                </div>
                <div className="flex flex-col pt-1">
                    <h3 className="typo-h5">{event.name}</h3>
                    <ul className="flex flex-wrap gap-x-2">
                        {/* {event.tags.map(tag => (
                            <li key={tag} className="tag">
                                {tag}
                            </li>
                        ))} */}
                    </ul>
                    <DateTime className="typo-caps" date={event.start_date} />

                    {/* <p className="typo-caps">Desde: $ {event.price}</p> */}
                </div>
                <Link
                    href={`/evento/${event.id}`}
                    className="absolute inset-0"></Link>
                <SaveEventButton
                    className="absolute top-1 z-10 right-1"
                    eventId={event.id}
                />
            </div>
        )

    if (type === 'list')
        return (
            <div className="grid grid-cols-12 gap-grid relative group/card w-full">
                <div className="col-span-4 relative">
                    <div className="relative rounded-card overflow-hidden aspect-[16/9] w-full">
                        <img
                            className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform ease-in-out duration-500"
                            src={event.cover || '/placeholder.jpg'}
                        />
                    </div>
                    <CategoryColorBar categories={event.categories} />
                </div>
                <div className="col-span-8 flex flex-col">
                    <h3 className="typo-h4">{event.name}</h3>
                    <DateTime date={event.start_date} />
                    {/* <p className="typo-small">${event.price}</p> */}
                </div>
                <Link
                    href={`/evento/${event.id}`}
                    className="absolute inset-0"></Link>
                <SaveEventButton
                    className="absolute top-1 z-10 right-1"
                    eventId={event.id}
                />
            </div>
        )
}
