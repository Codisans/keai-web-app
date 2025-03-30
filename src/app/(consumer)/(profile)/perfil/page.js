import { UpcomingEvents } from './UpcomingEvents'
import HistoryIcon from '@mui/icons-material/History'
import EventIcon from '@mui/icons-material/Event'
import { NavLink } from '@/components/atoms/NavLink'

export const metadata = {
    title: 'KEAI | Perfil',
}

const Profile = () => {
    return (
        <>
            <section className="sticky z-10 w-full bg-white border-b p-grid-gap border-grey-2 top-14">
                <ul className="grid w-full grid-cols-2 gap-grid">
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
            </section>
            <section className="flex flex-col p-grid-gap grow overflow-y-auto">
                <UpcomingEvents />
            </section>
        </>
    )
}

export default Profile
