import { Suspense } from 'react'
import { ConsumerContextProvider } from './ConsumerContext'
import api from '@/lib/api'
import { Loading } from '@/components/atoms/Loading'

const ConsumerLayout = async ({ children }) => {
    const categories = await api.getCategories()
    const tags = await api.getTags()

    return (
        <ConsumerContextProvider categories={categories} tags={tags}>
            <Suspense fallback={<Loading />}>{children}</Suspense>
        </ConsumerContextProvider>
    )
}

export default ConsumerLayout
