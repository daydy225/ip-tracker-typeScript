import React, {ReactNode, useState} from 'react'
import { SearchContext } from './context/SearchContext'



const AppProviders:React.FC<{ children:ReactNode }> = ({children}) => {
  const [search, setSearch] = useState<string>('')
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