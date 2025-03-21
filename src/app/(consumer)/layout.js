import { Suspense } from 'react'
import { ConsumerContextProvider } from './ConsumerContext'
import api from '@/lib/api'

const ConsumerLayout = async ({ children }) => {
    const categories = await api.getCategories()
    const tags = await api.getTags()

    return (
        <ConsumerContextProvider categories={categories} tags={tags}>
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ConsumerContextProvider>
    )
}

export default ConsumerLayout
