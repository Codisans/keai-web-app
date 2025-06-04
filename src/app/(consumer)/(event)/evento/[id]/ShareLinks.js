import { Symbol } from '@/components/atoms/Symbol'

export const ShareLinks = ({ event }) => {
    const url = encodeURIComponent(`https://keai.cl/evento/${event.id}`)

    return (
        <div className="py-8 flex flex-col gap-y-2 justify-center items-center tracking-widest typo-caps">
            <h2 className="text-sm font-bold">Compartir</h2>
            <ul className="w-full grid grid-cols-3 gap-x-2">
                <li className="col-span-1">
                    <a
                        className="w-full button-icon bg-white"
                        href={`fb-messenger://share?link=${url}`}>
                        <Symbol className="w-6 h-6" name="fb-messenger" />
                    </a>
                </li>
                <li className="col-span-1">
                    <a
                        className="w-full button-icon bg-white"
                        href={`instagram://sharesheet?text=${url}`}>
                        <Symbol className="w-6 h-6" name="instagram" />
                    </a>
                </li>
                <li className="col-span-1">
                    <a
                        className="w-full button-icon bg-white"
                        href={`whatsapp://send?text=${url}`}
                        data-action="share/whatsapp/share">
                        <Symbol className="w-6 h-6" name="whatsapp" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
