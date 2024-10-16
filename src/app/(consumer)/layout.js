import { ConsumerContextProvider } from './ConsumerContext'
import { PulloutMenu } from '@/components/molecules/PulloutMenu'
import { ConsumerMenu } from './ConsumerMenu'
import api from '@/lib/api'

const ConsumerLayout = async ({ children }) => {
    const categories = await api.getCategories()

    return (
        <ConsumerContextProvider categories={categories} tags={[]}>
            <PulloutMenu>
                <ConsumerMenu categories={categories} />
            </PulloutMenu>
            {children}
        </ConsumerContextProvider>
    )
}

export default ConsumerLayout
