import { ConsumerContextProvider } from './ConsumerContext'
import { getCategories } from '@/api/getCategories'
import { MenuPullout } from '@/components/molecules/MenuPullout'
import { MainMenu } from '@/components/molecules/MainMenu'

const ConsumerLayout = async ({ children }) => {
    const categories = await getCategories()

    return (
        <ConsumerContextProvider>
            <MenuPullout>
                <MainMenu categories={categories} />
            </MenuPullout>
            {children}
        </ConsumerContextProvider>
    )
}

export default ConsumerLayout
