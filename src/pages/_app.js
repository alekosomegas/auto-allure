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

  const [locations, setLocations] = React.useState({
    pick: "Limassol Office",
    drop: "Limassol Office",
  })

  const [selectedCar, setSelectedCar] = React.useState(false)

  const [step, setStep] = React.useState(2)
  return (
    <>

      <Component 
        {...pageProps}
        dateRange={dateRange}
        setDateRange={setDateRange}
        carsResults={carsResults}
        setCarsResults={setCarsResults}
        selectedCar={selectedCar}
        setSelectedCar={setSelectedCar}
        locations={locations}
        setLocations={setLocations}
        step={step}
        setStep={setStep}
      />
    </>
    
  ) 
}
