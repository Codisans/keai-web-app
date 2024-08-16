import { toCurrency } from '@/utils/toCurrency'

export const Price = ({ value = 0, className = 'font-bold uppercase' }) => {
    if (value == 0) return <span className={className}>Gratis</span>

    return (
        <data value={value} className={className}>
            {toCurrency(Math.round(value))}
        </data>
    )
}
