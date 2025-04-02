import { NavLink } from '@/components/atoms/NavLink'
import HistoryIcon from '@mui/icons-material/History'
import EventIcon from '@mui/icons-material/Event'

export const EventTabs = () => {
    return (
        <ul className="grid py-2 w-full grid-cols-2 gap-grid">
            <li className="col-span-1">
                <NavLink
                    className="button w-full"
                    pathname="/perfil/historicos"
                    exactPath={true}>
                    <HistoryIcon />
                    <span>Historicos</span>
                </NavLink>
            </li>
            <li className="col-span-1">
                <NavLink
                    className="button w-full"
                    pathname="/perfil"
                    exactPath={true}>
                    <EventIcon />
                    <span>Siguentes</span>
                </NavLink>
            </li>
        </ul>
    )
}
