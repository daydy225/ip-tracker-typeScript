import React, { useEffect, useState } from 'react'
import { IpSearchBar } from './IpSearchBar'
import { StyledHeader, Image } from '../styles/Header.styled'
import bg from '../assets/images/pattern-bg-desktop.png'
import bgMobile from '../assets/images/pattern-bg-mobile.png'

export const Header:React.FC = () => {
  // state for mobile view 
  const [appWidth, setAppWidth] = useState<number>(window.innerWidth)
 
// get window width on resize from window browser  API
  useEffect(() => {
  window.addEventListener('resize', () => {
      setAppWidth(window.innerWidth)
    })
  , []})
 
  // check if mobile view 
  const mobile = appWidth <= 768


  return (
    <StyledHeader>
      {/* update header background image either on mobile or desktop view */}
      {mobile ? <Image src={bgMobile} alt='Header background Mobile'/> :  <Image src={bg} alt="Header background" />}
        <h1>IP Address Tracker</h1> 
        <IpSearchBar />
    </StyledHeader>
  )
}
