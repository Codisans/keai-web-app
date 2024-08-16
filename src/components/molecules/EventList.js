import Link from 'next/link'
import { Price } from '../atoms/Price'
import { DateTime } from '../atoms/DateTime'

const EventList = ({ events }) => {
    return (
        <ul className="w-full flex flex-col">
            {events.map((event, i) => (
                <li className="w-full border-t border-grey-2 py-gutter" key={i}>
                    <div className="grid grid-cols-12 gap-gutter relative group/card w-full">
                        <div className="col-start-1 col-end-4 aspect-square relative rounded-card overflow-hidden">
                            <img
                                className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform ease-in-out duration-500"
                                src={event.cover}
                            />
                        </div>
                        <div className="col-start-4 col-end-13 flex flex-col">
                            <div className="flex flex-nowrap gap-gutter justify-between">
                                <h3 className="text-h3 pb-2">{event.name}</h3>
                                <Price
                                    className="font-small text-grey-4"
                                    value={event.price}
                                />
                            </div>
                            <div className="grow flex flex-nowrap gap-gutter justify-between">
                                <div className="w-max">
                                    <span className="pb-2 text-grey-4 uppercase text-caps tracking-wide">
                                        {event.province}
                                    </span>

                                    <div className="flex flex-col">
                                        <DateTime date={event.start_date} />
                                        <DateTime
                                            date={event.start_date}
                                            type="time"
                                        />
                                    </div>
                                </div>
                                <div className="grow col-span-12 mt-auto text-caps uppercase">
                                    <ul className="flex flex-wrap items-end justify-end gap-1">
                                        {event.tags?.map((tag, i) => (
                                            <li
                                                key={i}
                                                className="block w-max text-nowrap py-0.5 px-1.5 bg-grey-4 text-white rounded">
                                                {tag.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <Link
                            href={`/evento/${event.id}`}
                            className="absolute inset-0"></Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default EventList
