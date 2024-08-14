'use client'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import EventCard from './EventCard'
import { useEffect } from 'react'

export const EventCarousel = ({ heading, events, className = '' }) => {
    useEffect(() => {
        console.log(events)
    }, [])

    return (
        <div className={`${className} flex flex-col gap-y-gutter`}>
            {heading && <h2 className="px-gutter text-h1">{heading}</h2>}

            <Swiper
                freeMode={true}
                slidesPerView="auto"
                modules={[FreeMode]}
                spaceBetween={12}
                className="w-full px-gutter">
                {events?.map((event, i) => (
                    <SwiperSlide key={i} className="w-min">
                        <EventCard event={event} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
