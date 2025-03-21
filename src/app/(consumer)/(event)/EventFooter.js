import { DateTime } from '@/components/atoms/DateTime'
import { Price } from '@/components/atoms/Price'

export const EventFooter = ({ event }) => {
    if (!event) return

    return (
        <footer className="sticky bottom-0 inset-x-0 z-footer border-t border-grey-3 bg-white shrink">
            <div className="flex items-center justify-between p-grid-gap pb-6">
                <div className="flex flex-col typo-body font-bold">
                    <DateTime value={event.start_date} />
                    <DateTime value={event.start_date} format="time" />
                </div>
                <div className="flex items-center gap-3">
                    <Price value={event.price} />
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
