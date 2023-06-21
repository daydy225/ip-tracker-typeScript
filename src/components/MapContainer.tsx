import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';



export const Map:React.FC = () => {
  
  return (
     <MapContainer
      center={[51.505, -0.09]} // Set the initial map center coordinates
      zoom={13} // Set the initial zoom level
      style={{ height: '100vh', width: '100%', }} // Set the map container size
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  )
}
