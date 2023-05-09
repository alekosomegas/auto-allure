import React, { useEffect } from 'react'
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

  const [extras, setExtras] = React.useState({
    /*
      [title] : price
    */
   })

   const [delivery, setDelivery] = React.useState({
      /*
        [title] : price
      */
   })

  const [totalPrice, setTotalPrice] = React.useState()


  useEffect(() => {
      setTotalPrice(    
        (carsResults.days && selectedCar) ?
          selectedCar.price * carsResults.days 
          + Object.values(extras).reduce((total, item) => total + item, 0) * carsResults.days
          + Object.values(delivery).reduce((total, item) => total + item, 0)
        : "")
  })
  


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
        extras={extras}
        setExtras={setExtras}
        totalPrice={totalPrice}
        delivery={delivery}
        setDelivery={setDelivery}
      />
    </>
    
  ) 
}
