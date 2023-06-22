
import React, {useContext}  from 'react'
import { MapContainer, TileLayer,  } from 'react-leaflet';
import { LocationMarker } from './LocationMarker';
import { PositionContext } from '../context/Contexts';

// const center = [51.505, -0.09]
// const zoom = 13





export const Map:React.FC = () => {
  const {position}  = useContext(PositionContext)
  
 

  return (
     <MapContainer
      center={position} // Set the initial map center coordinates
      zoom={13} // Set the initial zoom level
      scrollWheelZoom={false} //disable scroll zooming on the map
      style={{ height: '100vh', width: '100%', }} // Set the map container size
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <LocationMarker position={position}/>
    </MapContainer>
  )
}



// const LocationMarker = () => {
//   const [position, setPosition] = useState<LatLngExpression | null >(null)
//   const map = useMapEvents({
//     click: () => {
//       map.locate()
//     },

//     locationfound: (e: any) => {
//       setPosition(e.latlng)
//       console.log('location', e.latlng)
//       map.flyTo(e.latlng, map.getZoom())
//     }
//   })

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//       <Tooltip>Tooltip for Marker</Tooltip>
//     </Marker>
//   )
// }
