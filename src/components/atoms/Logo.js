import { Symbol } from '@/components/atoms/Symbol'

export const Logo = ({ className = 'text-logo' }) => {
    return (
        <span
            className={`${className} font-primary font-bold text-primary select-none bg-grey py-[0.2em] px-[0.4em] rounded-lg text-black`}>
            <Symbol className="w-8 h-8" name="logotype" />
        </span>
    )
}
