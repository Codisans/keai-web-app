import { Logo } from '@/components/atoms/Logo'

export const UiKit = () => {
    return (
        <div className="container bg-white-true">
            <section>
                <Logo className="[font-size:5rem]" type="vertical" />
                <h1 className="typo-xl mt-8">UiKit</h1>
            </section>
            <section className="flex flex-col gap-y-8 mt-12">
                <div className="flex flex-col gap-y-2 typo-regular">
                    <div className="text-3xl">Typo-3xl</div>
                    <div className="text-2xl">Typo-2xl</div>
                    <div className="text-xl">Typo-xl</div>
                    <div className="text-lg">Typo-lg</div>
                    <div className="text-md">Typo-md</div>
                    <div className="text-sm">Typo-sm</div>
                    <div className="text-xs">Typo-xs</div>
                </div>
            </section>
            <section className="flex flex-col gap-y-8 mt-12">
                <div className="flex flex-col items-start gap-y-2">
                    <div className="button-sm">Button-sm</div>
                    <div className="button">Button</div>
                    <div className="button-lg">Button-lg</div>
                </div>
                <div className="flex flex-col items-start gap-y-2 light">
                    <div className="button-sm">Button-sm</div>
                    <div className="button">Button</div>
                    <div className="button-lg">Button-lg</div>
                </div>
                <div className="flex flex-col items-start gap-y-2 dark">
                    <div className="button-sm">Button-sm</div>
                    <div className="button">Button</div>
                    <div className="button-lg">Button-lg</div>
                </div>
                <div className="flex flex-col items-start gap-y-2 selected">
                    <div className="button-sm">Button-sm</div>
                    <div className="button">Button</div>
                    <div className="button-lg">Button-lg</div>
                </div>
                <div className="flex flex-col items-start gap-y-2">
                    <div className="button-tag">Button-tag</div>
                    <div className="button-tag selected">Button-tag</div>
                </div>
            </section>
            <section className="flex flex-col gap-y-8 mt-12">
                <div className="flex flex-col items-start gap-y-2">
                    <div className="tag-sm">Tag-sm</div>
                    <div className="tag">Tag</div>
                    <div className="tag-lg">Tag-lg</div>
                </div>
            </section>
            <section className="flex flex-col gap-y-8 mt-12">
                <div className="flex flex-col items-start gap-y-4">
                    <div className="typo-date-sm">Date-sm</div>
                    <div className="typo-date">Date</div>
                    <div className="typo-date-lg">Date-lg</div>
                </div>
            </section>
        </div>
    )
}
