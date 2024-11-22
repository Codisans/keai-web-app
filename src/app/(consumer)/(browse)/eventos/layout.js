import { EventsHeader } from './EventsHeader'
import { ListFilterForm } from './ListFilterForm'
import { ListFilterModal } from './ListFilterModal'

const EventsLayout = ({ children }) => {
    return (
        <>
            <EventsHeader />
            {children}

            <ListFilterModal>
                <ListFilterForm />
            </ListFilterModal>
        </>
    )
}

export default EventsLayout
