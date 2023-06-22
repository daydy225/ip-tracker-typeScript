import { LatLngExpression } from "leaflet"
import { createContext } from "react"

// search context type
export interface SearchProps{
    search:string,
    handleSearch:(e:React.ChangeEvent<HTMLInputElement>) => void,
    handleOnclick:() => void
  }


// search context type
export type SearchContextType = {
    search?:string,
    setSearch:React.Dispatch<React.SetStateAction<string>>
  }

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

//  location data type
export interface LocationData {
  status: string;
  region?: string;
  regionName?: string;
  city?: string;
  zip?: string;
  lat?: number;
  lon?: number;
  offset?: number;
  isp?: string;
  query?: string;
}