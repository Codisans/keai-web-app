import Link from 'next/link'
import { Price } from '@/components/atoms/Price'
import { DateTime } from '@/components/atoms/DateTime'
import DeleteIcon from '@mui/icons-material/Delete'
import ShareIcon from '@mui/icons-material/Share'
import { Button } from '@/components/atoms/Button'

export const SavedEvents = ({ events }) => {
    return (
        <ul className="w-full flex flex-col">
            {events.map((event, i) => (
                <li
                    className="w-full border-t border-grey-2 py-grid-gap"
                    key={i}>
                    <div className="grid grid-cols-12 gap-grid relative group/card w-full">
                        <div className="col-start-1 col-end-4 aspect-square relative rounded-card overflow-hidden">
                            <img
                                className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform ease-in-out duration-500"
                                src={event.cover}
                            />
                        </div>
                        <div className="col-start-4 col-end-13 flex flex-col">
                            <div className="grow flex flex-col">
                                <h3 className="text-h3 pb-2">{event.name}</h3>
                                <span className="pb-2 text-grey-4 uppercase text-caps tracking-wide">
                                    {event.province}
                                </span>
                                <DateTime date={event.start_date} />
                                <DateTime date={event.start_date} type="time" />
                                <Price
                                    className="font-small text-grey-4"
                                    value={event.price}
                                />
                            </div>
                            <div className="flex items-end gap-grid justify-end">
                                <Button icon={<ShareIcon />} />
                                <Button icon={<DeleteIcon />} />
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
    )
}
