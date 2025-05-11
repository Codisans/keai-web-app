import { EventsHeader } from './EventsHeader'
import { FilterForm } from '../FilterForm'

const EventsLayout = ({ children }) => {
    return (
        <>
            <EventsHeader />
            <div className="grow">
                <FilterForm
                    className="hidden [&+*]:block open:block open:[&+*]:hidden"
                />
                <div className='w-full overflow-hidden'>{children}</div>
            </div>
        </>
    )
}

export default EventsLayout
