import { classNames } from 'primereact/utils'

export const TRANSITIONS = {
    overlay: {
        timeout: 100,
        classNames: {
            enter: 'opacity-0 scale-75',
            enterActive:
                'opacity-100 !scale-100 transition-transform transition-opacity duration-100 ease-in',
            exit: 'opacity-100',
            exitActive:
                '!opacity-0 transition-opacity duration-100 ease-linear',
        },
    },
}

export const Tailwind = {
    autocomplete: {
        root: ({ props }) => ({
            className: classNames(
                'relative inline-flex max-w-full',
                {
                    'opacity-60 select-none pointer-events-none cursor-default':
                        props.disabled,
                },
                { 'w-full': props.multiple },
            ),
        }),
        container: {
            className: classNames('form-input !px-2 flex flex-wrap gap-1'),
        },
        inputToken: {
            className: classNames('flex-1 inline-flex'),
        },
        input: ({ props }) => ({
            root: {
                className: classNames(
                    'max-w-full grow flex',
                    'appearance-none rounded-lg',
                    { 'rounded-tr-none rounded-br-none': props.dropdown },
                    // {
                    //     'font-sans text-base text-black border-0 outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full':
                    //         props.multiple,
                    // },
                ),
            },
        }),
        token: {
            className: classNames('tag flex flex-nowrap items-center gap-1'),
        },
        dropdownButton: {
            root: 'rounded-tl-none rounded-bl-none',
        },
        panel: {
            className: classNames(
                'bg-white text-gravel border-0 rounded-md',
                'max-h-[200px] overflow-auto',
            ),
        },
        list: 'px-2 py-3 list-none flex flex-wrap gap-2',
        item: ({ context }) => ({
            className: classNames('tag', {
                ' selected': context.selected,
            }),
        }),
        itemGroup: {
            className: classNames('m-0 p-3 text-black bg-white', 'cursor-auto'),
        },
        transition: TRANSITIONS.overlay,
    },
}
