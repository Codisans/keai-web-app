import { Symbol } from '@/components/atoms/Symbol'
import { NavLink } from '@/components/atoms/NavLink'

export const CategoryCard = ({ category }) => {
    const url = category ? `/eventos/${category?.id}` : '/eventos'

    return (
        <NavLink
            pathname={url}
            preserveParams={true}
            exactPath={true}
            className={`card-category theme--${category?.slug || 'default'}`}>
            <Symbol
                className="w-8 h-8 current:text-white"
                name={category?.slug}
            />
            <span className="typo-caps text-black current:text-white">
                {category?.name || 'Todos'}
            </span>
        </NavLink>
    )
}

export const CategoryCardFallback = () => {
    return (
        <div className="card-category">
            <Symbol className="w-8 h-8" name="logotype" />
            <span className="typo-button text-black current:text-white">
                Keai
            </span>
        </div>
    )
}
