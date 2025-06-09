export const EventFooter = ({ event }) => {
    if (!event) return

    return (
        <footer className="sticky pt-2 pb-4 bottom-0 inset-x-0 z-footer bg-white border-t border-gray-300">
            <div className="container">
                <a
                    href={event.link}
                    rel="noreferrer"
                    target="_blank"
                    className="button-lg dark w-full">
                    Entradas
                </a>
            </div>
        </footer>
    )
}
