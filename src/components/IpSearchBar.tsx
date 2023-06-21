import React, { useContext } from 'react'
import {FaChevronRight} from 'react-icons/fa'
import { SearchBarContainer } from '../styles/Header.styled'
import { SearchContext } from '../context/SearchContext'

export const IpSearchBar:React.FC = () => {
    const {search, setSearch} = useContext(SearchContext)
  
    // handleSearch function
    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    }
  
    // handleOnclick function
    const handleOnclick = () => {
      console.log(search)
    }

  

  return (
    <SearchBarContainer>
        <input type="text" value={search}  onChange={handleSearch} placeholder="Search for any IP address or domain" />
        <button onClick={handleOnclick}><FaChevronRight /></button>
    </SearchBarContainer>
  )
}
