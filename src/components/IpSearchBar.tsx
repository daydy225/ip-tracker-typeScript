import React, { useContext } from 'react'
import {FaChevronRight} from 'react-icons/fa'
import { SearchBarContainer } from '../styles/Header.styled'
import { SearchContext } from '../context/Contexts'
import { useLocationIpAddress } from '../hooks/useLocationIpAddress'

export const IpSearchBar:React.FC = () => {
    const {search, setSearch} = useContext(SearchContext)
  
    // handleSearch function
    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    }
  
    // handleOnclick function
    const handleOnclick = () => {
      if(search === '') return alert('Please enter a valid IP address or domain')
      if(search === 'localhost') return alert('Please enter a valid IP address or domain')
      if(search === undefined) return alert('Please enter a valid IP address or domain')

      const isSearchAnIpAdrress = search.split('.').length === 4
      const isSearchADomain = search.split('.').length === 2
      if(!isSearchAnIpAdrress && !isSearchADomain)  return alert('Please enter a valid IP address or domain')
      console.log('search bar info', search)
    }

  

  return (
    <SearchBarContainer>
        <input type="text" value={search}  onChange={handleSearch} placeholder="Search for any IP address or domain" />
        <button onClick={handleOnclick}><FaChevronRight /></button>
    </SearchBarContainer>
  )
}
