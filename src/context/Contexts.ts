import { createContext } from "react"
import { LatLngExpression } from "leaflet"
import { SearchContextType } from "../types"




// search context
 export const SearchContext = createContext<SearchContextType>({
    search: '',
    setSearch: () => {}
  })

//  position context type
export type PositionContextType = {
    position:LatLngExpression,
    setPosition:React.Dispatch<React.SetStateAction<LatLngExpression>>
}
 

// position context



  export const PositionContext = createContext<PositionContextType>(
    {
      position:[0,0],
      setPosition: () => {}
    }
  )