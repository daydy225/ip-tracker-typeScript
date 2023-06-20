import React from 'react'
import { StyledAddressTrackerContainer, Divider, AdrressTrackerItem } from '../styles/Addresstrackercontainer.styled'

export const AddressTrackerContainer:React.FC = () => {
  return (
    <StyledAddressTrackerContainer>
       <div>
        <AdrressTrackerItem >
        <span>ip address</span>
        <p>192.212.174.101</p>
        </AdrressTrackerItem> 
      </div>
      <div>
        <Divider /> 
        <AdrressTrackerItem>
        <span>location</span>
        <p>Brooklyn, NY 1001</p>
        </AdrressTrackerItem>
      </div>
      <div>
        <Divider />
        <AdrressTrackerItem>
        <span>timezone</span>
        <p>UTC -05:00</p>
        </AdrressTrackerItem>
      </div>
      <div>
        <Divider />
        <AdrressTrackerItem>
        <span>isp</span>
        <p>SpaceX Starlink</p>
        </AdrressTrackerItem>
      </div>
    </StyledAddressTrackerContainer>
  )
}
