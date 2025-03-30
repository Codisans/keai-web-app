import { NavLink } from '@/components/atoms/NavLink'
import { PastEvents } from './PastEvents'
import HistoryIcon from '@mui/icons-material/History'
import EventIcon from '@mui/icons-material/Event'

export const metadata = {
    title: 'KEAI | Favoritos historicos',
}

const HistoricFavourites = async () => {
    return (
        <section className="flex flex-col p-grid-gap grow overflow-y-auto">
            <h2 className="pt-8 px-grid-gap typo-h3">Eventos guardados</h2>
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
                <PastEvents />
            </section>
        </section>
    )
}

export default HistoricFavourites
