import React from 'react'
import { Header } from './components/Header'
import { MapContainer } from './components/MapContainer'
import GlobalStyle from './styles/GlobalStyle'
import AppPoviders from './AppProviders'


const  App:React.FC = () => {

  return (
    <AppPoviders>
    <GlobalStyle />
    <Header />
    <MapContainer />
    </AppPoviders>
  )
}

export default App
