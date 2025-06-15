import { Suspense } from 'react'
import { ConsumerContextProvider } from './ConsumerContext'
import { Loading } from '@/components/atoms/Loading'

const ConsumerLayout = ({ children }) => {
    return (
        <ConsumerContextProvider>
            <Suspense fallback={<Loading />}>{children}</Suspense>
        </ConsumerContextProvider>
    )
}

export default ConsumerLayout
