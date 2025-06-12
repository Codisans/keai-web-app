'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { EventCard } from '@/components/molecules/EventCard'
import { useEffect, useState } from 'react'
import { useApi } from '@/hooks/api'

export const EventCarouselQuery = ({
    heading,
    searchParams,
    className = '',
    theme = null,
    link = null,
}) => {
    const { getEvents } = useApi()
    const [events, setEvents] = useState([])
    const [emblaRef] = useEmblaCarousel({ dragFree: true })

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsData = await getEvents(searchParams)
            setEvents(eventsData)
        }

        fetchEvents()
    }, [searchParams])

    if (!events || events.length == 0) return

    return (
        <div
            className={`${className} flex flex-col gap-y-2 ${theme ? `theme--${theme}` : ''}`}>
            <div className="flex items-center gap-x-4 px-gutter">
                {heading && (
                    <h2
                        className={`typo-button uppercase block px-2 pt-1.5 pb-0.5 rounded-button ${theme ? 'bg-theme text-theme-contrast' : ''}`}>
                        {heading}
                    </h2>
                )}
                {link && link}
            </div>

            <div className="w-full">
                <div className="embla event-carousel" ref={emblaRef}>
                    <div className="embla__container">
                        {events?.map((event, i) => (
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
