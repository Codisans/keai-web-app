'use client'
// import { usePathname } from 'next/navigation'
import { Button } from '@/components/atoms/Button'
import { DateTime } from '@/components/atoms/DateTime'
import { Price } from '@/components/atoms/Price'

export const EventFooter = ({ event }) => {
    return (
        <footer className="sticky bottom-0 inset-x-0 z-footer border-t border-grey-3 bg-white shrink">
            <div className="flex items-center justify-between p-gutter">
                <div className="flex flex-col leading-tight">
                    <DateTime value={event?.start_time} />
                    <DateTime value={event?.start_time} type="time" />
                </div>
                <div className="flex items-center gap-3">
                    <Price value={event?.price} />
                    <Button
                        className="!bg-black text-white"
                        href="https://www.fatsoma.com/e/doa0v6aj/revenge-gets-spanked-revenge-x-house-of-spank-bank-holiday-sunday-brighton-fetish-week"
                        target="_blank">
                        Entradas
                    </Button>
                </div>
            </div>
        </footer>
    )
}
