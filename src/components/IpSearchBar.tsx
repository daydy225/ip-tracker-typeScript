import React from 'react'
import {FaChevronRight} from 'react-icons/fa'
import { SearchBarContainer } from '../styles/Header.styled'
import { SearchProps } from '../types'

export const IpSearchBar:React.FC<SearchProps> = ({search, handleSearch, handleOnclick}) => {
  
  

  

  return (
    <SearchBarContainer>
        <input type="text" value={search} onChange={handleSearch} placeholder="Search for any IP address or domain" />
        <button onClick={handleOnclick}><FaChevronRight /></button>
    </SearchBarContainer>
  )
}
