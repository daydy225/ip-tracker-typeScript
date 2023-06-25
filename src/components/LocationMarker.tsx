import React, { useEffect } from 'react'
import { Marker, Tooltip, useMap } from 'react-leaflet'
import { Icon, LatLngExpression } from 'leaflet'
import markerICon from '../assets/icon/localisation_icon.png'





export const LocationMarker:React.FC<{position:LatLngExpression, infoTooltip: string}> = ({position, infoTooltip}) => {

const map = useMap();

useEffect(() => {
  if (position) {
    map.flyTo(position, map.getZoom());
  }
}, [position, map]);

// marker icon 
const myIcon = new Icon({
    iconUrl: markerICon,
    iconSize: [46, 56],
    iconAnchor: [23, 56],
    popupAnchor: [0, -56],
    tooltipAnchor: [0, -56],
})

    return position === null ? null : (
        <Marker position={position} icon={myIcon}>
        <Tooltip>{infoTooltip}</Tooltip>
        </Marker>
    )
}

