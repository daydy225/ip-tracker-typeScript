import React from 'react'
import { Header } from './components/Header'
import { Map } from './components/MapContainer'
import GlobalStyle from './styles/GlobalStyle'
import AppPoviders from './AppProviders'
import 'leaflet/dist/leaflet.css';
import { AddressTrackerContainer } from './components/AddressTrackerContainer'



const  App:React.FC = () => {
 
  return (
    <AppPoviders>
    <GlobalStyle />
    <Header />
    <AddressTrackerContainer />
    <Map />
    </AppPoviders>
  )
}

export default App
