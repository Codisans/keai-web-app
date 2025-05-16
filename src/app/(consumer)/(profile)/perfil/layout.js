import { UserDetail } from './UserDetail'
import { NavLink } from '@/components/atoms/NavLink'
import EventIcon from '@mui/icons-material/Event'


const FavouritesLayout = ({ children }) => {
    return (
        <>
            <h1 className="sr-only">Perfil</h1>
            <UserDetail />

            <section className="w-full z-30 -mt-px pt-[calc(0.5rem+1px)] py-2 border-b border-black/20 bg-white sticky top-14">
                <ul className="container grid grid-cols-2 gap-2">
                    <li className='col-span-1'>
                        <NavLink className="button-icon w-full" pathname="/perfil/tags" exactPath={true}>
                            Tags
                        </NavLink>
                    </li>
                    <li className='col-span-1'>
                        <NavLink className="button-icon w-full" pathname="/perfil" exactPath={true}>
                            <EventIcon />
                            Eventos
                        </NavLink>
                    </li>
                </ul>
            </section>
            {children}
        </>
    )
}

export default FavouritesLayout
