'use client'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import EventCard from '../atoms/EventCard'
import { useEffect } from 'react'

export const EventCarousel = ({ heading, events, className = '' }) => {
    // useEffect(() => {
    //     console.log('EEE', events)
    // }, [])

    const items = Array.isArray(events) ? events : [events]

    if (items == null) return

    return (
        <div className={`${className} py-4 flex flex-col gap-y-gutter`}>
            {heading && <h2 className="px-gutter text-h1">{heading}</h2>}

            <Swiper
                // modules={[FreeMode]}
                // freeMode={true}
                slidesPerView="auto"
                className="w-full px-[calc(2*var(--gutter))]">
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
