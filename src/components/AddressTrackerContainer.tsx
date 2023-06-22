import React from 'react'
import { StyledAddressTrackerContainer, Divider, AdrressTrackerItem } from '../styles/Addresstrackercontainer.styled'
import { useGeolocation } from '../hooks/useGeolocation'

export const AddressTrackerContainer:React.FC = () => {
  
  const {locationData} = useGeolocation()
  if(!locationData) return null

  const {query, city, region, zip, offset, isp} = locationData


  return (
    <StyledAddressTrackerContainer>
       <div>
        <AdrressTrackerItem >
        <span>ip address</span>
        <p>{query}</p>
        </AdrressTrackerItem> 
      </div>
      <div>
        <Divider /> 
        <AdrressTrackerItem>
        <span>location</span>
        <p>{city}, {region} {`${zip}` || ''}</p>
        </AdrressTrackerItem>
      </div>
      <div>
        <Divider />
        <AdrressTrackerItem>
        <span>timezone</span>
        <p>UTC {`${offset?.toFixed(2)}`}</p>
        </AdrressTrackerItem>
      </div>
      <div>
        <Divider />
        <AdrressTrackerItem>
        <span>isp</span>
        <p>{isp}</p>
        </AdrressTrackerItem>
      </div>
    </StyledAddressTrackerContainer>
  )
}

