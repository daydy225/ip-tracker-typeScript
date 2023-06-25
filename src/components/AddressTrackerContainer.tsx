import React, { useContext } from 'react'
import { StyledAddressTrackerContainer, Divider, AdrressTrackerItem } from '../styles/Addresstrackercontainer.styled'
import { useGeolocation } from '../hooks/useGeolocation'
import { SearchContext } from '../context/Contexts'

export const AddressTrackerContainer:React.FC = () => {
  
  const {search} = useContext(SearchContext)

  const {locationData} = useGeolocation(search)
  if(!locationData) return null

  const { location: {city, country, postalCode, timezone}, ip, isp} = locationData


  return (
    <StyledAddressTrackerContainer>
       <div>
        <AdrressTrackerItem >
        <span>ip address</span>
        <p>{ip}</p>
        </AdrressTrackerItem> 
        <Divider /> 
      </div>
      <div>
       
        <AdrressTrackerItem>
        <span>location</span>
        <p>{city}, {country} {`${postalCode}` || ''}</p>
        </AdrressTrackerItem>
      </div>
      <div>
        <Divider />
        <AdrressTrackerItem>
        <span>timezone</span>
        <p>{`UTC ${timezone}`}</p>
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

