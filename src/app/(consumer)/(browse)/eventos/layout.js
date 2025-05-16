import { EventsHeader } from './EventsHeader'
import { FilterForm } from '../FilterForm'

const EventsLayout = ({ children }) => {
    return (
        <>
            <EventsHeader />
            <div className="grow">
                <FilterForm className="open:block max-[496px]:left-2 min-[496px]:w-full right-2 hidden fixed z-header top-28 border border-grey bottom-18 rounded overflow-hidden select-none" />
                <div className='w-full overflow-hidden'>{children}</div>
            </div>
        </>
    )
}

export default EventsLayout
