import React, { useState, useEffect } from 'react'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import BrandsData from './brands.json';
import MainContext from './MainContext'
import Copied from './components/Copied';

const App = () => {

  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)


  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [copied])

  const data = {
    selectedBrands,
    setSelectedBrands,
    brands,
    setCopied,
  }

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  )
}

export default App
