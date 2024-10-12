'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

export const EventCarousel = ({ heading, events, className = '' }) => {
    if (!events) return

    const items = Array.isArray(events) ? events : [events]

    if (items?.length == 0) return

    return (
        <div className={`${className} flex flex-col gap-y-gg`}>
            {heading && <h2 className="px-gutter typo-pre">{heading}</h2>}

            <Swiper slidesPerView="auto" className="w-full px-gutter">
                {items?.map((event, i) => (
                    <SwiperSlide
                        key={i}
                        className="pr-3 last:pr-0"
                        style={{ width: '16rem' }}>
                        <EventCard event={event} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export const EventCard = props => {
    const { event } = props

    return (
        <div className="flex flex-col gap-y-3 relative w-full">
            <div className="w-full aspect-[16/9] relative rounded-card overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover scale-110 active-slide:scale-100 transition-transform ease-in-out duration-500"
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
}
