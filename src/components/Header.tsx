import React from 'react'
import { IpSearchBar } from './IpSearchBar'
import { StyledHeader } from '../styles/Header.styled'
import { SearchProps } from '../types'

export const Header:React.FC<SearchProps> = ({search, handleSearch, handleOnclick}) => {
  return (
    <StyledHeader>
        <h1>IP Address Tracker</h1> 
        <IpSearchBar search={search} handleSearch={handleSearch} handleOnclick={handleOnclick} />
    </StyledHeader>
  )
}
