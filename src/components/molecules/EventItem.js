const EventItem = props => {
    const { event } = props

    return (
        <div className="flex flex-col gap-y-3 relative group/card w-full">
            <div className="w-full aspect-[16/9] relative rounded-card overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform ease-in-out duration-500"
                    src={event.cover}
                />
            </div>
            <div className="">
                <h3>{event.name}</h3>
                <p>{event.date}</p>
                <p>Desde: $ {event.price}</p>
            </div>
            <a href={`/evento/${event.id}`} className="absolute inset-0"></a>
        </div>
    )
}

export default EventItem
