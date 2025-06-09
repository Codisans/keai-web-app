import { colorIsDark } from '@/utils/getColorContrast'
import { NavLink } from './NavLink'
import { Symbol } from './Symbol'

export const CategoryButton = ({ category, view = 'listing' }) => {
    const isMapView = view === 'map'

    const themeColorIsDark = colorIsDark(category?.color)

    return (
        <NavLink
            pathname={
                category
                    ? `/${isMapView ? 'mapa' : 'eventos'}/${category?.id}`
                    : `/${isMapView ? 'mapa' : 'eventos'}`
            }
            exactPath={true}
            style={{ '--color-theme': category?.color }}
            className={`button-category theme--${category?.slug}`}>
            {category?.svg_identifier ? (
                <span
                    className={`inline-block w-4 h-4 bg-theme mask-icon ${themeColorIsDark ? 'current:bg-white' : 'current:bg-black'}`}
                    style={{
                        '--mask-image-url': `url(${category?.svg_identifier})`,
                    }}></span>
            ) : (
                <Symbol
                    className="flex-none block w-4 h-4 current:text-white"
                    name="logotype"
                />
            )}
            <span
                className={`text-black ${themeColorIsDark ? 'current:text-white' : 'current:text-black'}`}>
                {category?.name || 'Todos'}
            </span>
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
