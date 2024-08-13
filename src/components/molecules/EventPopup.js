'use client'
import kebabCase from '@/utils/kebabCase'

export const EventPopup = () => {
    return (
        <div className="flex flex-col relative group/card w-64 bg-grey-light overflow-hidden rounded-2xl">
            <div className="w-full aspect-[1/1] relative overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform ease-in-out duration-500"
                    src={event.cover}
                />
            </div>
            <div className="py-4 px-3">
                <h3>{event.name}</h3>
                <p>{event.date}</p>
                <p>Desde: $ {event.price}</p>
            </div>
            <a
                href={`/eventos/${kebabCase(event.name)}`}
                className="absolute inset-0"></a>
        </div>
    )
}
