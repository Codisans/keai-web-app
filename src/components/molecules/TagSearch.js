// import { getTags } from '@/api/getTags'
import SearchInput from '../atoms/SearchInput'

export const TagSearch = () => {
    // const tags = await getTags()
    //     .then(res => res)
    //     .catch(err => console.log(err))

    return (
        <SearchInput
        // options={tags?.map(
        //     tag => new Object({ id: tag.id, label: tag.name }),
        // )}
        />
    )
}
