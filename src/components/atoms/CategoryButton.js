import { NavLink } from "./NavLink"
import { Symbol } from "./Symbol"

export const CategoryButton = ({ category, view = 'listing' }) => {
    const isMapView = view === 'map'

    return (
        <NavLink
            pathname={category ? `/${isMapView ? 'mapa' : 'eventos'}/${category?.id}` : `/${isMapView ? 'mapa' : 'eventos'}`}
            exactPath={true}
            className={`button-category theme--${category?.slug}`}>
            <Symbol className="flex-none block w-4 h-4" name={category?.slug} />
            <span>{category?.name || 'Todos'}</span>
        </NavLink>
    )
}

export const CategoryButtonFallback = () => {
    return (
        <div className="button-category">
            <Symbol className="flex-none block w-4 h-4" name="logotype" />
            <span>Keai</span>
        </div>
    )
}