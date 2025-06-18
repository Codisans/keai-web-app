import { CategoryEventListing } from './CategoryEventListing'

export const metadata = {
    title: 'keai | Eventos',
}

const CategoryPage = async props => {
    const searchParams = await props.searchParams
    const params = await props.params
    return <CategoryEventListing params={params} searchParams={searchParams} />
}

export default CategoryPage
