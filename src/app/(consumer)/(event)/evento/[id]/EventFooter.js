export const EventFooter = ({ event }) => {
    if (!event) return

    return (
        <footer className="sticky mt-10 p-2 pb-4 container bottom-0 inset-x-0 z-footer bg-white border-t border-gray-300">
            <a href={event.link}
                rel="noreferrer"
                target="_blank"
                className="button-lg font-bold bg-orange hover:brightness-75 w-full">
                    Entradas
            </a>
        </footer>
    )
}
