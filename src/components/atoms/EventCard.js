import Link from 'next/link'

const EventCard = props => {
    const { event } = props

    return (
        <div className="flex flex-col gap-y-3 relative w-full">
            <div className="w-full aspect-[16/9] relative rounded-card overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover active-slide:scale-105 transition-transform ease-in-out duration-500"
                    src={event.cover}
                />
            </div>
            <div className="">
                <h3>{event.name}</h3>
                <p>{event.date}</p>
                <p>
                    {Number(event.price) == 0
                        ? 'Gratis'
                        : '$ '.concat(event.price)}
                </p>
            </div>
            <Link
                href={`/evento/${event.id}`}
                className="absolute inset-0"></Link>
        </div>
    )
}

export default EventCard
