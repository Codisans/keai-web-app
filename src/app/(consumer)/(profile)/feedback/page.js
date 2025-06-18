import FeedbackForm from '@/components/molecules/FeedbackForm'

export const metadata = {
    title: 'keai | Feedback',
}

const Cuenta = () => {
    return (
        <>
            <div className="pt-32 pb-12 flex flex-col gap-8 container">
                <h1 className="font-tenorite text-3xl">Enviar feedback</h1>
                <FeedbackForm />
            </div>
        </>
    )
}

export default Cuenta
