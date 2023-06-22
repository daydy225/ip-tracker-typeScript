import React from 'react'
import { Marker, Tooltip } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'




export const LocationMarker:React.FC<{position:LatLngExpression}> = ({position}) => {
  // const {position, setPosition} = useContext(PositionContext)
   
  // const map = useMapEvents({
  //    load: () => {
  //     map.locate()
  //    },
  //   locationfound: (e: any) => {
  //     setPosition(e.latlng)
  //     console.log('location', e.latlng)
  //     map.flyTo(e.latlng, map.getZoom())
  //   }

  // })
   

    return (
        <Marker position={position}>
        <Tooltip>Tooltip for Marker</Tooltip>
        </Marker>
    )
}
