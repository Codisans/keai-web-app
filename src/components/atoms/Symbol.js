export const Symbol = ({ name, ...props }) => {
    switch (name) {
        case 'logotype':
            return (
                <svg
                    {...props}
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="logo-a">
                            <path d="M4.359375 0h21.28125v29.03125H4.359375Zm0 0" />
                        </clipPath>
                        <clipPath id="logo-b">
                            <path d="M25.550781 9.972656c-.074219-1.363281-.414062-2.710937-1.015625-3.96875-.503906-1.054687-1.1875-2.042968-2.0625-2.917968-4.128906-4.125-10.816406-4.125-14.945312 0-.871094.875-1.558594 1.863281-2.0625 2.917968l-.003906.007813c-.601563 1.261719-.9375 2.613281-1.011719 3.976562v.007813c-.152344 2.894531.875 5.832031 3.078125 8.035156l-.015625.015625 2.492187 2.492187 7.488282-7.492187c1.375-1.375 1.375-3.605469 0-4.980469-1.375-1.375-3.609376-1.375-4.984376 0-1.371093 1.378906-1.375 3.609375 0 4.984375l-2.488281 2.488281C8.179688 13.699219 7.570312 11.09375 8.191406 8.75l.003906-.011719c.308594-1.160156.917969-2.253906 1.824219-3.160156 2.75-2.753906 7.210938-2.753906 9.960938 0 .910156.90625 1.515625 2 1.824219 3.15625.625 2.351563.019531 4.960937-1.824219 6.804687l-7.488281 7.488282c-1.375 1.375-1.375 3.609375 0 4.984375 1.375 1.371093 3.605468 1.371093 4.980468 0 1.375-1.375 1.378906-3.609375 0-4.984375l5-4.996094c2.210938-2.214844 3.238282-5.164062 3.078125-8.058594" />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#logo-a)">
                        <g fill="currentColor" clipPath="url(#logo-b)">
                            <path d="M3.835938-.609375h22.328124V29.65625H3.835938Zm0 0" />
                            <path d="M3.835938-.609375h22.328124V29.65625H3.835938Zm0 0" />
                        </g>
                    </g>
                </svg>
            )
    }
}