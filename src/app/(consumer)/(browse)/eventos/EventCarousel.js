'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { EventCard } from '@/components/molecules/EventCard'

export const EventCarousel = ({
    heading,
    events,
    className = '',
    theme = null,
    link = null,
}) => {
    if (!events) return

    const items = Array.isArray(events) ? events : [events]

    if (items?.length == 0) return

    return (
        <div className={`${className} flex flex-col gap-y-2 ${theme ? `theme--${theme}` : ''}`}>
            <div className="flex items-center gap-x-4 px-gutter">
                {heading && (
                    <h2 className={`tag-lg light font-semibold`}>{heading}</h2>
                )}
                {link && link}
            </div>

            <div className='w-full'>
                <Swiper
                    modules={[FreeMode]}
                    freeMode={{
                        sticky: false,
                    }}
                    slidesPerView="auto"
                    spaceBetween="16px"
                    className="w-full !px-6 !overflow-visible">
                    {items?.map((event, i) => (
                        <SwiperSlide
                        key={i}
                        style={{ width: '16rem' }}>
                            <EventCard event={event} showTags={true} type="carousel" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
