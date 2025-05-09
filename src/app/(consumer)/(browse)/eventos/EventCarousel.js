'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { EventCard } from '@/components/molecules/EventCard'

export const EventCarousel = ({
    heading,
    events,
    className = '',
    link = null,
}) => {
    if (!events) return

    const items = Array.isArray(events) ? events : [events]

    if (items?.length == 0) return

    return (
        <div className={`${className} flex flex-col gap-y-2`}>
            <div className="flex items-center justify-between px-gutter">
                {heading && (
                    <h2 className="typo-button uppercase">{heading}</h2>
                )}
                {link && link}
            </div>

            <Swiper
                modules={[FreeMode]}
                freeMode={{
                    sticky: false,
                }}
                slidesPerView="auto"
                className="w-full !px-6">
                {items?.map((event, i) => (
                    <SwiperSlide
                        key={i}
                        className="pr-3 last:pr-0"
                        style={{ width: '16rem' }}>
                        <EventCard event={event} type="carousel" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
