import { LatLngExpression, } from 'leaflet';
import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Tooltip,  } from 'react-leaflet';


const LocationMarker = () => {
  const [position, setPosition] = useState<LatLngExpression>([0, 0])
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(location) {
      // setPosition(e.latlng)
      setPosition(location.latlng)
      console.log('location', location)
      // map.flyTo(location.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
      <Tooltip>Tooltip for Marker</Tooltip>
    </Marker>
  )
}



export const Map:React.FC = () => {
   
  const position:LatLngExpression = [51.505, -0.09]

 

  return (
     <MapContainer
      center={position} // Set the initial map center coordinates
      zoom={13} // Set the initial zoom level
      scrollWheelZoom={false} //disable scroll zooming on the map
      style={{ height: '100vh', width: '100%', }} // Set the map container size
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* <Marker position={position}>
      <Tooltip>Tooltip for Marker</Tooltip>
    </Marker> */}
    <LocationMarker />
    </MapContainer>
  )
}

