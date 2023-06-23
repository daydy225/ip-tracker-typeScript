import React from 'react'
import { Marker, Tooltip, } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
// i




export const LocationMarker:React.FC<{initialPosition:LatLngExpression}> = ({initialPosition}) => {


  // const map = useMapEvents({
  //    load: () => {
  //     map.getCenter()
  //    },
  //   locationfound: (e: any) => {
  //     console.log('location', e.latlng)
  //     map.flyTo(e.latlng, map.getZoom())
  //   }

  // })
   

    return (
        <Marker position={initialPosition}>
        <Tooltip>Tooltip for Marker</Tooltip>
        </Marker>
    )
}
