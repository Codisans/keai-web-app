import { TagListing } from './TagListing'
import { getTags } from '@/api/getTags'

export const metadata = {
    title: 'KEAI Admin | Tag Listing',
}

const AdminTagListing = async () => {
    const tags = await getTags()

    return (
        <div className="w-full h-full">
            <section class="py-3 w-full px-gutter h-max">
                <h1>Tags</h1>
            </section>
            <TagListing tags={tags} />
        </div>
    )
}

export default AdminTagListing
