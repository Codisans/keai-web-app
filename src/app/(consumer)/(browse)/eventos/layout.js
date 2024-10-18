import { EventsHeader } from './EventsHeader'
import { FilterModal } from './FilterModal'
import { FilterForm } from './FilterForm'

const EventsLayout = ({ children }) => {
    return (
        <>
            <EventsHeader />
            {children}
            <FilterModal>
                <FilterForm />
            </FilterModal>
        </>
    )
}

export default EventsLayout
