import React, {ReactNode, useState} from 'react'
import { PositionContext, SearchContext } from './context/Contexts'
import { LatLngExpression } from 'leaflet'




const AppProviders:React.FC<{ children:ReactNode }> = ({children}) => {
  const [search, setSearch] = useState<string>('')
  const [position, setPosition] = useState<LatLngExpression>([51.505, -0.09])
 

  
  return (
    <SearchContext.Provider value={
      {
        search,
        setSearch
      }
    }>
     <PositionContext.Provider value={
      {
        position,
        setPosition,
      }
     }>

    {children}
     </PositionContext.Provider>
    </SearchContext.Provider>
  )
}

export default AppProviders