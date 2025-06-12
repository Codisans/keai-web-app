'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { EventCard } from '@/components/molecules/EventCard'

export const EventCarousel = ({
    heading,
    events,
    className = '',
    theme = null,
    link = null,
}) => {
    const [emblaRef] = useEmblaCarousel({ dragFree: true })

    if (!events) return

    const items = Array.isArray(events) ? events : [events]

    if (items?.length == 0) return

    return (
        <div
            className={`${className} flex flex-col gap-y-2 ${theme ? `theme--${theme}` : ''}`}>
            <div className="flex items-center gap-x-4 px-gutter">
                {heading && (
                    <h2 className={`typo-button text-sm p-2`}>{heading}</h2>
                )}
                {link && link}
            </div>

            <div className="w-full">
                <div className="embla event-carousel" ref={emblaRef}>
                    <div className="embla__container">
                        {items?.map((event, i) => (
                            <div className="embla__slide" key={i}>
                                <EventCard
                                    event={event}
                                    showTags={true}
                                    type="carousel"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
