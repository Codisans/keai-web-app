import {
    bienestarMarker,
    culturaMarker,
    educacionMarker,
    entretencionMarker,
    deporteMarker,
    familiarMarker,
    gastronomiaMarker,
    negociosMarker,
} from '@/lib/leaflet'

export const categories = {
    bienestar: {
        name: 'Bienestar',
        slug: 'bienestar',
        marker: bienestarMarker,
    },
    cultura: {
        name: 'Cultura',
        slug: 'cultura',
        marker: culturaMarker,
    },
    educacion: {
        name: 'Educación',
        slug: 'educacion',
        marker: educacionMarker,
    },
    entretencion: {
        name: 'Entretenciono',
        slug: 'entretencion',
        marker: entretencionMarker,
    },
    deporte: {
        name: 'Deporte',
        slug: 'deporte',
        marker: deporteMarker,
    },
    familiar: {
        name: 'Familiar',
        slug: 'familiar',
        marker: familiarMarker,
    },
    gastronomia: {
        name: 'Gastronomía',
        slug: 'gastronomia',
        marker: gastronomiaMarker,
    },
    negocios: {
        name: 'Negocios',
        slug: 'negocios',
        marker: negociosMarker,
    },
}
