import { NavLink } from '@/components/atoms/NavLink'
import { UserDetail } from './UserDetail'

const FavouritesLayout = ({ children }) => {
    return (
        <>
            <h1 className="sr-only">Perfil</h1>
            <UserDetail />
            <section className="grid grid-cols-12 p-grid-gap gap-grid">
                <div className="col-span-12 flex gap-x-2 items-center">
                    <h2 className="typo-h4">Mis tags</h2>
                    <NavLink
                        className="button-edit current:hidden"
                        pathname="/perfil/editar-tags">
                        Editar
                    </NavLink>
                </div>
                <div className="col-span-12">
                    <ul className="flex flex-wrap gap-2">
                        <li className="tag">tag1</li>
                        <li className="tag">tag2</li>
                    </ul>
                </div>
            </section>
            {children}
        </>
    )
}

export default FavouritesLayout
