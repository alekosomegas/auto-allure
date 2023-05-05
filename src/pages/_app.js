import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
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
