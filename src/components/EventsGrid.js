const EventsGrid = props => {
    const { className = '', children } = props

    return (
        <ul className={`grid grid-cols-12 gap-6 ${className}`}>{children}</ul>
    )
}

export default EventsGrid
