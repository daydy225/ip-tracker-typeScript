
import React, { useContext, useEffect, useState } from 'react'
import { MapContainer, TileLayer, } from 'react-leaflet';
import { LocationMarker } from './LocationMarker';
import { useGeolocation } from '../hooks/useGeolocation';
import { LatLngExpression } from 'leaflet';
import { SearchContext } from '../context/Contexts';






export const Map:React.FC = () => {
const {search} = useContext(SearchContext)
const [position, setPosition] = useState<LatLngExpression | null >(null);
const [infoTooltip, setInfoTooltip] = useState<string>('')
 const {locationData} = useGeolocation(search)

 
  useEffect(() => {
    if (locationData) {
      const { lat, lon } = locationData;
      setPosition([lat || 0, lon || 0]);
      // info tooltip is set to the isp name and country code
      setInfoTooltip(`${locationData.isp?.split(' ')[0]}, ${locationData.countryCode}`)
    }
  }, [locationData]);
 


  return position === null ? null : (
     <MapContainer
      center={position} // Set the initial map center coordinates
      zoom={13} // Set the initial zoom level
      scrollWheelZoom={true} //disable scroll zooming on the map
      style={{ height: '80vh', width: '100%', }} // Set the map container size
      // Empty event handler to prevent warning
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
     <LocationMarker position={position} infoTooltip={infoTooltip}/> 
    </MapContainer>
  )
}


