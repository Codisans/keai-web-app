import { Symbol } from '@/components/atoms/Symbol'

export const Logo = ({ className = 'text-logo', type = 'horizontal' }) => {
    if (type == 'logotype') {
        return (
            <Symbol
                className={`${className} w-[1em] h-[1em] visible block`}
                name="logotype"
            />
        )
    }

    return (
        <span
            className={`${className} flex flex-nowrap justify-center items-center select-none ${type == 'horizontal' ? '' : 'flex-col-reverse'} ${type == 'app' ? 'bg-black w-[2.5em] h-[2.5em] pt-[0.25em] rounded-[0.25em] text-white' : 'w-max h-max'}`}>
            <span className="block font-tenorite font-normal lowercase leading-none">
                Keai
            </span>
            <Symbol
                className={`visible block text-primary ${type == 'horizontal' ? 'w-[1em] h-[1em]' : 'w-[0.8em] h-[0.8em] mb-[-0.12em]'}`}
                name="logotype"
            />
        </span>
    )
}
