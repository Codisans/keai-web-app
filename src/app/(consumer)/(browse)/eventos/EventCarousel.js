'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { EventCard } from '@/components/molecules/EventCard'

export const EventCarousel = ({ heading, events, className = '' }) => {
    if (!events) return

    const items = Array.isArray(events) ? events : [events]

    if (items?.length == 0) return

    return (
        <div className={`${className} flex flex-col gap-y-gg`}>
            {heading && (
                <h2 className="px-gutter typo-h5 font-medium uppercase">
                    {heading}
                </h2>
            )}

            <Swiper
                modules={[FreeMode]}
                freeMode={{
                    sticky: true,
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
