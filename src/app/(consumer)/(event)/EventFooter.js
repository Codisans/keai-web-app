import { DateTime } from '@/components/atoms/DateTime'

export const EventFooter = ({ event }) => {
    if (!event) return

    return (
        <footer className="sticky bottom-0 inset-x-0 z-footer shrink p-2 pb-8">
            <div className="flex items-center justify-between gap-x-6 pl-4 p-1 rounded-[0.75rem] border-2 border-black bg-white container">
                <div className="typo-date text-md flex flex-row items-center gap-4 pt-0.5 ml-auto">
                    <DateTime
                        className="block"
                        date={event.start_date}
                        format="ddd D MMM"
                    />
                    <span className="text-orange">•</span>
                    <DateTime
                        className="block"
                        date={event.start_date}
                        format="time"
                    />
                </div>
                <a
                    className="button-lg dark"
                    href={event.link}
                    rel="noreferrer"
                    target="_blank">
                    Entradas
                </a>
            </div>
        </footer>
    )
}
