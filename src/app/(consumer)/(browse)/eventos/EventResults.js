import Link from 'next/link'
import { Price } from '@/components/atoms/Price'
import { DateTime } from '@/components/atoms/DateTime'

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
                    <li className="w-full border-t border-grey-2 py-gg" key={i}>
                        <div className="grid grid-cols-12 gap-gg relative group/card w-full">
                            <div className="col-start-1 col-end-4 aspect-square relative rounded-card overflow-hidden">
                                <img
                                    className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform ease-in-out duration-500"
                                    src={event.cover}
                                />
                            </div>
                            <div className="col-start-4 col-end-13 flex flex-col">
                                <div className="grow flex flex-col">
                                    <h3 className="text-h3 pb-2">
                                        {event.name}
                                    </h3>
                                    <span className="pb-2 text-grey-4 uppercase text-caps tracking-wide">
                                        {event.province}
                                    </span>
                                    <DateTime date={event.start_date} />
                                    <DateTime
                                        date={event.start_date}
                                        format="time"
                                    />
                                    <Price
                                        className="font-small text-grey-4"
                                        value={event.price}
                                    />
                                </div>
                            </div>

                            <Link
                                href={`/evento/${event.id}`}
                                className="absolute inset-0">
                                <span className="sr-only">{event.name}</span>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
