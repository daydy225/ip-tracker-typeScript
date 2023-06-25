
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



//  location data type
export interface LocationData {
    ip: string;
    location: {
      country: string;
      region: string;
      city: string;
      lat: number;
      lng: number;
      postalCode: string;
      timezone: string;
    },
    isp: string;

}