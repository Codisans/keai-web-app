import { EventsHeader } from './EventsHeader'
// import { useConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { FilterForm } from '../FilterForm'

const EventsLayout = ({ children }) => {
    // const { filterIsOpen } = useConsumerContext()

    return (
        <>
            <EventsHeader />
            <div className="grow">
                <FilterForm className="hidden [&+*]:block open:block open:[&+*]:hidden" />
                <div>{children}</div>
            </div>
        </>
    )
}

export default EventsLayout
