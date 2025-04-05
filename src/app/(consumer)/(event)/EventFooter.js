import { DateTime } from '@/components/atoms/DateTime'

export const EventFooter = ({ event }) => {
    if (!event) return

    return (
        <footer className="sticky bottom-0 inset-x-0 z-footer shrink p-2 pb-8">
            <div className="flex items-center justify-between p-1 rounded-[0.75rem] border-2 border-orange bg-white container">
                <div className="flex flex-row items-center gap-4 typo-h5 px-2">
                    <DateTime date={event.start_date} />
                    <span className="text-orange">•</span>
                    <DateTime date={event.start_date} format="time" />
                </div>
                <div className="flex items-center gap-3">
                    <a
                        className="button"
                        href="https://www.fatsoma.com/e/doa0v6aj/revenge-gets-spanked-revenge-x-house-of-spank-bank-holiday-sunday-brighton-fetish-week"
                        rel="noreferrer"
                        target="_blank">
                        Entradas
                    </a>
                </div>
            </div>
        </footer>
    )
}
