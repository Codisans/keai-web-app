import SearchInput from '../atoms/SearchInput'
import api from '@/lib/api'

export const TagSearch = async () => {
    const tags = await api.getTags()

    return (
        <section className="py-4 px-gg">
            <SearchInput
                options={tags?.map(
                    tag => new Object({ id: tag.id, label: tag.name }),
                )}
            />
        </section>
    )
}
