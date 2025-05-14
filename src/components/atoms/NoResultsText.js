import { Symbol } from './Symbol'

export const NoResultsText = () => {
    return (
        <div className="flex flex-col gap-4 items-center p-4 py-8">
            <Symbol className="size-24 animate-pulse text-orange" name="logo" />
            <p className="p-4 px-8 text-center text-small text-black/80">
                No se encuentran eventos segun tu busqueda en este momento.
            </p>
        </div>
    )
}
