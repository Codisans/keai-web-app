import { PastEvents } from './PastEvents'
import { EventTabs } from '../EventTabs'

export const metadata = {
    title: 'KEAI | Favoritos historicos',
}

const HistoricFavourites = async () => {
    return (
        <>
            <section className="sticky px-gutter z-10 w-full bg-white-off border-b border-black/20 top-14">
                <h2 className="pt-8 pb-4 typo-h3">Tus eventos pasados</h2>
                <EventTabs />
            </section>
            <section className="flex flex-col px-gutter grow overflow-y-auto">
                <PastEvents />
            </section>
        </>
    )
}

export default HistoricFavourites
