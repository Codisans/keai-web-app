// import { TagListing } from './TagListing'
// import api from '@/lib/api'

export const metadata = {
    title: 'KEAI Admin | Tag Listing',
}

const AdminTagListing = async () => {
    // const tags = await api.getTags()

    return (
        <div className="w-full h-full">
            <section className="py-3 w-full px-grid-gap h-max">
                <h1>Tags</h1>
            </section>
            {/* <TagListing tags={tags} /> */}
        </div>
    )
}

export default AdminTagListing
