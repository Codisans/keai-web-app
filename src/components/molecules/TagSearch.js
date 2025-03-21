import AutoComplete from '../atoms/AutoComplete'
import api from '@/lib/api'

export const TagSearch = async () => {
    const tags = await api.getTags()

    return (
        <section className="py-4 px-grid-gap">
            <AutoComplete
                options={tags?.map(
                    tag => new Object({ id: tag.id, label: tag.name }),
                )}
            />
        </section>
    )
}
