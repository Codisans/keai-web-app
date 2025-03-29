import HistoryIcon from '@mui/icons-material/History'
import EventIcon from '@mui/icons-material/Event'
import { NavLink } from '@/components/atoms/NavLink'

const FavouritesLayout = ({ children }) => {
    return (
        <>
            <h1 className="sr-only">Perfil</h1>
            <section className="grid grid-cols-12 p-grid-gap gap-grid">
                <div className="col-span-4">
                    <div className="w-full pt-[100%] relative rounded-full overflow-hidden">
                        <div className="absolute inset-0 w-full h-full bg-grey"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center col-span-8">
                    <h2 className="text-h2 font-tenerite">User</h2>
                </div>
            </section>
            <section className="grid grid-cols-12 p-grid-gap gap-grid">
                <h2 className="col-span-12 typo-h4">Mis tags</h2>
                <div className="col-span-12">
                    <ul className="flex flex-wrap gap-2">
                        <li className="tag">tag1</li>
                        <li className="tag">tag2</li>
                    </ul>
                </div>
            </section>
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
            {children}
        </>
    )
}

export default FavouritesLayout
