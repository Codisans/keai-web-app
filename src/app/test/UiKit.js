import { Logo } from "@/components/atoms/Logo"

export const UiKit = () => {
    return (
        <div className="container bg-canvas">
            <section>
                <Logo className="text-h1" type="app" />
                <h1 className="typo-h1">UiKit</h1>
            </section>
            <section className="flex flex-col gap-y-8 mt-12">
                <div className="flex flex-col gap-y-2">
                    <div className="typo-h1">Typo-h1</div>
                    <div className="typo-h2">Typo-h2</div>
                    <div className="typo-h3">Typo-h3</div>
                    <div className="typo-h4">Typo-h4</div>
                    <div className="typo-h5">Typo-h5</div>
                </div>
                <div className="flex flex-col gap-y-2 typo-regular">
                    <div className="text-sm">Typo-sm</div>
                    <div className="text-md">Typo-md</div>
                    <div className="text-lg">Typo-lg</div>
                    <div className="text-xl">Typo-xl</div>
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