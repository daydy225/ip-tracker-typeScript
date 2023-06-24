import React, {ReactNode, useState} from 'react'
import { SearchContext } from './context/Contexts'



const AppProviders:React.FC<{ children:ReactNode }> = ({children}) => {
  const [search, setSearch] = useState<string>('')
  // const [position, setPosition] = useState<LatLngExpression>([0,0])
  
  
  return (
    <SearchContext.Provider value={
      {
        search,
        setSearch
      }
    }>
   

    {children}
    </SearchContext.Provider>
  )
}

export default AppProviders