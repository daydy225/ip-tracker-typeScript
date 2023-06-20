import React from 'react'
import { Header } from './components/Header'
import { MapContainer } from './components/MapContainer'
import GlobalStyle from './styles/GlobalStyle'



const  App:React.FC = () => {
  const [search, setSearch] = React.useState<string>('')

  // handleSearch function
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  // handleOnclick function
  const handleOnclick = () => {
    console.log(search)
  }

  return (
    <>
    <GlobalStyle />
    <Header search={search}  handleSearch={handleSearch} handleOnclick={handleOnclick} />
    <MapContainer />
    </>
  )
}

export default App
