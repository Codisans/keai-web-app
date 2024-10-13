import { Icon } from 'leaflet'
import { _categories } from '@/constants/categories'

export const markerIcons = {
    keai: new Icon({
        iconUrl: '/keai-marker.svg',
        iconSize: [36, 36], // size of the icon
        iconAnchor: [16, 36], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -12], // point from which the popup should open relative to the iconAnchor
    }),
    deviceLocation: new Icon({
        iconUrl: '/device-location-marker.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
    }),
    bienestar: new Icon({
        iconUrl: _categories.bienestar.markerUrl,
        iconSize: [36, 36],
        iconAnchor: [16, 36],
        popupAnchor: [0, -12],
    }),
    cultura: new Icon({
        iconUrl: _categories.cultura.markerUrl,
        iconSize: [36, 36],
        iconAnchor: [16, 36],
        popupAnchor: [0, -12],
    }),
    deporte: new Icon({
        iconUrl: _categories.deporte.markerUrl,
        iconSize: [36, 36],
        iconAnchor: [16, 36],
        popupAnchor: [0, -12],
    }),
    educacion: new Icon({
        iconUrl: _categories.educacion.markerUrl,
        iconSize: [36, 36],
        iconAnchor: [16, 36],
        popupAnchor: [0, -12],
    }),
    entretencion: new Icon({
        iconUrl: _categories.entretencion.markerUrl,
        iconSize: [36, 36],
        iconAnchor: [16, 36],
        popupAnchor: [0, -12],
    }),
    familiar: new Icon({
        iconUrl: _categories.familiar.markerUrl,
        iconSize: [36, 36],
        iconAnchor: [16, 36],
        popupAnchor: [0, -12],
    }),
    gastronomia: new Icon({
        iconUrl: _categories.gastronomia.markerUrl,
        iconSize: [36, 36],
        iconAnchor: [16, 36],
        popupAnchor: [0, -12],
    }),
    negocios: new Icon({
        iconUrl: _categories.negocios.markerUrl,
        iconSize: [36, 36],
        iconAnchor: [16, 36],
        popupAnchor: [0, -12],
    }),
}
