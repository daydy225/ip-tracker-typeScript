import React, { useEffect } from 'react'
import { Marker, Tooltip, useMap } from 'react-leaflet'
import {  LatLngExpression } from 'leaflet'





export const LocationMarker:React.FC<{position:LatLngExpression, infoTooltip: string}> = ({position, infoTooltip}) => {

const map = useMap();

useEffect(() => {
  if (position) {
    map.flyTo(position, map.getZoom());
  }
}, [position, map]);

   

    return position === null ? null : (
        <Marker position={position}>
        <Tooltip>{infoTooltip}</Tooltip>
        </Marker>
    )
}

