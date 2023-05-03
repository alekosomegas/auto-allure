import React from 'react'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  const [dateRange, setDateRange] = React.useState({
    startDate: undefined,
    endDate: undefined,
})

  const [carsResults, setCarsResults] = React.useState({
    data: null,
    days: null
  })

  return (
    <>
      <Navbar />
      <Component 
        {...pageProps}
        dateRange={dateRange}
        setDateRange={setDateRange}
        carsResults={carsResults}
        setCarsResults={setCarsResults}
      />
    </>
    
  ) 
}
