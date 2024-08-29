import Link from 'next/link'
import { Price } from '@/components/atoms/Price'
import { DateTime } from '@/components/atoms/DateTime'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@/components/atoms/Button'

export const SavedEvents = ({ events }) => {
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
                        <div className="col-start-4 col-end-13 flex flex-row">
                            <div className="grow flex flex-col justify-between">
                                <h3 className="text-h3 pb-2">{event.name}</h3>
                                <span className="pb-2 text-grey-4 uppercase text-caps tracking-wide">
                                    {event.province}
                                </span>
                                <DateTime date={event.start_date} />
                                <DateTime date={event.start_date} type="time" />
                            </div>
                            <div className="flex flex-col items-end gap-gutter justify-between">
                                <Price
                                    className="font-small text-grey-4"
                                    value={event.price}
                                />
                                <Button icon={<DeleteIcon />} />
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
