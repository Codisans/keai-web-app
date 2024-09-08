'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import EventCard from '../atoms/EventCard'

export const EventCarousel = ({ heading, events, className = '' }) => {
    const items = Array.isArray(events) ? events : [events]

    if (items == null) return

    return (
        <div className={`${className} py-4 flex flex-col gap-y-gg`}>
            {heading && <h2 className="px-gg text-h1">{heading}</h2>}

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
