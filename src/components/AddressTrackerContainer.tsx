import React, { useContext } from 'react'
import { StyledAddressTrackerContainer, Divider, AdrressTrackerItem } from '../styles/Addresstrackercontainer.styled'
import { useGeolocation } from '../hooks/useGeolocation'
import { SearchContext } from '../context/Contexts'
import { getOffset } from '../utils/get_offset'

export const AddressTrackerContainer:React.FC = () => {
  
  const {search} = useContext(SearchContext)

  const {locationData} = useGeolocation(search)
  if(!locationData) return null

  const {query, city, region, zip, timezone, isp} = locationData

  const offset = getOffset(timezone || 'UTC')

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
        <p>{`${offset}`}</p>
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

