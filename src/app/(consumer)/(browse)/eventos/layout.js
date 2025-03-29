import { EventsHeader } from './EventsHeader'
import { FilterForm } from '../FilterForm'

const EventsLayout = ({ children }) => {
    return (
        <>
            <EventsHeader />
            <div className="grow">
                <FilterForm
                    datepicker={true}
                    className="hidden [&+*]:block open:block open:[&+*]:hidden"
                />
                <div>{children}</div>
            </div>
        </>
    )
}

export default EventsLayout
