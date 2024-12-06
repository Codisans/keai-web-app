import { ConsumerContextProvider } from './ConsumerContext'
import api from '@/lib/api'

const ConsumerLayout = async ({ children }) => {
    const categories = await api.getCategories()
    const tags = await api.getTags()

    return (
        <ConsumerContextProvider categories={categories} tags={tags}>
            {children}
        </ConsumerContextProvider>
    )
}

export default ConsumerLayout
