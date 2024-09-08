import { Symbol } from '@/components/atoms/Symbol'

export const Loading = () => {
    return (
        <div className="flex py-header h-full w-full items-center justify-center overflow-hidden">
            <Symbol
                className="w-16 h-16 text-theme animation-loading-logo animate-pulse"
                name="logotype"
            />
        </div>
    )
}
