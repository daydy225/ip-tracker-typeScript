import React, { useContext, useState } from 'react'
import {FaChevronRight} from 'react-icons/fa'
import { SearchBarContainer } from '../styles/Header.styled'
import {  SearchContext } from '../context/Contexts'




export const IpSearchBar:React.FC = () => {
    const [inputValue, setInputValue] = useState('')
    const {setSearch} = useContext(SearchContext)
    // handleSearch function
    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    }
  
    // handleOnclick function
    const handleOnclick = () => {
      if(inputValue === '') return alert('Please enter a valid IP address or domain')
      if(inputValue === 'localhost') return alert('Please enter a valid IP address or domain')
      if(inputValue === undefined) return alert('Please enter a valid IP address or domain')

      const isinputValueAnIpAdrress = inputValue.split('.').length === 4
      const isinputValueADomain = inputValue.split('.').length === 2
      if(!isinputValueAnIpAdrress && !isinputValueADomain)  return alert('Please enter a valid IP address or domain')
      console.log('inputValue bar info', inputValue)
     
      setSearch(inputValue.trim())
      setInputValue('')
    }

  return (
    <SearchBarContainer>
        <input type="text" value={inputValue}  onChange={handleSearch} placeholder="Search for any IP address or domain" />
        <button onClick={handleOnclick}><FaChevronRight /></button>
    </SearchBarContainer>
  )
}
