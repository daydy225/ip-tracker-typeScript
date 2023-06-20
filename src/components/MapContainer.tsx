import React from 'react'
import { StyledMapContainer } from '../styles/MapContainer.styled'
import { AddressTrackerContainer } from './AddressTrackerContainer'

export const MapContainer:React.FC = () => {
  return (
    <StyledMapContainer>
     <AddressTrackerContainer />
    </StyledMapContainer>
  )
}
