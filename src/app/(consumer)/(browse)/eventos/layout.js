import { EventsHeader } from './EventsHeader'
import { ListFilterForm } from './ListFilterForm'
import { ListFilterModal } from './ListFilterModal'

const EventsLayout = ({ children }) => {
    return (
        <>
            <EventsHeader />
            <div className="grow">{children}</div>
            <ListFilterModal>
                <ListFilterForm />
            </ListFilterModal>
        </>
    )
}

export default EventsLayout
