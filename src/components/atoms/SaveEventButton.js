import { Symbol } from './Symbol'
import { ToggleEventButton } from './ToggleEventButton'

export const SaveEventButton = ({ eventId, className = '' }) => {
    return (
        <ToggleEventButton className={className} eventId={eventId}>
            <span className="sr-only">Guardar evento</span>
            <Symbol
                className="w-6 h-6 hidden selected:block"
                name="heart-solid"
            />
            <Symbol
                className="w-6 h-6 block selected:hidden"
                name="heart-outline"
            />
        </ToggleEventButton>
    )
}
