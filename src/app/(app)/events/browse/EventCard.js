'use client'

const EventCard = props => {
    const { data } = props

    return (
        <div className="flex flex-col relative p-6 group/card">
            <div className="w-full aspect-[4/5] relative overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform ease-in-out duration-500"
                    src={data.cover}
                />
            </div>
            <div>
                <h3>{data.name}</h3>
                <p>{data.date}</p>
                <p>Desde: $ {data.price}</p>
            </div>
            <button
                onClick={() => console.log(data)}
                className="absolute inset-0"></button>
        </div>
    )
}

export default EventCard