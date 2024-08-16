import { getTags } from '@/api/getTags'
import SearchInput from '../atoms/SearchInput'

export const TagSearch = async () => {
    const tags = await getTags()
        .then(res => res)
        .catch(err => console.log(err))

    return (
        <section className="py-4 px-gutter">
            <SearchInput
                options={tags?.map(
                    tag => new Object({ id: tag.id, label: tag.name }),
                )}
            />
        </section>
    )
}
