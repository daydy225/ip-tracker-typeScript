
import React from 'react'
import { MapContainer, TileLayer,  } from 'react-leaflet';
import { LocationMarker } from './LocationMarker';
import { useGeolocation } from '../hooks/useGeolocation';
import { LatLngExpression } from 'leaflet';









export const Map:React.FC = () => {
  // const {position}  = useContext(PositionContext)
  const {locationData} = useGeolocation()
 if(!locationData) return null
 
 const {lat, lon} = locationData

 const position:LatLngExpression = [lat || 0, lon || 0]
 


  return (
     <MapContainer
      center={position} // Set the initial map center coordinates
      zoom={13} // Set the initial zoom level
      scrollWheelZoom={true} //disable scroll zooming on the map
      style={{ height: '80vh', width: '100%', }} // Set the map container size
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <LocationMarker initialPosition={position}/>
    </MapContainer>
  )
}


  
