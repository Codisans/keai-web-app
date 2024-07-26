'use client'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import EventCard from './EventCard'

export const EventCarousel = ({ heading, events, className = '' }) => {
    if (events == null) return

    return (
        <div className={`${className} flex flex-col gap-y-gutter`}>
            {heading && <h2 className="px-gutter text-h1">{heading}</h2>}

            <Swiper
                freeMode={true}
                slidesPerView="auto"
                modules={[FreeMode]}
                spaceBetween={12}
                className="w-full px-gutter">
                {events.map((event, i) => (
                    <SwiperSlide className="w-max" key={i}>
                        <EventCard event={event} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
