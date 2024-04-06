import React, { useState } from 'react'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import BrandsData from './brands.json';
import MainContext from './MainContext'

const App = () => {

  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])

  const data = {
    selectedBrands,
    setSelectedBrands,
    brands
  }

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  )
}

export default App
