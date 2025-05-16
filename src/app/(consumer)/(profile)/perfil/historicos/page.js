import { PastEvents } from './PastEvents'

export const metadata = {
    title: 'KEAI | Favoritos historicos',
}

const HistoricFavourites = async () => {
    return (
        <>
            <section className="flex flex-col px-gutter grow overflow-y-auto">
                <PastEvents />
            </section>
        </>
    )
}

export default HistoricFavourites
