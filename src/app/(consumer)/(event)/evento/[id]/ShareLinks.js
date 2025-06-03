import { Symbol } from '@/components/atoms/Symbol'

export const ShareLinks = ({ event }) => {
    const url = encodeURIComponent(`https://keai.cl/evento/${event.id}`)

    return (
        <div className="py-8 flex flex-col gap-y-2 justify-center items-center tracking-widest typo-caps">
            <h2 className="text-sm font-bold">Compartir</h2>
            <ul className="flex gap-x-2 flex-row flex-nowrap">
                <li>
                    <a
                        className="button-icon"
                        href={`whatsapp://send?text=${url}`}
                        data-action="share/whatsapp/share">
                        <Symbol className="w-6 h-6" name="whatsapp" />
                    </a>
                </li>
                <li>
                    <a
                        className="button-icon"
                        href={`instagram://sharesheet?text=${url}`}>
                        <Symbol className="w-6 h-6" name="instagram" />
                    </a>
                </li>
                <li>
                    <a
                        className="button-icon"
                        href={`fb-messenger://share?link=${url}`}>
                        <Symbol className="w-6 h-6" name="fb-messenger" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
