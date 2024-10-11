import { Icon } from 'leaflet'

export const keaiMarker = new Icon({
    iconUrl: '/keai-marker.svg',
    iconSize: [36, 36], // size of the icon
    iconAnchor: [16, 36], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -12], // point from which the popup should open relative to the iconAnchor
})

export const deviceLocationMarker = new Icon({
    iconUrl: '/device-location-marker.png',
    iconSize: [32, 32], // size of the icon
    iconAnchor: [16, 16], // point of the icon which will correspond to marker's location
})
