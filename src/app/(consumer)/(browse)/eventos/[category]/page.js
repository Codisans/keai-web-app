import { CategoryEventListing } from './CategoryEventListing'

export const metadata = {
    title: 'KEAI | Eventos',
}

const CategoryPage = ({ params, searchParams }) => {
    return <CategoryEventListing params={params} searchParams={searchParams} />
}

export default CategoryPage
