import { CreateEventForm } from './CreateEventForm'

const CrearEvento = () => {
    return (
        <>
            <section className="py-12 px-grid-gap">
                <h1 className="pb-12 text-h1">Crear nuevo evento</h1>
                <CreateEventForm />
            </section>
        </>
    )
}

export default CrearEvento
