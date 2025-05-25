'use client'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { DateTime } from '@/components/atoms/DateTime'
import { Logo } from '@/components/atoms/Logo'
import { Symbol } from '@/components/atoms/Symbol'
import { useContext, useEffect } from 'react'

export const EventDetail = ({ event }) => {
    const { setSelectedEvent } = useContext(ConsumerContext)
    const isFree = event.price == null || parseInt(event.price) === 0

    useEffect(() => {
        console.log(event)
        setSelectedEvent(event)
        return () => setSelectedEvent(null)
    }, [])

    return (
        <div className="flex flex-col pb-12 pt-6 relative container">
            <div className="flex flex-col-reverse">
                <h1 className="text-xl font-medium px-gutter">{event.name}</h1>
                <ul className="pb-3 uppercase typo-body text-grey flex gap-1.5 flex-wrap">
                    {isFree && <li className='tag-lg bg-orange'>Gratis</li>}
                    {event.categories.map((c, i) => (
                        <li className={`tag-lg bg-orange`} key={i}>
                            {c.name}
                        </li>
                    ))}
                    {event.tags?.map((tag, i) => (
                        <li key={i} className="tag-lg">
                            {tag.name}
                        </li>
                    ))}
                </ul>
                <div className="relative w-full mb-2 overflow-hidden aspect-video rounded-card">
                    <img
                        className="absolute inset-0 object-cover w-full h-full"
                        src={event.cover}
                    />
                </div>
            </div>

            <section className='bg-white text-black border border-gray-300 rounded-2xl overflow-hidden mt-4'>
                <div className="typo-date font-medium text-md flex flex-row items-center gap-4 px-4 py-2 border-b border-gray-300">
                    <DateTime
                        className="block"
                        date={event.start_date}
                        format="ddd D MMM"
                    />
                    <span className="text-orange">•</span>
                    <DateTime
                        className="block"
                        date={event.start_date}
                        format="time"
                    />
                </div>
                <div className="flex flex-row gap-x-4 px-4 py-2">
                    <div className="inline-block my-auto">
                        <div className='inline'
                            dangerouslySetInnerHTML={{
                                __html: event.formatted_address,
                            }}
                            />
                    </div>
                    <a href={`/mapa/#${event.id}`} className='relative flex flex-col gap-y-1 items-center justify-center w-min'>
                        <Logo className="text-h1 mt-1" type="logotype" />
                        <span className='font-bold text-xs typo-caps leading-tight'>Mapa</span>
                    </a>
                </div>
            </section>

            <div className="flex flex-col gap-y-4 pt-8">
                <div dangerouslySetInnerHTML={{
                        __html: event.description,
                    }} />
            </div>
       
            <div className='py-8 flex gap-x-2 justify-center items-center'>
                <span>Compartir: </span>
                <a className='button-icon' href={`whatsapp://send?text=${window.location.href}`}>
                    <Symbol className="w-6 h-6" name="whatsapp" />
                </a>
                <a className='button-icon' href={`https://www.instagram.com/?url=${window.location.href}`} target="_blank" rel="noopener">
                    <Symbol className="w-6 h-6" name="instagram" />
                </a>
                <a className='button-icon' href={`http://m.me/${window.location.href}`} target="_blank" rel="noopener">
                    <Symbol className="w-6 h-6" name="facebook" />
                </a>
            </div>
        </div>
    )
}
