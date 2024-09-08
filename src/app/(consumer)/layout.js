import { ConsumerContextProvider } from './ConsumerContext'
import { getCategories } from '@/api/getCategories'
import { PulloutMenu } from '@/components/molecules/PulloutMenu'
import { ConsumerMenu } from './ConsumerMenu'
import { getTags } from '@/api/getTags'

const ConsumerLayout = async ({ children }) => {
    const categories = await getCategories()
    const tags = await getTags()

    return (
        <ConsumerContextProvider categories={categories} tags={tags}>
            <PulloutMenu>
                <ConsumerMenu categories={categories} />
            </PulloutMenu>
            {children}
        </ConsumerContextProvider>
    )
}

export default ConsumerLayout
